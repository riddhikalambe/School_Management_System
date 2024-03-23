export const stuData = [
  {
    name: 'Sophia',
    group: 'Group B',
    academics: [
      {
        year: '2019',
        subjects: {
          English: 80,
          Hindi: 65,
          Maths: 70,
          Science: 75,
        },
        grade: 'B',
        result: 'pass',
        percentage: 60,
        attendance: 85,
      },
      {
        year: '2020',
        subjects: {
          English: 82,
          Hindi: 68,
          Maths: 72,
          Science: 78,
        },
        grade: 'B+',
        result: 'pass',
        percentage: 65,
        attendance: 87,
      },
      {
        year: '2021',
        subjects: {
          English: 85,
          Hindi: 70,
          Maths: 75,
          Science: 80,
        },
        grade: 'A',
        result: 'pass',
        percentage: 70,
        attendance: 90,
      },
      {
        year: '2022',
        subjects: {
          English: 88,
          Hindi: 72,
          Maths: 78,
          Science: 82,
        },
        grade: 'A+',
        result: 'pass',
        percentage: 75,
        attendance: 92,
      },
      {
        year: '2023',
        subjects: {
          English: 90,
          Hindi: 75,
          Maths: 80,
          Science: 85,
        },
        grade: 'A+',
        result: 'pass',
        percentage: 80,
        attendance: 94,
      },
      {
        year: '2024',
        subjects: {
          English: 92,
          Hindi: 78,
          Maths: 85,
          Science: 88,
        },
        grade: 'A+',
        result: 'pass',
        percentage: 85,
        attendance: 96,
      },
    ],
  },
  {
    name: 'John',
    group: 'Group A',
    academics: [
      {
        year: '2019',
        subjects: {
          English: 85,
          Hindi: 70,
          Maths: 75,
          Science: 80,
        },
        grade: 'A',
        result: 'pass',
        percentage: 70,
        attendance: 90,
      },
      {
        year: '2020',
        subjects: {
          English: 88,
          Hindi: 72,
          Maths: 78,
          Science: 82,
        },
        grade: 'A+',
        result: 'pass',
        percentage: 75,
        attendance: 92,
      },
      {
        year: '2021',
        subjects: {
          English: 90,
          Hindi: 75,
          Maths: 80,
          Science: 85,
        },
        grade: 'A+',
        result: 'pass',
        percentage: 80,
        attendance: 94,
      },
      {
        year: '2022',
        subjects: {
          English: 92,
          Hindi: 78,
          Maths: 85,
          Science: 88,
        },
        grade: 'A+',
        result: 'pass',
        percentage: 85,
        attendance: 96,
      },
      {
        year: '2023',
        subjects: {
          English: 93,
          Hindi: 80,
          Maths: 88,
          Science: 90,
        },
        grade: 'A+',
        result: 'pass',
        percentage: 90,
        attendance: 98,
      },
      {
        year: '2024',
        subjects: {
          English: 95,
          Hindi: 82,
          Maths: 90,
          Science: 92,
        },
        grade: 'A+',
        result: 'pass',
        percentage: 95,
        attendance: 99,
      },
    ],
  },
];

export const years = ['2019', '2020', '2021', '2022', '2023', '2024'];
export const subjects = ['English', 'Hindi', 'Maths', 'Science'];
export const groups = ['Group A', 'Group B'];

export const comparisonData = {
  categories: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],  
  metrics: ["Math", "Science", "English"], 
  data: [
    
    [  
      { subject: "Math", score: 85 },
      { subject: "Science", score: 78 },
      { subject: "English", score: 82 }
    ],
    [  
      { subject: "Math", score: 88 },
      { subject: "Science", score: 80 },
      { subject: "English", score: 84 }
    ],
    [ 
      { subject: "Math", score: 90 },
      { subject: "Science", score: 82 },
      { subject: "English", score: 86 }
    ],
    [  
      { subject: "Math", score: 92 },
      { subject: "Science", score: 85 },
      { subject: "English", score: 88 }
    ]
  ]
};

export const dataSet = [
  {
    "attendanceData": {
      "labels": ["0-50%", "51-70%", "71-90%", "91-100%"],
      "data": [10, 20, 30, 40],
      "backgroundColors": ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"]
    },
    "gradesData": {
      "labels": ["A", "B", "C", "D"],
      "data": [15, 25, 35, 25],
      "backgroundColors": ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"]
    }
  }
  
];
export default comparisonData; 