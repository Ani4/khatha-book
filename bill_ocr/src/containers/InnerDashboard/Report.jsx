import React from "react";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
const Monthdata = {
    labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    datasets: [
        {
            label: "Month",
            data: [
                30050,
                504560,
                11400,
                365100,
                125450,
                253400,
                135020,
                555200,
                30050,
                504560,
                11400,
            ],
            backgroundColor: [
                "#DB2BC0",
                "#1F76FC",
                "#129253",
                "#BA5A24",
                "#657565",
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#23D7C8",
                "#2E2773",
                "#5875AF",
                "#EB7693",
                "#280E16",
            ],
            hoverBackgroundColor: [
                "#DB2BC0",
                "#1F76FC",
                "#129253",
                "#BA5A24",
                "#657565",
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#23D7C8",
                "#2E2773",
                "#5875AF",
                "#EB7693",
                "#280E16",
            ],
        },
    ],
};

const CustomerData = {
    labels: ["Aniket", "Jagdish", "Anuj", "Amit"],
    datasets: [
        {
            label: "Sale",
            data: [300, 500, 1100, 3100],
            backgroundColor: ["#2E2773", "#5875AF", "#EB7693", "#280E16"],
            hoverBackgroundColor: ["#2E2773", "#5875AF", "#EB7693", "#280E16"],
        },
    ],
};
function Report() {
    return (
        <div>
            <section class="page-content">
                <section class="grid">
                    <Line
                        data={Monthdata}
                        width={5}
                        height={200}
                        options={{
                            maintainAspectRatio: false,
                            legend: { display: false },
                            title: {
                                display: true,
                                text: "Sales vs Months",
                                fontSize: 18,
                                position: "bottom",
                            },
                        }}
                    />
                </section>
                <hr />
                <section class="grid">
                    <Pie
                        data={CustomerData}
                        options={{
                            legend: { display: false },
                            title: {
                                display: true,
                                text: "Sales vs Customer",
                                fontSize: 18,
                                position: "bottom",
                            },
                        }}
                    />
                </section>
            </section>
        </div>
    );
}

export default Report;
