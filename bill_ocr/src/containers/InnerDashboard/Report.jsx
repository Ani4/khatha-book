import React from "react";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
const data = {
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
                300,
                500,
                1100,
                3100,
                550,
                2300,
                3500,
                520,
                1500,
                3400,
                500,
                1000,
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
            hoverBackgroundColor: [],
        },
    ],
};

function Report() {
    return (
        <div>
            <section class="page-content">
                <section class="grid">
                    {/* <Pie
                        data={data}
                        width={5}
                        height={200}
                        options={{
                            maintainAspectRatio: false,
                            legend: { display: false },
                            title: {
                                display: true,
                                text: "Hurray",
                                fontSize: 24,
                            },
                        }}
                    /> */}
                    <Line
                        data={data}
                        width={5}
                        height={200}
                        options={{
                            maintainAspectRatio: false,
                            legend: { display: false },
                            title: {
                                display: true,
                                text: "Sales accordingly months",
                                fontSize: 24,
                            },
                        }}
                    />
                </section>
            </section>
        </div>
    );
}

export default Report;
