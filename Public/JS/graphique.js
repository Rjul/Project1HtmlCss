
const labels = [
    // 'Janvier',
    // 'Fevrier',
    // 'Mars',
    // 'Avril',
    // 'Mai',
    // 'Juin',
    // 'Juillet',
    // 'Aout',
    // 'Septembre',
    'Octrobre',
    'Novembre',
    'Decembre'
];
const data = {
    labels: labels,
    datasets: [{
        label: 'Vente',
        backgroundColor: 'rgb(80, 187, 80)',
        borderColor: 'rgb(80, 187, 80)',
        data: [/*80, 66, 76, 99, 87, 120, 130, 180, 170,*/ 150, 180, 190],

    },
    {
        label: 'Visite',
        backgroundColor: 'rgb(219, 219, 219)',
        borderColor: 'rgb(219, 219, 219)',
        data: [/*150, 166, 106, 150, 145, 170, 190, 240, 270,*/ 210, 270, 300],
        fill: 1,
    }]
};
const config = {
    type: 'bar',
    data: data,
    options: {
        plugins: {
            title: {
                display: true,
                text: "Transformation visite",
                font: {
                    size: 25
                }
            },
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 25
                    }
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false, // peut changer le ratio
        scales: {

            x: {
                stacked: true,
                ticks: {
                    font: {
                        size: 25,
                    }
                }
            },
            y: {
                stacked: true,
                ticks: {
                    font: {
                        size: 25,
                    }
                }
            }
        }
    },
}
const mainGraf = document.getElementById('transformationVente').getContext('2d');
var grafMain = new Chart(mainGraf, config);

const dataChifreAffaire = {
    labels: labels,
    datasets: [{
        label: "Chiffre d'affaire",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(2, 187, 2)',
        data: [80 * 8000, 66 * 8000, 76 * 8000, 99 * 8000, 87 * 8000, 120 * 8000, 130 * 8000, 180 * 8000, 170 * 8000, 150 * 8000, 180 * 8000, 190 * 8000],
    },
    ]
};
const configChiffreAffaire = {
    type: 'line',
    data: dataChifreAffaire,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Chiffre d'affaire",
                font: {
                    size: 25
                }
            },
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 25
                    }
                }
            }
        },
        interaction: {
            intersect: false,
        },
        maintainAspectRatio: false, // peut changer le ratio
        scales: {
            x: {
                display: true,
                title: {
                    display: true
                },
                ticks: {
                    font: {
                        size: 25,
                    }
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Euro'
                },
                ticks: {
                    font: {
                        size: 25,
                    }
                },
                suggestedMin: 200000,
                suggestedMax: 1200000
            }
        }
    },
};

const chiffreAffaireGraf = document.getElementById('chiffreAffaire').getContext('2d');
var grafChiffreAffaire = new Chart(chiffreAffaireGraf, configChiffreAffaire);