var dataLayer = [];

var reports = [

    {
        event: 'onclick',
        name: 'login',
        data: ['currency', 'user', 'balance']
    },
    {
        event: 'onkeypress',
        name: 'logOute',
        data: ['currency', 'user', 'balance']
    },
    {
        event: 'onmousemove',
        name: 'addToCart',
        data: ['currency', 'user', 'balance']
    },
    {
        event: 'oninput',
        name: 'custom1',
        data: ['currency', 'user', 'balance']
    }
];


function pushReport(eventName, event) {
    dataLayer.push(reports.find(r => eventName === r.name));
}


document.addEventListener('DOMContentLoaded', () => {

    reports.forEach((report) => {
        const eventsTypes = [];

        try {
            eval(report.event);
            if (!eventsTypes.some(rType => rType === report.event)) {
                console.log(1);
                document.addEventListener(report.event, (e) => {
                    var eventName  = e.target.dataset.gaEvent;
                    var reportIsNeeded = reports.some(report => report.name === eventName);

                    reportIsNeeded && pushReport(eventName, e);
                });

                eventsTypes.push(report.event);
            }
         }
         catch (e) {
             console.log(e);
         }
    });
});