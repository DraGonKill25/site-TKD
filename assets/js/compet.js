(function () {
    'use strict';

    var STORAGE_KEY = 'tkd_poomsae_compet_history';

    function round2(n) {
        return Math.round(n * 100) / 100;
    }

    function clampScore(n) {
        if (n < 0) return 0;
        if (n > 10) return 10;
        return round2(n);
    }

    function formatFr(n) {
        return n.toFixed(2).replace('.', ',');
    }

    var state = {
        finalScore: 0,
        techDeductionSum: 0,
        saveModalOpen: false
    };

    function technicalScore() {
        var d = Math.min(4, state.techDeductionSum);
        return round2(Math.max(0, 4 - d));
    }

    function applyDeduction(amount) {
        if (state.techDeductionSum >= 4) return;
        state.techDeductionSum = round2(state.techDeductionSum + amount);
        if (state.techDeductionSum > 4) state.techDeductionSum = 4;
        updateTechPreview();
    }

    function sliderValue(id) {
        var el = document.getElementById(id);
        if (!el) return 0;
        return round2(parseInt(el.value, 10) / 10);
    }

    function sumPerformance() {
        return round2(sliderValue('perf-speed') + sliderValue('perf-rhythm') + sliderValue('perf-energy'));
    }

    function computedTotal() {
        return clampScore(technicalScore() + sumPerformance());
    }

    function getSteps() {
        return document.querySelectorAll('.compet-step');
    }

    function showStep(num) {
        getSteps().forEach(function (step) {
            var n = parseInt(step.getAttribute('data-step'), 10);
            var on = n === num;
            step.hidden = !on;
            step.classList.toggle('compet-step--active', on);
        });
    }

    function updateTechPreview() {
        var el = document.getElementById('compet-tech-preview');
        if (el) el.textContent = formatFr(technicalScore());
    }

    function updateSliderOutputs() {
        ['perf-speed', 'perf-rhythm', 'perf-energy'].forEach(function (id) {
            var input = document.getElementById(id);
            var outId = id + '-out';
            var out = document.getElementById(outId);
            if (!input || !out) return;
            var v = round2(parseInt(input.value, 10) / 10);
            out.textContent = formatFr(v);
            input.setAttribute('aria-valuenow', String(v));
        });
        var sumEl = document.getElementById('compet-perf-sum');
        if (sumEl) sumEl.textContent = formatFr(sumPerformance());
    }

    function updateFinalDisplay() {
        var el = document.getElementById('compet-final-display');
        if (el) el.textContent = formatFr(state.finalScore);
    }

    function loadHistory() {
        try {
            var raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return [];
            var data = JSON.parse(raw);
            return Array.isArray(data) ? data : [];
        } catch (e) {
            return [];
        }
    }

    function saveHistory(entries) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    }

    function renderHistory() {
        var list = document.getElementById('compet-history-list');
        if (!list) return;
        var entries = loadHistory();
        list.innerHTML = '';
        if (entries.length === 0) {
            var empty = document.createElement('li');
            empty.className = 'compet-history-empty';
            empty.textContent = 'Aucune note enregistrée pour le moment.';
            list.appendChild(empty);
            return;
        }
        entries.slice().reverse().forEach(function (entry) {
            var li = document.createElement('li');
            li.className = 'compet-history-item';
            var dateStr = entry.at ? new Date(entry.at).toLocaleString('fr-FR') : '';
            var perf = entry.performance || {};
            var labelRaw = typeof entry.label === 'string' ? entry.label.trim() : '';
            var labelBlock = labelRaw
                ? '<span class="compet-history-label">' + escapeHtml(labelRaw) + '</span>'
                : '';
            li.innerHTML =
                labelBlock +
                '<span class="compet-history-date">' + escapeHtml(dateStr) + '</span>' +
                '<span class="compet-history-score">' + formatFr(entry.final) + ' / 10</span>' +
                '<span class="compet-history-detail">Tech. ' + formatFr(entry.technical) +
                ' · Vit. ' + formatFr(perf.speed) + ' · Ryth. ' + formatFr(perf.rhythm) +
                ' · Énergie ' + formatFr(perfNum(perf.energy)) + '</span>';
            list.appendChild(li);
        });
    }

    function escapeHtml(s) {
        if (!s) return '';
        var d = document.createElement('div');
        d.textContent = s;
        return d.innerHTML;
    }

    function perfNum(n) {
        var x = typeof n === 'number' ? n : parseFloat(n);
        return isNaN(x) ? 0 : x;
    }

    function onValidate1() {
        updateTechPreview();
        showStep(2);
    }

    function onValidate2() {
        updateSliderOutputs();
        state.finalScore = computedTotal();
        updateFinalDisplay();
        showStep(3);
    }

    function onBack2() {
        showStep(1);
    }

    function onBack3() {
        showStep(2);
    }

    function adjust(delta) {
        state.finalScore = clampScore(state.finalScore + delta);
        updateFinalDisplay();
    }

    function openSaveModal() {
        var modal = document.getElementById('compet-save-modal');
        var input = document.getElementById('compet-save-label');
        if (!modal) return;
        modal.hidden = false;
        modal.setAttribute('aria-hidden', 'false');
        state.saveModalOpen = true;
        if (input) {
            input.value = '';
            input.focus();
        }
    }

    function closeSaveModal() {
        var modal = document.getElementById('compet-save-modal');
        if (!modal) return;
        modal.hidden = true;
        modal.setAttribute('aria-hidden', 'true');
        state.saveModalOpen = false;
    }

    function saveEntryWithLabel(labelText) {
        var entry = {
            at: new Date().toISOString(),
            label: labelText || '',
            final: state.finalScore,
            deductionTotal: state.techDeductionSum,
            technical: technicalScore(),
            performance: {
                speed: sliderValue('perf-speed'),
                rhythm: sliderValue('perf-rhythm'),
                energy: sliderValue('perf-energy')
            }
        };
        var entries = loadHistory();
        entries.push(entry);
        saveHistory(entries);
        renderHistory();
    }

    function onSaveConfirm() {
        var input = document.getElementById('compet-save-label');
        var labelText = input && input.value ? input.value.trim() : '';
        saveEntryWithLabel(labelText);
        closeSaveModal();
    }

    function onClearHistory() {
        if (!confirm('Supprimer tout l\'historique des notes ?')) return;
        localStorage.removeItem(STORAGE_KEY);
        renderHistory();
    }

    function onNewSession() {
        state.techDeductionSum = 0;
        ['perf-speed', 'perf-rhythm', 'perf-energy'].forEach(function (id) {
            var el = document.getElementById(id);
            if (el) el.value = '20';
        });
        updateTechPreview();
        updateSliderOutputs();
        state.finalScore = computedTotal();
        updateFinalDisplay();
        showStep(1);
    }

    function bind() {
        var d01 = document.getElementById('deduct-01');
        var d03 = document.getElementById('deduct-03');
        if (d01) d01.addEventListener('click', function () { applyDeduction(0.1); });
        if (d03) d03.addEventListener('click', function () { applyDeduction(0.3); });

        ['perf-speed', 'perf-rhythm', 'perf-energy'].forEach(function (id) {
            var el = document.getElementById(id);
            if (el) el.addEventListener('input', updateSliderOutputs);
        });

        var v1 = document.getElementById('compet-validate-1');
        if (v1) v1.addEventListener('click', onValidate1);

        var v2 = document.getElementById('compet-validate-2');
        if (v2) v2.addEventListener('click', onValidate2);

        var b2 = document.getElementById('compet-back-2');
        if (b2) b2.addEventListener('click', onBack2);

        var b3 = document.getElementById('compet-back-3');
        if (b3) b3.addEventListener('click', onBack3);

        function bindAdj(id, delta) {
            var el = document.getElementById(id);
            if (el) el.addEventListener('click', function () { adjust(delta); });
        }
        bindAdj('adj-1-up', 1);
        bindAdj('adj-1-down', -1);
        bindAdj('adj-01-up', 0.1);
        bindAdj('adj-01-down', -0.1);
        bindAdj('adj-001-up', 0.01);
        bindAdj('adj-001-down', -0.01);

        var save = document.getElementById('compet-save-history');
        if (save) save.addEventListener('click', openSaveModal);

        var saveConfirm = document.getElementById('compet-save-confirm');
        if (saveConfirm) saveConfirm.addEventListener('click', onSaveConfirm);

        var saveCancel = document.getElementById('compet-save-cancel');
        if (saveCancel) saveCancel.addEventListener('click', closeSaveModal);

        var saveBackdrop = document.getElementById('compet-save-modal-backdrop');
        if (saveBackdrop) saveBackdrop.addEventListener('click', closeSaveModal);

        var saveLabelInput = document.getElementById('compet-save-label');
        if (saveLabelInput) {
            saveLabelInput.addEventListener('keydown', function (e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    onSaveConfirm();
                }
            });
        }

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && state.saveModalOpen) {
                e.preventDefault();
                closeSaveModal();
            }
        });

        var clear = document.getElementById('compet-clear-history');
        if (clear) clear.addEventListener('click', onClearHistory);

        var neu = document.getElementById('compet-new-session');
        if (neu) neu.addEventListener('click', onNewSession);
    }

    document.addEventListener('DOMContentLoaded', function () {
        updateTechPreview();
        updateSliderOutputs();
        state.finalScore = computedTotal();
        updateFinalDisplay();
        bind();
        renderHistory();
    });
})();
