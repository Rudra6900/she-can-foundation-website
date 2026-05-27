document.addEventListener("DOMContentLoaded", () => {

    // PRO LOGIC 1: SINGLE PAGE APPLICATION View Toggle Engine
    const tabs = document.querySelectorAll('.nav-tab');
    const pages = document.querySelectorAll('.page-view');
    const triggers = document.querySelectorAll('.trigger-tab');

    const switchView = (targetPageId) => {
        // Clear all operations operational hidden views
        pages.forEach(page => page.classList.add('hidden'));
        
        // Wipe indicators from active nav panel links layout arrays
        tabs.forEach(tab => tab.classList.remove('active'));

        // Activate target operational module interface state
        const activePage = document.getElementById(`${targetPageId}-page`);
        if (activePage) {
            activePage.classList.remove('hidden');
        }

        const targetNavRef = document.querySelector(`.nav-tab[data-page="${targetPageId}"]`);
        if (targetNavRef) {
            targetNavRef.classList.add('active');
        }

        // Trigger dynamic numerical scaling function if back home
        if (targetPageId === 'home') {
            executeDynamicMetricsCounter();
        }
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const pageTarget = tab.getAttribute('data-page');
            if(pageTarget) {
                switchView(pageTarget);
            }
        });
    });

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const destination = trigger.getAttribute('data-target');
            if(destination) {
                switchView(destination);
            }
        });
    });


    // PRO LOGIC 2: INTERACTIVE LIVE RUNNING NUMERICAL COUNTER MECHANISM
    const executeDynamicMetricsCounter = () => {
        const counters = document.querySelectorAll('.counter');
        const processingSpeed = 130; // Scale numerical scaling speed parameter configurations

        counters.forEach(counter => {
            counter.innerText = "0"; // Refresh baseline counts state cleanly
            const runTicker = () => {
                const limitValue = +counter.getAttribute('data-target');
                const presentState = +counter.innerText;
                const dynamicIncrement = limitValue / processingSpeed;

                if (presentState < limitValue) {
                    counter.innerText = Math.ceil(presentState + dynamicIncrement);
                    setTimeout(runTicker, 12);
                } else {
                    counter.innerText = limitValue.toLocaleString() + "+";
                }
            };
            runTicker();
        });
    };

    // Initialize metrics automatic load-in runtime loop frame capture
    executeDynamicMetricsCounter();


    // PRO LOGIC 3: EXTENDED APPLICATION SUBMISSION FORM CONTROLLER VALIDATIONS (MOBILE VIEW FRIENDLY)
    const formInstance = document.getElementById('proJoinForm');
    const submissionResult = document.getElementById('proFeedback');

    formInstance.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameValue = document.getElementById('vName').value.trim();
        const contactEmail = document.getElementById('vEmail').value.trim();
        const contactPhone = document.getElementById('vPhone').value.trim();
        const roleSelected = document.getElementById('vRole').value;

        // Structured validation checks inside raw form submit capture event parameters configurations
        if (nameValue.length < 3) {
            showFormFeedback("Error: Please enter a valid full name profile string inside the parameter configurations.", "#fee2e2", "#b91c1c");
            return;
        }
        if (contactPhone.length < 10) {
            showFormFeedback("Error: Provide a valid Indian 10-digit mobile number schema inside parameter input.", "#fee2e2", "#b91c1c");
            return;
        }
        if (!roleSelected) {
            showFormFeedback("Error: Ensure preferred role stream configuration selection is active.", "#fee2e2", "#b91c1c");
            return;
        }

        // Render direct operational update output successful handshake signature logic
        showFormFeedback(`Success! Thank you, ${nameValue}. Your application for Skill Stream [${roleSelected.toUpperCase()}] has been recorded successfully inside our evaluation database rows. Check your email inbox.`, "#ecfdf5", "#065f46");

        formInstance.reset();
    });

    const showFormFeedback = (text, bgColor, textColor) => {
        submissionResult.innerText = text;
        submissionResult.className = "success-box"; 
        submissionResult.style.color = textColor;
        submissionResult.style.backgroundColor = bgColor;
        submissionResult.classList.remove('hidden-msg');
    };
});