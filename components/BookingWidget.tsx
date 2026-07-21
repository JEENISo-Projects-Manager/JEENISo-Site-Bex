"use client";

import Script from "next/script";

export default function BookingWidget() {
  return (
    <div className="cne-booking cne-booking--redesign" id="rdv_3458-widget">
      <div className="booking-head">
        <h3 className="sim-title">Prendre rendez-vous</h3>
      </div>

      <div className="booking-nav">
        <button type="button" className="booking-nav-btn" onClick={() => (window as any).rdv_3458_prevWeek()}>
          ← Semaine préc.
        </button>
        <span className="booking-week-label" id="rdv_3458-week-label"></span>
        <button type="button" className="booking-nav-btn" onClick={() => (window as any).rdv_3458_nextWeek()}>
          Semaine suiv. →
        </button>
      </div>

      <div className="booking-calendar" id="rdv_3458-calendar" aria-live="polite">
        <div className="booking-days">
          <div className="booking-day-header">Lun</div>
          <div className="booking-day-header">Mar</div>
          <div className="booking-day-header">Mer</div>
          <div className="booking-day-header">Jeu</div>
          <div className="booking-day-header">Ven</div>
        </div>
        <div className="booking-dates" id="rdv_3458-dates"></div>
      </div>

      <div className="booking-selected" id="rdv_3458-selected" style={{ display: "none" }}></div>

      <div className="booking-slots" id="rdv_3458-slots" style={{ display: "none" }}>
        <h4>Choisissez une demi-journée</h4>
        <p className="booking-slot-help" id="rdv_3458-slot-help">
          Sélectionnez un créneau disponible.
        </p>
        <div className="booking-slot-options">
          <button
            type="button"
            className="booking-slot-btn"
            data-slot="matin"
            onClick={(e) => (window as any).rdv_3458_selectSlot(e.currentTarget)}
          >
            <span className="slot-pill" aria-hidden="true">
              <span className="slot-pill__label">AM</span>
            </span>
            <span className="booking-slot-copy">
              <strong>Matin</strong>
              <small>09h00 → 12h00</small>
            </span>
          </button>
          <button
            type="button"
            className="booking-slot-btn"
            data-slot="midi"
            onClick={(e) => (window as any).rdv_3458_selectSlot(e.currentTarget)}
          >
            <span className="slot-pill" aria-hidden="true">
              <span className="slot-pill__label">12h</span>
            </span>
            <span className="booking-slot-copy">
              <strong>Midi</strong>
              <small>12h00 → 14h00</small>
            </span>
          </button>
          <button
            type="button"
            className="booking-slot-btn"
            data-slot="apres-midi"
            onClick={(e) => (window as any).rdv_3458_selectSlot(e.currentTarget)}
          >
            <span className="slot-pill" aria-hidden="true">
              <span className="slot-pill__label">PM</span>
            </span>
            <span className="booking-slot-copy">
              <strong>Après-midi</strong>
              <small>14h00 → 18h00</small>
            </span>
          </button>
          <button
            type="button"
            className="booking-slot-btn"
            data-slot="soir"
            onClick={(e) => (window as any).rdv_3458_selectSlot(e.currentTarget)}
          >
            <span className="slot-pill" aria-hidden="true">
              <span className="slot-pill__label">18h</span>
            </span>
            <span className="booking-slot-copy">
              <strong>Soir</strong>
              <small>18h00 → 20h00</small>
            </span>
          </button>
        </div>
      </div>

      <div className="booking-form" id="rdv_3458-form" style={{ display: "none" }}>
        <div className="sim-form booking-form-grid">
          <div className="sim-form-group">
            <label htmlFor="rdv_3458-nom">Nom complet *</label>
            <input type="text" id="rdv_3458-nom" autoComplete="name" required />
          </div>
          <div className="sim-form-group">
            <label htmlFor="rdv_3458-email">Email *</label>
            <input type="email" id="rdv_3458-email" autoComplete="email" required />
          </div>
          <div className="sim-form-group">
            <label htmlFor="rdv_3458-tel">Téléphone *</label>
            <input type="tel" id="rdv_3458-tel" autoComplete="tel" required />
          </div>
          <div className="sim-form-group">
            <label htmlFor="rdv_3458-objet">Objet</label>
            <input type="text" id="rdv_3458-objet" placeholder="Ex: cadrage projet web" />
          </div>
        </div>
        <div className="booking-error" id="rdv_3458-error" style={{ display: "none" }}></div>
        <div className="booking-actions" style={{ position: "relative", zIndex: 10 }}>
          <button type="button" className="sim-back" onClick={() => (window as any).rdv_3458_backToSlots()}>
            ← Retour créneaux
          </button>
          <button type="button" className="sim-submit" id="rdv_3458-submit" onClick={() => (window as any).rdv_3458_submit()}>
            Confirmer le rendez-vous
          </button>
        </div>
      </div>

      <div className="booking-success" id="rdv_3458-success" style={{ display: "none" }}>
        <div className="booking-success-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth={2.5}>
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h4>Demande envoyée ✅</h4>
        <p id="rdv_3458-success-slot"></p>
        <p id="rdv_3458-success-message">L&apos;équipe JEENISo vous recontactera pour confirmer ce rendez-vous.</p>
      </div>

      <Script
        id="rdv_3458-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    (function() {
        var uid = 'rdv_3458';
        var state = {
            weekOffset: 0,
            selectedDate: null,
            selectedSlot: null,
            busySlots: [],
            anchorMonday: null,
            latestRequestId: 0
        };

        function pad(val) { return val < 10 ? '0' + val : String(val); }
        function isoDate(date) { return date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate()); }
        function formatSlot(slot) {
            if (slot === 'matin') return 'Matin (09h00-12h00)';
            if (slot === 'midi') return 'Midi (12h00-14h00)';
            if (slot === 'soir') return 'Soir (18h00-20h00)';
            return 'Après-midi (14h00-18h00)';
        }
        function formatDate(date) {
            if (!date) return '';
            return date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
        }

        function computeAnchorMonday() {
            var base = new Date();
            base.setHours(0, 0, 0, 0);
            var day = base.getDay();
            if (day === 6) base.setDate(base.getDate() + 2);
            else if (day === 0) base.setDate(base.getDate() + 1);
            day = base.getDay();
            var delta = day === 0 ? -6 : 1 - day;
            base.setDate(base.getDate() + delta);
            return base;
        }

        function getWeekStart(offsetWeeks) {
            if (!state.anchorMonday) state.anchorMonday = computeAnchorMonday();
            var weekStart = new Date(state.anchorMonday);
            weekStart.setDate(weekStart.getDate() + (offsetWeeks * 7));
            return weekStart;
        }

        function fetchBusySlots(weekStartIso, requestId) {
            // No booking backend is wired up yet for JEENISo: treat every slot as available.
            // Replace this with a real availability endpoint once one exists.
            state.busySlots = [];
            return Promise.resolve();
        }

        function resetPanels() {
            document.getElementById(uid + '-slots').style.display = 'none';
            document.getElementById(uid + '-form').style.display = 'none';
            document.getElementById(uid + '-success').style.display = 'none';
        }

        function renderSlots() {
            var slotsWrap = document.getElementById(uid + '-slots');
            var slotHelp = document.getElementById(uid + '-slot-help');
            if (!slotsWrap || !state.selectedDate) return;
            slotsWrap.style.display = 'block';
            document.querySelectorAll('#' + uid + '-widget .booking-slot-btn').forEach(function(btn) {
                var slot = btn.dataset.slot;
                var key = isoDate(state.selectedDate) + '_' + slot;
                var busy = state.busySlots.indexOf(key) !== -1;
                btn.classList.remove('selected');
                btn.classList.toggle('is-busy', busy);
                btn.disabled = busy;
                btn.setAttribute('aria-disabled', busy ? 'true' : 'false');
            });
            var available = document.querySelectorAll('#' + uid + '-widget .booking-slot-btn:not(.is-busy)').length;
            if (slotHelp) slotHelp.textContent = available > 0 ? 'Sélectionnez un créneau disponible.' : 'Aucun créneau disponible pour cette date.';
        }

        window[uid + '_prevWeek'] = function() { state.weekOffset--; generateCalendar(); };
        window[uid + '_nextWeek'] = function() { state.weekOffset++; generateCalendar(); };

        function generateCalendar() {
            var container = document.getElementById(uid + '-dates');
            if (!container) return;
            container.innerHTML = '';
            state.selectedDate = null;
            state.selectedSlot = null;
            resetPanels();

            var selectedBanner = document.getElementById(uid + '-selected');
            if (selectedBanner) { selectedBanner.style.display = 'none'; selectedBanner.textContent = ''; }

            var currentRequestId = ++state.latestRequestId;

            var startOfWeek = getWeekStart(state.weekOffset);
            var weekLabel = document.getElementById(uid + '-week-label');
            var endOfWeek = new Date(startOfWeek);
            endOfWeek.setDate(endOfWeek.getDate() + 4);
            if (weekLabel) weekLabel.textContent = startOfWeek.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' }) + ' – ' + endOfWeek.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });

            fetchBusySlots(isoDate(startOfWeek), currentRequestId).finally(function() {
                if (currentRequestId !== state.latestRequestId) return;
                var today = new Date();
                today.setHours(0, 0, 0, 0);
                for (var i = 0; i < 5; i++) {
                    var date = new Date(startOfWeek);
                    date.setDate(startOfWeek.getDate() + i);
                    var btn = document.createElement('button');
                    btn.type = 'button';
                    btn.className = 'booking-date-btn';
                    btn.dataset.date = isoDate(date);
                    btn.innerHTML = '<span class="booking-date-num">' + pad(date.getDate()) + '</span><span class="booking-date-day">' + ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'][i] + '</span>';
                    if (date < today) { btn.classList.add('unavailable'); btn.disabled = true; }
                    else { btn.onclick = function() { selectDate(this); }; }
                    container.appendChild(btn);
                }
            });
        }

        function selectDate(btn) {
            document.querySelectorAll('#' + uid + '-widget .booking-date-btn').forEach(function(item) { item.classList.remove('selected'); });
            var allSlotBtns = document.querySelectorAll('#' + uid + '-widget .booking-slot-btn');
            allSlotBtns.forEach(function(item) {
                item.classList.remove('selected');
                item.style.backgroundColor = '';
                item.style.color = '';
                item.style.borderColor = '';
            });
            btn.classList.add('selected');
            var parts = btn.dataset.date.split('-');
            state.selectedDate = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
            state.selectedSlot = null;
            var selectedBanner = document.getElementById(uid + '-selected');
            if (selectedBanner) { selectedBanner.style.display = 'block'; selectedBanner.textContent = 'Date sélectionnée : ' + formatDate(state.selectedDate); }
            renderSlots();
        }

        window[uid + '_selectSlot'] = function(btn) {
            if (btn.disabled) return;
            document.querySelectorAll('#' + uid + '-widget .booking-slot-btn').forEach(function(item) { item.classList.remove('selected'); });
            btn.classList.add('selected');
            state.selectedSlot = btn.dataset.slot;
            var summary = formatDate(state.selectedDate) + ' — ' + formatSlot(state.selectedSlot);
            var selectedBanner = document.getElementById(uid + '-selected');
            if (selectedBanner) { selectedBanner.textContent = summary; selectedBanner.style.display = 'block'; }
            document.getElementById(uid + '-slots').style.display = 'none';
            document.getElementById(uid + '-form').style.display = 'block';
        };

        window[uid + '_backToSlots'] = function() {
            var form = document.getElementById(uid + '-form');
            var slotsWrap = document.getElementById(uid + '-slots');
            if (form) form.style.display = 'none';
            if (slotsWrap) slotsWrap.style.display = 'block';
            document.querySelectorAll('#' + uid + '-widget .booking-slot-btn').forEach(function(btn) {
                btn.classList.remove('selected');
                btn.style.backgroundColor = '';
                btn.style.color = '';
            });
            state.selectedSlot = null;
            document.getElementById(uid + '-slots').style.display = 'block';
        };

        window[uid + '_submit'] = function() {
            var nom = document.getElementById(uid + '-nom').value;
            var email = document.getElementById(uid + '-email').value;
            var tel = document.getElementById(uid + '-tel').value;
            var objet = document.getElementById(uid + '-objet').value;
            if (!nom || !email || !tel) {
                document.getElementById(uid + '-error').style.display = 'block';
                document.getElementById(uid + '-error').textContent = 'Merci de remplir tous les champs obligatoires.';
                return;
            }
            // No booking backend is wired up yet for JEENISo: this only shows a
            // local confirmation. Wire this up to a real endpoint (email/CRM/API)
            // before relying on it to actually collect appointment requests.
            document.getElementById(uid + '-form').style.display = 'none';
            document.getElementById(uid + '-success-slot').textContent = formatDate(state.selectedDate) + ' — ' + formatSlot(state.selectedSlot);
            document.getElementById(uid + '-success').style.display = 'block';
        };

        state.anchorMonday = computeAnchorMonday();
        generateCalendar();
    })();
`,
        }}
      />
    </div>
  );
}
