import React from 'react';

interface Syllabus {
  post: string;
  department: string;
  paper: string;
  standard: string;
  syllabus: string;
}

const civilServicesPreliminaryData: Syllabus[] = [
  {
    post: 'All posts included in Group-I Services',
    department: 'Departments concerned',
    paper: 'General Studies',
    standard: 'Degree',
    syllabus: '',
  },
  {
    post: 'Assistant Conservator of Forests',
    department: 'Forest',
    paper: 'General Studies',
    standard: 'Degree',
    syllabus: '',
  },
  {
    post: 'Assistant Commissioner',
    department: 'Hindu Religious and Charitable Endowments',
    paper: 'General Studies',
    standard: 'Degree',
    syllabus: '',
  },
  {
    post: 'District Educational Officer',
    department: 'School Education',
    paper: 'General Studies',
    standard: 'Degree',
    syllabus: '',
  },
  {
    post: 'Forest Apprentice',
    department: 'Forest',
    paper: 'General Studies',
    standard: 'Degree',
    syllabus: '',
  },
  {
    post: 'All posts included in Group-II and IIA Services',
    department: 'Departments concerned',
    paper: 'Language(General Tamil), Language(General English), Aptitude and Mental Ability, General Studies',
    standard: 'SSLC, SSLC, SSLC, Degree',
    syllabus: '',
  },
  {
    post: 'All posts included in Group-IV Services',
    department: 'Departments concerned',
    paper: 'Tamil Eligibility-cum-Scoring Test, General English (For Differently Abled Candidates only), Aptitude and Mental Ability, General Studies',
    standard: 'SSLC',
    syllabus: '',
  },
  {
    post: 'Assistant Section Officer/Assistant',
    department: 'Departments of Tamil Nadu Secretariat',
    paper: 'General Tamil, General English',
    standard: 'Degree',
    syllabus: '',
  },
];

const civilServicesMainData: Syllabus[] = [
  {
    post: 'All posts included in Group-I Services',
    department: 'Departments concerned',
    paper: 'Paper I - Tamil Eligibility Test, Paper II - General Studies I, Paper III - General Studies II, Paper IV - General Studies III',
    standard: 'SSLC, Degree, Degree, Degree',
    syllabus: 'Descriptive Type',
  },
  {
    post: 'Assistant Conservator of Forests',
    department: 'Forest',
    paper: 'Paper I - Tamil Eligibility Test, Paper II - General Studies I, Paper III - General Studies II, Paper IV - General Studies III',
    standard: 'SSLC, Degree, Degree, Degree',
    syllabus: 'Descriptive Type',
  },
  {
    post: 'Assistant Commissioner',
    department: 'Hindu Religious and Charitable Endowments',
    paper: 'Paper I - Tamil Eligibility Test, Paper II - General Studies, Paper III - Hindu Religion, Paper IV - Law',
    standard: 'SSLC, Degree, Degree, Degree',
    syllabus: 'Descriptive Type',
  },
  {
    post: 'District Educational Officer',
    department: 'School Education',
    paper: 'Paper I - Tamil Eligibility Test, Paper II - General Studies, Paper III - General Studies, Paper IV - Education',
    standard: 'SSLC, Degree, Degree, Degree',
    syllabus: 'Descriptive Type',
  },
  {
    post: 'Forest Apprentice',
    department: 'Forest',
    paper: 'Paper I - Tamil Eligibility Test, Paper II - General Studies I, Paper III - General Studies II, Paper IV - General Studies III',
    standard: 'SSLC, Degree, Degree, Degree',
    syllabus: 'Descriptive Type',
  },
  {
    post: 'All posts included in Group-II Services',
    department: 'Departments concerned',
    paper: 'Tamil Eligibility Test, General Studies',
    standard: 'SSLC, Degree',
    syllabus: 'Descriptive Type',
  },
  {
    post: 'All posts included in Group-IIA Services',
    department: 'Departments concerned',
    paper: 'Tamil Eligibility Test, General Studies, General Intelligence and Reasoning',
    standard: 'SSLC, Degree, SSLC',
    syllabus: '',
  },
];

const assistantPublicProsecutorData: Syllabus[] = [
  {
    post: 'Assistant Public Prosecutor, Grade-II',
    department: 'Prosecution',
    paper: 'General Studies, Law',
    standard: 'Degree',
    syllabus: 'Preliminary Examination',
  },
  {
    post: 'Assistant Public Prosecutor, Grade-II',
    department: 'Prosecution',
    paper: 'Tamil Eligibility Test, Law - I, Law - II, Law - III, Law - IV',
    standard: 'SSLC, Degree',
    syllabus: 'Main Examination (Descriptive Type)',
  },
];

const technicalServicesInterviewData: Syllabus[] = [
  {
    post: 'All posts included in Combined Technical Services Examination (Interview Posts)',
    department: 'Departments concerned',
    paper: 'Tamil Eligibility Test',
    standard: 'SSLC',
    syllabus: '',
  },
  {
    post: 'All posts included in Combined Technical Services Examination (Interview Posts)',
    department: 'Departments concerned',
    paper: 'General Studies',
    standard: 'Degree',
    syllabus: '',
  },
  {
    post: 'Accounts Officer, Class-III',
    department: 'Treasuries and Accounts',
    paper: 'Financial and Cost Accountancy',
    standard: 'Final',
    syllabus: 'Financial and Cost Accountancy',
  },
  {
    post: 'Accounts Officer',
    department: 'Tamil Nadu Industrial Development Corporation Limited',
    paper: 'Financial and Cost Accountancy',
    standard: 'PG Degree',
    syllabus: 'Financial and Cost Accountancy',
  },
  {
    post: 'Accounts Officer',
    department: 'Tamil Nadu Minorities Economic Development Corporation Limited',
    paper: 'Financial and Cost Accountancy',
    standard: 'Final',
    syllabus: 'Financial and Cost Accountancy',
  },
  {
    post: 'Accounts Officer',
    department: 'Tamil Nadu Medical Services Corporation Limited',
    paper: 'Financial and Cost Accountancy',
    standard: 'PG Degree',
    syllabus: 'Financial and Cost Accountancy',
  },
  {
    post: 'Assistant General Manager(Finance)',
    department: 'State Industries Promotion Corporation of Tamil Nadu Limited',
    paper: 'Financial and Cost Accountancy',
    standard: 'Final',
    syllabus: 'Financial and Cost Accountancy',
  },
  {
    post: 'Assistant General Manager(Projects) Investment',
    department: 'Tamil Nadu Industrial Development Corporation Limited',
    paper: 'Business Administration, Financial and Cost Accountancy',
    standard: 'PG Degree',
    syllabus: 'Business Administration, Financial and Cost Accountancy',
  },
  {
    post: 'Assistant Manager(Projects)',
    department: 'State Industries Promotion Corporation of Tamil Nadu Limited',
    paper: 'Electrical, Electronics and Mechanical Engineering',
    standard: 'Degree',
    syllabus: 'Electrical, Electronics and Mechanical Engineering',
  },
  {
    post: 'Assistant Manager (Accounts)',
    department: 'Tamil Nadu State Transport Corporation',
    paper: 'Financial and Cost Accountancy',
    standard: 'PG Degree',
    syllabus: 'Financial and Cost Accountancy',
  },
  {
    post: 'Assistant Manager (Materials)',
    department: 'Tamil Nadu Cements Corporation Limited',
    paper: 'Mechanical, Production and Manufacturing Engineering',
    standard: 'Degree',
    syllabus: 'Mechanical, Production and Manufacturing Engineering',
  },
  {
    post: 'Assistant Manager(Technical-Mechanical)',
    department: 'Tamil Nadu Cements Corporation Limited',
    paper: 'Mechanical, Production and Manufacturing Engineering',
    standard: 'Degree',
    syllabus: 'Mechanical, Production and Manufacturing Engineering',
  },
  {
    post: 'Assistant Manager(civil)',
    department: 'Tamil Nadu Cements Corporation Limited',
    paper: 'Civil Engineering',
    standard: 'Degree',
    syllabus: 'Civil Engineering',
  },
  {
    post: 'Assistant Manager (Marketing)',
    department: 'Tamil Nadu Cements Corporation Limited',
    paper: 'Business Administration',
    standard: 'PG Degree',
    syllabus: 'Business Administration',
  },
  {
    post: 'Assistant Director',
    department: 'Tamil Development',
    paper: 'Tamil Language and Literature',
    standard: 'PG Degree',
    syllabus: 'Tamil Language and Literature',
  },
  {
    post: 'Assistant Manager (Finance)',
    department: 'State Industries Promotion Corporation of Tamil Nadu Limited',
    paper: 'Financial and Cost Accountancy',
    standard: 'Final',
    syllabus: 'Financial and Cost Accountancy',
  },
  {
    post: 'Assistant Superintendent (Chemical Wing)',
    department: 'Micro, Small and Medium Enterprises',
    paper: 'Chemical Engineering',
    standard: 'Degree',
    syllabus: 'Chemical Engineering',
  },
  {
    post: 'Deputy Manager (Accounts)',
    department: 'Tamil Nadu Corporation for Development of Women Limited',
    paper: 'Financial and Cost Accountancy',
    standard: 'Final',
    syllabus: 'Financial and Cost Accountancy',
  },
  {
    post: 'Assistant Director',
    department: 'Social Welfare and Women Empowerment',
    paper: 'Social Welfare and Women Empowerment',
    standard: 'PG Degree',
    syllabus: 'Social Welfare and Women Empowerment',
  },
  {
    post: 'Assistant Director of Statistics',
    department: 'Statistics',
    paper: 'Statistics, Mathematics and Economics',
    standard: 'Degree',
    syllabus: 'Statistics, Mathematics and Economics',
  },
  {
    post: 'Assistant Director of Agriculture (Extension)',
    department: 'Agriculture',
    paper: 'Agriculture',
    standard: 'PG Degree',
    syllabus: 'Agriculture',
  },
  {
    post: 'Assistant Director of Town and Country Planning',
    department: 'Housing and Urban Development',
    paper: 'Town Planning, Civil Engineering and Architecture',
    standard: 'Degree',
    syllabus: 'Town Planning, Civil Engineering and Architecture',
  },
  {
    post: 'Assistant Director of Industries and Commerce (Technical)',
    department: 'Industries and Commerce',
    paper: 'Basics of Engineering',
    standard: 'Degree',
    syllabus: 'Basics of Engineering',
  },
  {
    post: 'Assistant Director of Cooperative Audit',
    department: 'Cooperative Audit',
    paper: 'Cooperative Audit',
    standard: 'PG Degree',
    syllabus: 'Cooperative Audit',
  },
  {
    post: 'Assistant Director of Fisheries',
    department: 'Fisheries and Fishermen Welfare',
    paper: 'Fisheries Science, Marine Biology and Zoology',
    standard: 'PG Degree',
    syllabus: 'Fisheries Science, Marine Biology and Zoology',
  },
  {
    post: 'Assistant director of Training/Principal,Industrial Training Institute',
    department: 'Employment and Training',
    paper: 'Basics of Engineering',
    standard: 'Degree',
    syllabus: 'Basics of Engineering',
  },
  {
    post: 'Assistant Electrical Inspector',
    department: 'Electrical Inspectorate',
    paper: 'Electrical and Electronics Engineering',
    standard: 'Degree',
    syllabus: 'Electrical and Electronics Engineering',
  },
  {
    post: 'Assistant General Manager',
    department: 'State Industries Promotion Corporation of Tamil Nadu Limited',
    paper: 'Basics of Engineering',
    standard: 'Degree',
    syllabus: 'Basics of Engineering',
  },
  {
    post: 'Assistant General Manager (Projects) Infrastructure',
    department: 'Tamil Nadu Industrial Development Corporation Limited (TIDCO)',
    paper: 'Engineering and Business Administration',
    standard: 'UG & PG Degree',
    syllabus: 'Engineering and Business Administration',
  },
  {
    post: 'Assistant General Manager (Projects) Project Management',
    department: 'Tamil Nadu Industrial Development Corporation Limited (TIDCO)',
    paper: 'Engineering and Business Administration',
    standard: 'UG & PG Degree',
    syllabus: 'Engineering and Business Administration',
  },
  {
    post: 'Assistant Professor of Psychology-cum-Clinical Psychologist',
    department: 'Medical Education',
    paper: 'Psychology',
    standard: 'PG Degree',
    syllabus: 'Psychology',
  },
  {
    post: 'Assistant Professor of Radiology Physics',
    department: 'Medical Education',
    paper: 'Medical Physics',
    standard: 'PG Degree',
    syllabus: 'Medical Physics',
  },
  {
    post: 'Assistant Secretary',
    department: 'Tamil Nadu Industrial Development Corporation Limited',
    paper: 'Associate Company Secretaryship',
    standard: 'Final',
    syllabus: 'Associate Company Secretaryship',
  },
  {
    post: 'Chief Sthapathi',
    department: 'Tamil Nadu Hindu Religious and Charitable Endowments',
    paper: 'Traditional Architecture and Traditional Sculpture',
    standard: 'UG Degree',
    syllabus: 'Traditional Architecture and Traditional Sculpture',
  },
  {
    post: 'Librarian',
    department: 'Legal Studies',
    paper: 'Library and Information Science',
    standard: 'PG Degree',
    syllabus: 'Library and Information Science',
  },
  {
    post: 'Manager Grade III (Legal)',
    department: 'Tamil Nadu Industrial Investment Corporation Limited',
    paper: 'Law',
    standard: 'Degree',
    syllabus: 'Law',
  },
  {
    post: 'Senior Officer(Finance)',
    department: 'Tamil Nadu Industrial Investment Corporation Limited',
    paper: 'Financial and Cost Accountancy',
    standard: 'Final',
    syllabus: 'Financial and Cost Accountancy',
  },
  {
    post: 'Senior Officer (Legal)',
    department: 'Tamil Nadu Industrial Investment Corporation Limited',
    paper: 'Law',
    standard: 'Degree',
    syllabus: 'Law',
  },
  {
    post: 'Assistant Manager (Legal)',
    department: 'Tamil Nadu State Transport Corporation',
    paper: 'Law',
    standard: 'Degree',
    syllabus: 'Law',
  },
  {
    post: 'Assistant Manager (Legal)',
    department: 'State Industries Promotion Corporation of Tamil Nadu Limited',
    paper: 'Law',
    standard: 'Degree',
    syllabus: 'Law',
  },
  {
    post: 'Assistant Director of Horticulture',
    department: 'Horticulture',
    paper: 'Horticulture',
    standard: 'PG Degree',
    syllabus: 'Horticulture',
  },
  {
    post: 'Assistant Manager (Projects)',
    department: 'Tamil Nadu Urban Finance and Infrastructure Development Corporation Ltd.',
    paper: 'Business Administration',
    standard: 'PG Degree',
    syllabus: 'Business Administration',
  },
  {
    post: 'Automobile Engineer',
    department: 'Motor Vehicle Maintenance',
    paper: 'Automobile Engineering',
    standard: 'Degree',
    syllabus: 'Automobile Engineering',
  },
  {
    post: 'Automobile Engineer',
    department: 'Motor Vehicle Maintenance',
    paper: 'Mechanical, Production and Manufacturing Engineering',
    standard: 'Degree',
    syllabus: 'Mechanical, Production and Manufacturing Engineering',
  },
  {
    post: 'Bursar',
    department: 'Collegiate Education',
    paper: 'Public Administration and Business Administration',
    standard: 'PG Degree',
    syllabus: 'Public Administration and Business Administration',
  },
  {
    post: 'College Librarian',
    department: 'Higher Education',
    paper: 'Library and Information Science',
    standard: 'PG Degree',
    syllabus: 'Library and Information Science',
  },
  {
    post: 'College Librarian',
    department: 'Law',
    paper: 'Library and Information Science',
    standard: 'PG Degree',
    syllabus: 'Library and Information Science',
  },
  {
    post: 'College Director of Physical Education and Sports in Government Law Colleges',
    department: 'Law',
    paper: 'Physical Education',
    standard: 'PG Degree',
    syllabus: 'Physical Education',
  },
  {
    post: 'District Child Protection Officer',
    department: 'Children Welfare and Special Services',
    paper: 'Sociology, Social Work, Psychology, Child Development and Criminology',
    standard: 'Degree',
    syllabus: 'Sociology, Social Work, Psychology, Child Development and Criminology',
  },
  {
    post: 'Deputy Manager(Electrical)',
    department: 'Tamil Nadu Cements Corporation Limited',
    paper: 'Electrical and Electronics Engineering',
    standard: 'Degree',
    syllabus: 'Electrical and Electronics Engineering',
  },
  {
    post: 'Deputy Manager (Instrumental)',
    department: 'Tamil Nadu Cements Corporation Limited',
    paper: 'Electronics and Instrumentation Engineering',
    standard: 'Degree',
    syllabus: 'Electronics and Instrumentation Engineering',
  },
  {
    post: 'Deputy Manager (Materials)',
    department: 'Tamil Nadu Cements Corporation Limited',
    paper: 'Mechanical, Production and Manufacturing Engineering',
    standard: 'Degree',
    syllabus: 'Mechanical, Production and Manufacturing Engineering',
  },
  {
    post: 'Deputy Manager (Mechanical)',
    department: 'Tamil Nadu Cements Corporation Limited',
    paper: 'Mechanical, Production and Manufacturing Engineering',
    standard: 'Degree',
    syllabus: 'Mechanical, Production and Manufacturing Engineering',
  },
  {
    post: 'Deputy Manager(Safety)',
    department: 'Tamil Nadu Cements Corporation Limited',
    paper: 'Chemical, Electrical, Electronics and Mechanical Engineering',
    standard: 'Degree',
    syllabus: 'Chemical, Electrical, Electronics and Mechanical Engineering',
  },
  {
    post: 'District Library Officer',
    department: 'Public Libraries',
    paper: 'Library and Information Science',
    standard: 'PG Degree',
    syllabus: 'Library and Information Science',
  },
  {
    post: 'English Reporter',
    department: 'Legislative Assembly',
    paper: 'Stenography in English',
    standard: 'Diploma',
    syllabus: 'Stenography in English',
  },
  {
    post: 'Factory Manager (RKD)',
    department: 'Tamil Nadu Magnesite Limited',
    paper: 'Chemical and Mechanical Engineering',
    standard: 'Degree',
    syllabus: 'Chemical and Mechanical Engineering',
  },
  {
    post: 'Factory Manager (SKD)',
    department: 'Tamil Nadu Magnesite Limited',
    paper: 'Chemical and Mechanical Engineering',
    standard: 'Degree',
    syllabus: 'Chemical and Mechanical Engineering',
  },
  {
    post: 'Health Officer',
    department: 'Public Health and Preventive Medicine',
    paper: 'Community Medicine',
    standard: 'Degree',
    syllabus: 'Community Medicine',
  },
  {
    post: 'Manager (Veterinary)',
    department: 'Tamil Nadu Co-operative Milk Producers\' Federation Limited',
    paper: 'Animal Husbandry and Veterinary Science',
    standard: 'Degree',
    syllabus: 'Animal Husbandry and Veterinary Science',
  },
  {
    post: 'Manager (Chemical)',
    department: 'Tamil Nadu Cements Corporation Limited',
    paper: 'Chemistry and Chemical Engineering',
    standard: 'Degree',
    syllabus: 'Chemistry and Chemical Engineering',
  },
  {
    post: 'Manager (Mechanical)',
    department: 'Tamil Nadu Cements Corporation Limited',
    paper: 'Mechanical, Production and Manufacturing Engineering',
    standard: 'Degree',
    syllabus: 'Mechanical, Production and Manufacturing Engineering',
  },
  {
    post: 'Manager(Electrical)',
    department: 'Tamil Nadu Cements Corporation Limited',
    paper: 'Electrical and Electronics Engineering',
    standard: 'Degree',
    syllabus: 'Electrical and Electronics Engineering',
  },
  {
    post: 'Manager (Marketing)',
    department: 'Tamil Nadu Cements Corporation Limited',
    paper: 'Business Administration',
    standard: 'PG Degree',
    syllabus: 'Business Administration',
  },
  {
    post: 'Manager Grade III (Finance)',
    department: 'Tamil Nadu Industrial Investment Corporation Ltd',
    paper: 'Financial and Cost Accountancy',
    standard: 'Final',
    syllabus: 'Financial and Cost Accountancy',
  },
  {
    post: 'Regional Sthapathi',
    department: 'Tamil Nadu Hindu Religious and Charitable Endowments',
    paper: 'Traditional Architecture and Traditional Sculpture',
    standard: 'UG Degree',
    syllabus: 'Traditional Architecture and Traditional Sculpture',
  },
  {
    post: 'Research Assistant',
    department: 'Animal Husbandry and Veterinary Services',
    paper: 'Animal Husbandry and Veterinary Science',
    standard: 'PG Degree',
    syllabus: 'Animal Husbandry and Veterinary Science',
  },
  {
    post: 'Senior Chemist',
    department: 'Industries and Commerce',
    paper: 'Chemistry',
    standard: 'PG Degree',
    syllabus: 'Chemistry',
  },
  {
    post: 'Senior Officer (Technical)',
    department: 'Tamil Nadu Industrial Investment Corporation Ltd',
    paper: 'Basics of Engineering',
    standard: 'Degree',
    syllabus: 'Basics of Engineering',
  },
  {
    post: 'Senior Assistant Director of Boilers',
    department: 'Public Works',
    paper: 'Mechanical, Production and Manufacturing Engineering',
    standard: 'Degree',
    syllabus: 'Mechanical, Production and Manufacturing Engineering',
  },
  {
    post: 'Scientist \'C\' Grade',
    department: 'Forest',
    paper: 'Bio-Technology',
    standard: 'PG Degree',
    syllabus: 'Bio-Technology',
  },
  {
    post: 'Tamil Reporter',
    department: 'Legislative Assembly',
    paper: 'Stenography in Tamil',
    standard: 'Diploma',
    syllabus: 'Stenography in Tamil',
  },
  {
    post: 'Tourist Officer',
    department: 'Tourism',
    paper: 'Travel and Tourism',
    standard: 'PG Degree',
    syllabus: 'Travel and Tourism',
  },
  {
    post: 'Unit Head - Deputy General Manager Cadre',
    department: 'Tamil Nadu Cements Corporation Limited',
    paper: 'Chemical, Electrical, Electronics and Mechanical Engineering',
    standard: 'Degree',
    syllabus: 'Chemical, Electrical, Electronics and Mechanical Engineering',
  },
  {
    post: 'Veterinary Assistant Surgeon',
    department: 'Animal Husbandry and Veterinary Services',
    paper: 'Animal Husbandry and Veterinary Science',
    standard: 'Degree',
    syllabus: 'Animal Husbandry and Veterinary Science',
  },
  {
    post: 'Assistant Director (Statistical Analyst)',
    department: 'Tamilnadu Electricity Regulatory Commission',
    paper: 'Statistics',
    standard: 'PG Degree',
    syllabus: 'Statistics',
  },
  {
    post: 'Deputy Planner',
    department: 'Chennai Metropolitan Development Authority',
    paper: 'Town Planning',
    standard: 'PG Degree',
    syllabus: 'Town Planning',
  },
  {
    post: 'Assistant Planner',
    department: 'Chennai Metropolitan Development Authority',
    paper: 'Town Planning',
    standard: 'PG Degree',
    syllabus: 'Town Planning',
  },
  {
    post: 'System Analyst',
    department: 'Tamil Nadu Police Housing Corporation',
    paper: 'Computer Science,Computer Applications and Information Technology',
    standard: 'Degree',
    syllabus: 'Computer Science,Computer Applications and Information Technology',
  },
  {
    post: 'Assistant Director of Industries and Commerce (Survey and Statistics)',
    department: 'Industries and Commerce',
    paper: 'Statistics, Mathematics and Economics',
    standard: 'PG Degree',
    syllabus: 'Statistics, Mathematics and Economics',
  },
  {
    post: 'Assistant Manager',
    department: 'State Industries Promotion Corporation of Tamil Nadu Limited',
    paper: 'Statistics and Economics',
    standard: 'PG Degree',
    syllabus: 'Statistics and Economics',
  },
  {
    post: 'Assistant Director (Technical)',
    department: 'Archaeology',
    paper: 'Archaeology, Epigraphy, History, Manuscriptology and Tamil',
    standard: 'PG Degree',
    syllabus: 'Archaeology, Epigraphy, History, Manuscriptology and Tamil',
  },
  {
    post: 'Assistant Manager',
    department: 'State Industries Promotion Corporation of Tamil Nadu Limited',
    paper: 'Computer Science,Information Technology,Electrical, Electronics and Communication and Mechanical Engineering',
    standard: 'Degree',
    syllabus: 'Computer Science,Information Technology,Electrical, Electronics and Communication and Mechanical Engineering',
  },
  {
    post: 'Assistant Manager (P&A)',
    department: 'Tamil Nadu Cements Corporation Limited',
    paper: 'Personnel Management, Industrial Relations, Business Administration and Social Work',
    standard: 'PG Degree',
    syllabus: 'Personnel Management, Industrial Relations, Business Administration and Social Work',
  },
  {
    post: 'Senior Entomologist',
    department: 'Public Health and Preventive Medicine',
    paper: 'Zoology and Medical Entomology',
    standard: 'PG Degree',
    syllabus: 'Zoology and Medical Entomology',
  },
  {
    post: 'Translation Officer',
    department: 'Law',
    paper: 'Translation from English to Tamil',
    standard: 'Degree',
    syllabus: 'Translation from English to Tamil',
  },
  {
    post: 'Deputy Manager (Environment)',
    department: 'Tamil Nadu Cements Corporation Limited',
    paper: 'Environmental Science',
    standard: 'Degree',
    syllabus: 'Environmental Science',
  },
  {
    post: 'Deputy Manager - II (Direct Legal - 1)',
    department: 'Electronics Corporation of Tamil Nadu Limited',
    paper: 'Law',
    standard: 'Degree',
    syllabus: 'Law',
  },
  {
    post: 'Deputy Director to legal',
    department: 'Tamil Nadu Electricity Regulatory Commission',
    paper: 'Law',
    standard: 'Degree',
    syllabus: 'Law',
  },
];

const technicalServicesNonInterviewDegreeData: Syllabus[] = [
  {
    post: 'All posts included in Combined Technical Services Examination - Degree / Post Graduate Degree Level - Non Interview Posts',
    department: 'Departments concerned',
    paper: 'Tamil Eligibility Test',
    standard: 'SSLC',
    syllabus: '',
  },
  {
    post: 'All posts included in Combined Technical Services Examination - Degree / Post Graduate Degree Level - Non Interview Posts',
    department: 'Departments concerned',
    paper: 'General Studies',
    standard: 'Degree',
    syllabus: '',
  },
  {
    post: 'Agricultural Officer (Extension)',
    department: 'Agriculture',
    paper: 'Agriculture',
    standard: 'Degree',
    syllabus: 'Agriculture',
  },
  {
    post: 'Archaeological Officer',
    department: 'Archaeology',
    paper: 'Archaeology',
    standard: 'PG Degree',
    syllabus: 'Archaeology',
  },
  {
    post: 'Architectural Assistant/ Planning Assistant',
    department: 'Town and Country Planning',
    paper: 'Town Planning, Civil Engineering and Architecture',
    standard: 'Degree',
    syllabus: 'Town Planning, Civil Engineering and Architecture',
  },
  {
    post: 'Assistant Curator',
    department: 'Museum',
    paper: 'Archaeology',
    standard: 'Degree',
    syllabus: 'Archaeology',
  },
  {
    post: 'Assistant Curator',
    department: 'Museum',
    paper: 'Anthropology',
    standard: 'Degree',
    syllabus: 'Anthropology',
  },
  {
    post: 'Assistant Curator',
    department: 'Museum',
    paper: 'Botany',
    standard: 'Degree',
    syllabus: 'Botany',
  },
  {
    post: 'Assistant Curator',
    department: 'Museum',
    paper: 'Geology',
    standard: 'Degree',
    syllabus: 'Geology',
  },
  {
    post: 'Assistant Curator',
    department: 'Museum',
    paper: 'History',
    standard: 'Degree',
    syllabus: 'History',
  },
  {
    post: 'Assistant Curator',
    department: 'Museum',
    paper: 'Sanskrit',
    standard: 'Degree',
    syllabus: 'Sanskrit',
  },
  {
    post: 'Assistant Curator',
    department: 'Museum',
    paper: 'Zoology',
    standard: 'Degree',
    syllabus: 'Zoology',
  },
  {
    post: 'Assistant Director of Industrial Safety and Health',
    department: 'Industrial Safety and Health',
    paper: 'Industrial Safety and Health',
    standard: 'Degree',
    syllabus: 'Industrial Safety and Health',
  },
  {
    post: 'Assistant Engineer',
    department: 'Rural Development and Panchayat Raj',
    paper: 'Civil Engineering',
    standard: 'Degree',
    syllabus: 'Civil Engineering',
  },
  {
    post: 'Assistant Engineer',
    department: 'Tamil Nadu Maritime Board',
    paper: 'Civil Engineering',
    standard: 'Degree',
    syllabus: 'Civil Engineering',
  },
  {
    post: 'Assistant Engineer',
    department: 'Agricultural Engineering',
    paper: 'Agricultural, Mechanical, Automobile and Civil Engineering',
    standard: 'Degree',
    syllabus: 'Agricultural, Mechanical, Automobile and Civil Engineering',
  },
  {
    post: 'Assistant Engineer',
    department: 'Fisheries and Fishermen Welfare',
    paper: 'Civil Engineering',
    standard: 'Degree',
    syllabus: 'Civil Engineering',
  },
  {
    post: 'Assistant Engineer (Civil)',
    department: 'Chennai Metropolitan Development Authority',
    paper: 'Civil Engineering',
    standard: 'Degree',
    syllabus: 'Civil Engineering',
  },
  {
    post: 'Assistant Engineer',
    department: 'Tamil Nadu Pollution Control Board',
    paper: 'Environmental and Chemical Engineering',
    standard: 'PG Degree',
    syllabus: 'Environmental and Chemical Engineering',
  },
  {
    post: 'Assistant Warehouse Manager/Junior Assistant',
    department: 'Tamil Nadu Warehousing Corporation',
    paper: 'Agriculture, Chemistry, Zoology and Botany',
    standard: 'Degree',
    syllabus: 'Agriculture, Chemistry, Zoology and Botany',
  },
  {
    post: 'Assistant Engineer (Civil)',
    department: 'Tamil Nadu Urban Habitat Development Board',
    paper: 'Civil Engineering',
    standard: 'Degree',
    syllabus: 'Civil Engineering',
  },
  {
    post: 'Assistant Engineer (Civil)',
    department: 'Tamil Nadu Police Housing Corporation Limited',
    paper: 'Civil Engineering',
    standard: 'Degree',
    syllabus: 'Civil Engineering',
  },
  {
    post: 'Assistant Engineer (Civil)',
    department: 'Tamil Nadu Small Industries Development Corporation Limited',
    paper: 'Civil Engineering',
    standard: 'Degree',
    syllabus: 'Civil Engineering',
  },
  {
    post: 'Assistant Engineer (Civil)',
    department: 'State Industries Promotion Corporation of Tamil Nadu Limited',
    paper: 'Civil Engineering',
    standard: 'Degree',
    syllabus: 'Civil Engineering',
  },
  {
    post: 'Assistant Engineer (Civil)',
    department: 'Tamil Nadu Power Distribution Corporation Limited',
    paper: 'Civil Engineering',
    standard: 'Degree',
    syllabus: 'Civil Engineering',
  },
  {
    post: 'Assistant Engineer (Civil)',
    department: 'Tamil Nadu Water Supply and Drainage Board',
    paper: 'Civil Engineering',
    standard: 'Degree',
    syllabus: 'Civil Engineering',
  },
  {
    post: 'Assistant Engineer (Civil)',
    department: 'Tamil Nadu Adi Dravidar Housing and Development Corporation',
    paper: 'Civil Engineering',
    standard: 'Degree',
    syllabus: 'Civil Engineering',
  },
  {
    post: 'Assistant Engineer (Civil)',
    department: 'Water Resources',
    paper: 'Civil Engineering',
    standard: 'Degree',
    syllabus: 'Civil Engineering',
  },
  {
    post: 'Assistant Engineer (Civil)',
    department: 'Public Works',
    paper: 'Civil Engineering',
    standard: 'Degree',
    syllabus: 'Civil Engineering',
  },
  {
    post: 'Assistant Engineer',
    department: 'Highways',
    paper: 'Civil Engineering',
    standard: 'Degree',
    syllabus: 'Civil Engineering',
  },
  {
    post: 'Assistant Engineer (Civil)',
    department: 'Tamil Nadu Hindu Religious and Charitable Endowments',
    paper: 'Civil Engineering, Traditional Architecture and Traditional Sculpture',
    standard: 'UG Degree',
    syllabus: 'Civil Engineering, Traditional Architecture and Traditional Sculpture',
  },
  {
    post: 'Assistant Engineer (Electrical)',
    department: 'Tamil Nadu Power Distribution Corporation Limited',
    paper: 'Electrical and Electronics Engineering',
    standard: 'Degree',
    syllabus: 'Electrical and Electronics Engineering',
  },
  {
    post: 'Assistant Engineer (Electrical)',
    department: 'Public Works',
    paper: 'Electrical, Electronics and Communication Engineering',
    standard: 'Degree',
    syllabus: 'Electrical, Electronics and Communication Engineering',
  },
  {
    post: 'Assistant Engineer (Industries)',
    department: 'Industries and Commerce',
    paper: 'Basics of Engineering',
    standard: 'Degree',
    syllabus: 'Basics of Engineering',
  },
  {
    post: 'Assistant Engineer (Mechanical)',
    department: 'Tamil Nadu Power Distribution Corporation Limited',
    paper: 'Mechanical, Production and Manufacturing Engineering',
    standard: 'Degree',
    syllabus: 'Mechanical, Production and Manufacturing Engineering',
  },
  {
    post: 'Assistant Engineer (Mechanical)',
    department: 'Tamil Nadu Water Supply and Drainage Board',
    paper: 'Mechanical, Production and Manufacturing Engineering',
    standard: 'Degree',
    syllabus: 'Mechanical, Production and Manufacturing Engineering',
  },
  {
    post: 'Assistant Geochemist',
    department: 'Public Works',
    paper: 'Geology',
    standard: 'PG Degree',
    syllabus: 'Geology',
  },
  {
    post: 'Assistant Geologist',
    department: 'Agricultural Engineering',
    paper: 'Geology',
    standard: 'Degree',
    syllabus: 'Geology',
  },
  {
    post: 'Assistant Geologist',
    department: 'Geology and Mining',
    paper: 'Geology',
    standard: 'PG Degree',
    syllabus: 'Geology',
  },
  {
    post: 'Assistant Geologist',
    department: 'Water Resources',
    paper: 'Geology',
    standard: 'PG Degree',
    syllabus: 'Geology',
  },
  {
    post: 'Assistant Geologist',
    department: 'Public Works',
    paper: 'Geology',
    standard: 'PG Degree',
    syllabus: 'Geology',
  },
  {
    post: 'Assistant Librarian',
    department: 'Archives and Historical Research',
    paper: 'Library and Information Science',
    standard: 'Degree',
    syllabus: 'Library and Information Science',
  },
  {
    post: 'Assistant Librarian',
    department: 'Archaeology (Government Oriental Manuscripts Library and Research Centre)',
    paper: 'Library and Information Science',
    standard: 'Degree',
    syllabus: 'Library and Information Science',
  },
  {
    post: 'Assistant Librarian and Information Officer',
    department: 'Public Libraries',
    paper: 'Library and Information Science',
    standard: 'PG Degree',
    syllabus: 'Library and Information Science',
  },
  {
    post: 'Assistant Manager',
    department: 'Tamil Nadu Small Industries Development Corporation Limited',
    paper: 'Business Administration',
    standard: 'PG Degree',
    syllabus: 'Business Administration',
  },
  {
    post: 'Assistant Manager(Mines)',
    department: 'Tamil Nadu Minerals Limited',
    paper: 'Mining Engineering',
    standard: 'Degree',
    syllabus: 'Mining Engineering',
  },
  {
    post: 'Assistant Section Officer (Translation)',
    department: 'Tamil Development and Information',
    paper: 'Translation and Precis Writing (Language -Tamil)',
    standard: 'Degree',
    syllabus: 'Translation and Precis Writing (Language -Tamil)',
  },
  {
    post: 'Assistant Section Officer (Translation)',
    department: 'Tamil Development and Information',
    paper: 'Translation and Precis Writing (Language - Hindi)',
    standard: 'Degree',
    syllabus: 'Translation and Precis Writing (Language - Hindi)',
  },
  {
    post: 'Assistant Statistical Investigator',
    department: 'Economics and Statistics',
    paper: 'Statistics, Mathematics and Economics',
    standard: 'Degree',
    syllabus: 'Statistics, Mathematics and Economics',
  },
  {
    post: 'Assistant Sthapathi',
    department: 'Tamil Nadu Hindu Religious and Charitable Endowments',
    paper: 'Traditional Architecture and Traditional Sculpture',
    standard: 'UG Degree',
    syllabus: 'Traditional Architecture and Traditional Sculpture',
  },
  {
    post: 'Assistant Superintendent of Approved Schools',
    department: 'Children Welfare and Special Service',
    paper: 'Criminology, Forensic Science, Psychology and Philosophy',
    standard: 'Degree',
    syllabus: 'Criminology, Forensic Science, Psychology and Philosophy',
  },
  {
    post: 'Assistant Superintendent of Vigilance Institutions',
    department: 'Children Welfare and Special Service',
    paper: 'Criminology, Forensic Science, Psychology and Philosophy',
    standard: 'Degree',
    syllabus: 'Criminology, Forensic Science, Psychology and Philosophy',
  },
  {
    post: 'Assistant Tourist Officer, Grade II',
    department: 'Tourism',
    paper: 'Travel and Tourism',
    standard: 'Degree',
    syllabus: 'Travel and Tourism',
  },
  {
    post: 'Block Health Statistician',
    department: 'Family Welfare',
    paper: 'Statistics, Mathematics and Economics',
    standard: 'Degree',
    syllabus: 'Statistics, Mathematics and Economics',
  },
  {
    post: 'Chemist',
    department: 'Industries and Commerce',
    paper: 'Chemistry',
    standard: 'PG Degree',
    syllabus: 'Chemistry',
  },
  {
    post: 'Chemist',
    department: 'Industrial Safety and Health',
    paper: 'Chemistry',
    standard: 'Degree',
    syllabus: 'Chemistry',
  },
  {
    post: 'Chemist',
    department: 'Geology and Mining',
    paper: 'Chemistry',
    standard: 'PG Degree',
    syllabus: 'Chemistry',
  },
  {
    post: 'Child Development Project Officer',
    department: 'Social Welfare and Women Empowerment',
    paper: 'Home Science, Nutrition and Dietetics',
    standard: 'Degree',
    syllabus: 'Home Science, Nutrition and Dietetics',
  },
  {
    post: 'Community Officer',
    department: 'Tamil Nadu Urban Habitat Development Board',
    paper: 'Social Work',
    standard: 'PG Degree',
    syllabus: 'Social Work',
  },
  {
    post: 'Computor',
    department: 'Public Health and Preventive Medicine',
    paper: 'Statistics',
    standard: 'Degree',
    syllabus: 'Statistics',
  },
  {
    post: 'Computor-cum-Vaccine Store Keeper',
    department: 'Public Health and Preventive Medicine',
    paper: 'Statistics and Mathematics',
    standard: 'Degree',
    syllabus: 'Statistics and Mathematics',
  },
  {
    post: 'Cost Assistant',
    department: 'Industries and Commerce',
    paper: 'Cost and Work Accounts',
    standard: 'Intermediate',
    syllabus: 'Cost and Work Accounts',
  },
  {
    post: 'Curator',
    department: 'Museum',
    paper: 'Archaeology',
    standard: 'PG Degree',
    syllabus: 'Archaeology',
  },
  {
    post: 'Curator',
    department: 'Museum',
    paper: 'Anthropology',
    standard: 'PG Degree',
    syllabus: 'Anthropology',
  },
  {
    post: 'Curator',
    department: 'Museum',
    paper: 'Botany',
    standard: 'PG Degree',
    syllabus: 'Botany',
  },
  {
    post: 'Curator',
    department: 'Museum',
    paper: 'Chemistry',
    standard: 'PG Degree',
    syllabus: 'Chemistry',
  },
  {
    post: 'Curator',
    department: 'Museum',
    paper: 'Geology',
    standard: 'PG Degree',
    syllabus: 'Geology',
  },
  {
    post: 'Curator',
    department: 'Museum',
    paper: 'History',
    standard: 'PG Degree',
    syllabus: 'History',
  },
  {
    post: 'Curator',
    department: 'Museum',
    paper: 'Sanskrit',
    standard: 'PG Degree',
    syllabus: 'Sanskrit',
  },
  {
    post: 'Curator',
    department: 'Museum',
    paper: 'Zoology',
    standard: 'PG Degree',
    syllabus: 'Zoology',
  },
  {
    post: 'Curator (Chemical Conservation)',
    department: 'Museum',
    paper: 'Chemistry and Chemical Technology',
    standard: 'PG Degree',
    syllabus: 'Chemistry and Chemical Technology',
  },
  {
    post: 'CCR Operator',
    department: 'Tamil Nadu Cements Corporation Limited',
    paper: 'Chemical Engineering',
    standard: 'Degree',
    syllabus: 'Chemical Engineering',
  },
  {
    post: 'Deputy Manager(System)',
    department: 'Tamil Nadu Co-operative Milk Producers\' Federation Limited',
    paper: 'Computer Science, Computer Applications and Information Technology',
    standard: 'Degree',
    syllabus: 'Computer Science, Computer Applications and Information Technology',
  },
  {
    post: 'Deputy Manager (Dairying)',
    department: 'Tamil Nadu Co-operative Milk Producers\' Federation Limited',
    paper: 'Dairy Science, Dairy Technology, Food Technology, Food Processing',
    standard: 'Degree',
    syllabus: 'Dairy Science, Dairy Technology, Food Technology, Food Processing',
  },
  {
    post: 'Deputy Manager (Quality Assurance)',
    department: 'Tamil Nadu Co-operative Milk Producers\' Federation Limited',
    paper: 'Dairy Chemistry, Dairy Science, Chemistry, Bio Chemistry, Microbiology and Bio-Technology',
    standard: 'PG Degree',
    syllabus: 'Dairy Chemistry, Dairy Science, Chemistry, Bio Chemistry, Microbiology and Bio-Technology',
  },
  {
    post: 'Drug Inspector',
    department: 'Drug Control Administration',
    paper: 'Pharmacy, Clinical Pharmacology and Microbiology',
    standard: 'Degree',
    syllabus: 'Pharmacy, Clinical Pharmacology and Microbiology',
  },
  {
    post: 'Executive Officer, Grade I',
    department: 'Hindu Religious and Charitable Endowments',
    paper: 'Hindu Religion and Law',
    standard: 'Degree',
    syllabus: 'Hindu Religion and Law',
  },
  {
    post: 'Executive Surveyor',
    department: 'Tamil Nadu Cements Corporation Limited',
    paper: 'Civil Engineering',
    standard: 'Degree',
    syllabus: 'Civil Engineering',
  },
  {
    post: 'Executive Geologist',
    department: 'Tamil Nadu Cements Corporation Limited',
    paper: 'Geology',
    standard: 'Degree',
    syllabus: 'Geology',
  },
  {
    post: 'Film Librarian',
    department: 'Agriculture',
    paper: 'Library and Information Science',
    standard: 'Degree',
    syllabus: 'Library and Information Science',
  },
  {
    post: 'Foreman (Marine)',
    department: 'Fisheries and Fishermen Welfare',
    paper: 'Mechanical, Production and Manufacturing Engineering',
    standard: 'Degree',
    syllabus: 'Mechanical, Production and Manufacturing Engineering',
  },
  {
    post: 'Geologist',
    department: 'Highways',
    paper: 'Geology',
    standard: 'PG Degree',
    syllabus: 'Geology',
  },
  {
    post: 'Horticultural Officer',
    department: 'Horticulture',
    paper: 'Horticulture',
    standard: 'Degree',
    syllabus: 'Horticulture',
  },
  {
    post: 'Inspector of Fisheries',
    department: 'Fisheries and Fishermen Welfare',
    paper: 'Fisheries Science and Zoology',
    standard: 'Degree',
    syllabus: 'Fisheries Science and Zoology',
  },
  {
    post: 'Inspector of Salt',
    department: 'Industries and Commerce',
    paper: 'Chemistry',
    standard: 'Degree',
    syllabus: 'Chemistry',
  },
  {
    post: 'Junior Analyst',
    department: 'Drug Control Administration',
    paper: 'Pharmacy and Chemistry',
    standard: 'Degree',
    syllabus: 'Pharmacy and Chemistry',
  },
  {
    post: 'Junior Architect',
    department: 'Public Works',
    paper: 'Architecture',
    standard: 'Degree',
    syllabus: 'Architecture',
  },
  {
    post: 'Junior Chemist',
    department: 'Industries and Commerce',
    paper: 'Chemistry',
    standard: 'PG Degree',
    syllabus: 'Chemistry',
  },
  {
    post: 'Junior Electrical Inspector',
    department: 'Electrical Inspectorate',
    paper: 'Electrical and Electronics Engineering',
    standard: 'Degree',
    syllabus: 'Electrical and Electronics Engineering',
  },
  {
    post: 'Junior Manager (Finance and Accounts)',
    department: 'Tamil Nadu Urban Finance and Infrastructure Development Corporation Limited',
    paper: 'Financial and Cost Accountancy',
    standard: 'Intermediate',
    syllabus: 'Financial and Cost Accountancy',
  },
  {
    post: 'Junior Rehabailitation Officer',
    department: 'Welfare of Differently Abled',
    paper: 'Social Work, Sociology and Psychology',
    standard: 'PG Degree',
    syllabus: 'Social Work, Sociology and Psychology',
  },
  {
    post: 'Junior Photographer',
    department: 'Tamil Development and Information',
    paper: 'Visual Communication',
    standard: 'UG Degree',
    syllabus: 'Visual Communication',
  },
  {
    post: 'Junior Scientific Officer',
    department: 'Forensic Science',
    paper: 'Physics, Chemistry, Biology, Computer Science and Forensic Science',
    standard: 'PG Degree',
    syllabus: 'Physics, Chemistry, Biology, Computer Science and Forensic Science',
  },
  {
    post: 'Laboratory Assistant',
    department: 'Fisheries and Fishermen Welfare',
    paper: 'Chemistry, Botany and Zoology',
    standard: 'Degree',
    syllabus: 'Chemistry, Botany and Zoology',
  },
  {
    post: 'Librarian',
    department: 'Animal Husbandry and Veterinary Services',
    paper: 'Library and Information Science',
    standard: 'Degree',
    syllabus: 'Library and Information Science',
  },
  {
    post: 'Librarian',
    department: 'Agriculture',
    paper: 'Library and Information Science',
    standard: 'Degree',
    syllabus: 'Library and Information Science',
  },
  {
    post: 'Librarian',
    department: 'State Council of Education and Training',
    paper: 'Library and Information Science',
    standard: 'Degree',
    syllabus: 'Library and Information Science',
  },
  {
    post: 'Library Assistant',
    department: 'Public Libraries',
    paper: 'Library and Information Science',
    standard: 'Degree',
    syllabus: 'Library and Information Science',
  },
  {
    post: 'Library Assistant Grade I',
    department: 'Archives and Historical Research',
    paper: 'Library and Information Science',
    standard: 'Degree',
    syllabus: 'Library and Information Science',
  },
  {
    post: 'Librarian Grade I',
    department: 'Labour',
    paper: 'Library and Information Science',
    standard: 'Degree',
    syllabus: 'Library and Information Science',
  },
  {
    post: 'Librarian Grade I',
    department: 'Economics and Statistics',
    paper: 'Library and Information Science',
    standard: 'Degree',
    syllabus: 'Library and Information Science',
  },
  {
    post: 'Librarian Grade I',
    department: 'Town and Country Planning',
    paper: 'Library and Information Science',
    standard: 'Degree',
    syllabus: 'Library and Information Science',
  },
  {
    post: 'Librarian Grade I',
    department: 'Industries and Commerce',
    paper: 'Library and Information Science',
    standard: 'Degree',
    syllabus: 'Library and Information Science',
  },
  {
    post: 'Librarian and Information Assistant Grade II',
    department: 'Public Libraries',
    paper: 'Library and Information Science',
    standard: 'Degree',
    syllabus: 'Library and Information Science',
  },
  {
    post: 'Manager (Civil)',
    department: 'Tamil Nadu Co-operative Milk Producers\' Federation Limited',
    paper: 'Civil Engineering',
    standard: 'Degree',
    syllabus: 'Civil Engineering',
  },
  {
    post: 'Manager - Engineering',
    department: 'Tamil Nadu Co-operative Milk Producers\' Federation Limited.',
    paper: 'Basics of Engineering',
    standard: 'Degree',
    syllabus: 'Basics of Engineering',
  },
  {
    post: 'Manager (Finance)',
    department: 'Tamil Nadu Co-operative Milk Producers\' Federation Limited',
    paper: 'Financial and Cost Accountancy',
    standard: 'Intermediate',
    syllabus: 'Financial and Cost Accountancy',
  },
  {
    post: 'Mass Interviewer',
    department: 'Public Health and Preventive Medicine',
    paper: 'Anthropology, Sociology, Economics, Home Science and Social Work',
    standard: 'Degree',
    syllabus: 'Anthropology, Sociology, Economics, Home Science and Social Work',
  },
  {
    post: 'Research Assistant',
    department: 'Evaluation and Applied Research',
    paper: 'Evaluation and Applied Research',
    standard: 'PG Degree',
    syllabus: 'Evaluation and Applied Research',
  },
  {
    post: 'Research Assistant (Economics)',
    department: 'Town and Country Planning',
    paper: 'Economics',
    standard: 'PG Degree',
    syllabus: 'Economics',
  },
  {
    post: 'Research Assistant (Geography)',
    department: 'Town and Country Planning',
    paper: 'Geography',
    standard: 'PG Degree',
    syllabus: 'Geography',
  },
  {
    post: 'Research Assistant (Sociology)',
    department: 'Town and Country Planning',
    paper: 'Sociology and Social Work',
    standard: 'PG Degree',
    syllabus: 'Sociology and Social Work',
  },
  {
    post: 'Research Assistant (Statistics)',
    department: 'Town and Country Planning',
    paper: 'Statistics and Mathematics',
    standard: 'PG Degree',
    syllabus: 'Statistics and Mathematics',
  },
  {
    post: 'Secretarial Officer (Legal)',
    department: 'Tamil Nadu Industrial Development Corporation Limited',
    paper: 'Law',
    standard: 'Degree',
    syllabus: 'Law',
  },
  {
    post: 'Secretarial Officer',
    department: 'Tamil Nadu Industrial Development Corporation Limited',
    paper: 'Associate Company Secretaryship',
    standard: 'Inter',
    syllabus: 'Associate Company Secretaryship',
  },
  {
    post: 'Manager - Secretarial',
    department: 'Tamil Nadu Industrial Development Corporation Limited',
    paper: 'Associate Company Secretaryship',
    standard: 'Final',
    syllabus: 'Associate Company Secretaryship',
  },
  {
    post: 'Social Case Work Expert',
    department: 'Prisons and Correctional Services',
    paper: 'Social Case Work Expert',
    standard: 'Degree',
    syllabus: 'Social Case Work Expert',
  },
  {
    post: 'Statistician',
    department: 'Medical Education',
    paper: 'Statistics',
    standard: 'Degree',
    syllabus: 'Statistics',
  },
  {
    post: 'Statistician',
    department: 'Indian Medicine and Homeopathy',
    paper: 'Statistics',
    standard: 'Degree',
    syllabus: 'Statistics',
  },
  {
    post: 'Statistical Assistant',
    department: 'Food Safety and Drug Administration',
    paper: 'Statistics and Mathematics',
    standard: 'PG Degree',
    syllabus: 'Statistics and Mathematics',
  },
  {
    post: 'Statistical Compiler',
    department: 'Public Health and Preventive Medicine',
    paper: 'Statistics',
    standard: 'Degree',
    syllabus: 'Statistics',
  },
  {
    post: 'Statistical Inspector',
    department: 'Animal Husbandry and Veterinary Services',
    paper: 'Statistics and Mathematics',
    standard: 'Degree',
    syllabus: 'Statistics and Mathematics',
  },
  {
    post: 'Store Keeper',
    department: 'Forensic Science',
    paper: 'Physics and Chemistry',
    standard: 'Degree',
    syllabus: 'Physics and Chemistry',
  },
  {
    post: 'Sub Inspector of Fisheries',
    department: 'Fisheries and Fishermen Welfare',
    paper: 'Fisheries Technology, Fisheries Science and Navigation Engineering',
    standard: 'Diploma',
    syllabus: 'Fisheries Technology, Fisheries Science and Navigation Engineering',
  },
  {
    post: 'Technical Assistant',
    department: 'Motor Vehicle Maintenance',
    paper: 'Automobile and Mechanical Engineering',
    standard: 'Degree',
    syllabus: 'Automobile and Mechanical Engineering',
  },
  {
    post: 'Technical Executive (Mechanical)',
    department: 'Tamil Nadu Cements Corporation Limited',
    paper: 'Mechanical, Production Manufacturing Engineering',
    standard: 'Degree',
    syllabus: 'Mechanical, Production Manufacturing Engineering',
  },
  {
    post: 'Translator',
    department: 'Law',
    paper: 'Translation from English to Tamil',
    standard: 'Degree',
    syllabus: 'Translation from English to Tamil',
  },
  {
    post: 'Vocational Counsellor',
    department: 'Medical Education',
    paper: 'Social Work (Medical and Psychiatric)',
    standard: 'PG Degree',
    syllabus: 'Social Work (Medical and Psychiatric)',
  },
  {
    post: 'X-Ray Analyst',
    department: 'Tamil Nadu Cements Corporation Limited',
    paper: 'Chemistry',
    standard: 'Degree',
    syllabus: 'Chemistry',
  },
  {
    post: 'Librarian',
    department: 'Chennai Metropolitan Development Authority',
    paper: 'Library and Information Science',
    standard: 'Degree',
    syllabus: 'Library and Information Science',
  },
  {
    post: 'Librarian (Grade II)',
    department: 'Tamil Nadu Pollution Control Board',
    paper: 'Library and Information Science',
    standard: 'Degree',
    syllabus: 'Library and Information Science',
  },
  {
    post: 'Psychologist',
    department: 'Welfare of Differently Abled',
    paper: 'Psychology',
    standard: 'PG Degree',
    syllabus: 'Psychology',
  },
  {
    post: 'Assistant Engineer (Civil)',
    department: 'Tamil Nadu Housing Board',
    paper: 'Civil Engineering',
    standard: 'Degree',
    syllabus: 'Civil Engineering',
  },
  {
    post: 'Junior Manager',
    department: 'Tamil Nadu Power Finance and Infrastructure Development Corporation Limited',
    paper: 'Financial and Cost Accountancy',
    standard: 'Intermediate',
    syllabus: 'Financial and Cost Accountancy',
  },
  {
    post: 'Junior Chemist',
    department: 'Tamil Nadu Magnesite Limited',
    paper: 'Chemistry',
    standard: 'Degree',
    syllabus: 'Chemistry',
  },
  {
    post: 'Assistant Engineer (Electrical)',
    department: 'Tamil Nadu Magnesite Limited',
    paper: 'Electrical and Electronics Engineering',
    standard: 'Degree',
    syllabus: 'Electrical and Electronics Engineering',
  },
  {
    post: 'Assistant Engineer (Mechanical)',
    department: 'Tamil Nadu Magnesite Limited',
    paper: 'Mechanical Production and Manufacturing Engineering',
    standard: 'Degree',
    syllabus: 'Mechanical Production and Manufacturing Engineering',
  },
  {
    post: 'Mining Engineer',
    department: 'Tamil Nadu Magnesite Limited',
    paper: 'Mining Engineering',
    standard: 'Degree',
    syllabus: 'Mining Engineering',
  },
  {
    post: 'Sociologist',
    department: 'Police',
    paper: 'Sociology',
    standard: 'PG Degree',
    syllabus: 'Sociology',
  },
  {
    post: 'Assistant System Analyst',
    department: 'Chennai Metropolitan Development Authority',
    paper: 'Computer Science, Information Technology, Electrical, Electronics and Communication Engineering',
    standard: 'Degree',
    syllabus: 'Computer Science, Information Technology, Electrical, Electronics and Communication Engineering',
  },
  {
    post: 'Assistant System Engineer',
    department: 'Chennai Metropolitan Development Authority',
    paper: 'Computer Science, Information Technology, Electrical, Electronics and Communication Engineering',
    standard: 'Degree',
    syllabus: 'Computer Science, Information Technology, Electrical, Electronics and Communication Engineering',
  },
  {
    post: 'Computer Programmer',
    department: 'Tamil Nadu Urban Finance and Infrastructure Development Corporation Limited',
    paper: 'Computer Science, Computer Applications and Information Technology',
    standard: 'PG Degree',
    syllabus: 'Computer Science, Computer Applications and Information Technology',
  },
  {
    post: 'Environmental Scientist',
    department: 'Tamil Nadu Pollution Control Board',
    paper: 'Environmental Science, Biology and Chemistry',
    standard: 'PG Degree',
    syllabus: 'Environmental Science, Biology and Chemistry',
  },
  {
    post: 'Junior Planner',
    department: 'Chennai Metropolitan Development Authority',
    paper: 'Town Planning, Civil Engineering and Architecture',
    standard: 'Degree',
    syllabus: 'Town Planning, Civil Engineering and Architecture',
  },
  {
    post: 'Executive (P&A)',
    department: 'Tamil Nadu Cements Corporation Limited',
    paper: 'Personnel Management, Industrial Relations, Business Administration and Social Work',
    standard: 'PG Degree',
    syllabus: 'Personnel Management, Industrial Relations, Business Administration and Social Work',
  },
  {
    post: 'Project Officer',
    department: 'Tamil Nadu Minerals Limited',
    paper: 'Mining Engineering and Geology',
    standard: 'Degree',
    syllabus: 'Mining Engineering and Geology',
  },
];

const technicalServicesNonInterviewDiplomaData: Syllabus[] = [
  {
    post: 'All posts included in Combined Technical Services Examination -Diploma / Post Diploma / ITI Level',
    department: 'Departments concerned',
    paper: 'Tamil Eligibility Test',
    standard: 'SSLC',
    syllabus: '',
  },
  {
    post: 'All posts included in Combined Technical Services Examination -Diploma / Post Diploma / ITI Level',
    department: 'Departments concerned',
    paper: 'General Studies',
    standard: 'SSLC',
    syllabus: '',
  },
  {
    post: 'Assistant Agricultural Officer',
    department: 'Agriculture',
    paper: 'Agriculture',
    standard: 'Diploma',
    syllabus: 'Agriculture',
  },
  {
    post: 'Assistant Archaeology Officer (Junior Epigraphist)',
    department: 'Archaeology',
    paper: 'Archaeology, Epigraphy ,Heritage Management and Museology',
    standard: 'PG Diploma',
    syllabus: 'Archaeology, Epigraphy ,Heritage Management and Museology',
  },
  {
    post: 'Assistant Horticultural Officer',
    department: 'Horticulture',
    paper: 'Horticulture',
    standard: 'Diploma',
    syllabus: 'Horticulture',
  },
  {
    post: 'Assistant Training Officer (Stenography)',
    department: 'Employment and Training',
    paper: 'Stenography in English',
    standard: 'Diploma',
    syllabus: 'Stenography in English',
  },
  {
    post: 'Assistant Tester',
    department: 'Industries and Commerce',
    paper: 'Electrical and Electronics Engineering',
    standard: 'Diploma',
    syllabus: 'Electrical and Electronics Engineering',
  },
  {
    post: 'Assistant Works Manager in the Government Press',
    department: 'Stationery and Printing',
    paper: 'Printing Technology',
    standard: 'Diploma',
    syllabus: 'Printing Technology',
  },
  {
    post: 'Draughtsman, Grade III',
    department: 'Town and Country Planning',
    paper: 'Town and Country Planning',
    standard: 'Post Diploma and Diploma',
    syllabus: 'Town and Country Planning',
  },
  {
    post: 'Draughtsman',
    department: 'Survey and Land Records',
    paper: 'Draughtsman (Civil)',
    standard: 'I.T.I',
    syllabus: 'Draughtsman (Civil)',
  },
  {
    post: 'Executive (Lab)',
    department: 'Tamil Nadu Co-operative Milk Producers\' Federation Limited',
    paper: 'Lab Technician',
    standard: 'Diploma',
    syllabus: 'Lab Technician',
  },
  {
    post: 'Foreman Grade II',
    department: 'Tamil Nadu Industrial Investment Corporation Ltd.,',
    paper: 'Mechanical Engineering',
    standard: 'Diploma',
    syllabus: 'Mechanical Engineering',
  },
  {
    post: 'Field Surveyor',
    department: 'Survey and Land Records',
    paper: 'Surveyor',
    standard: 'I.T.I',
    syllabus: 'Surveyor',
  },
  {
    post: 'Hostel Superintendent cum Physical Training Officer',
    department: 'Employment and Training',
    paper: 'Physical Education',
    standard: 'Diploma',
    syllabus: 'Physical Education',
  },
  {
    post: 'Junior Draughting Officer',
    department: 'Water Resources',
    paper: 'Civil Engineering and Architecture',
    standard: 'Diploma',
    syllabus: 'Civil Engineering and Architecture',
  },
  {
    post: 'Junior Draughting Officer',
    department: 'Highways',
    paper: 'Civil Engineering',
    standard: 'Diploma',
    syllabus: 'Civil Engineering',
  },
  {
    post: 'Junior Draughting Officer',
    department: 'Public Works',
    paper: 'Civil Engineering and Architecture',
    standard: 'Diploma',
    syllabus: 'Civil Engineering and Architecture',
  },
  {
    post: 'Junior Draughting Officer / Overseer',
    department: 'Rural Development and Panchayat Raj',
    paper: 'Civil Engineering',
    standard: 'Diploma',
    syllabus: 'Civil Engineering',
  },
  {
    post: 'Junior Draughting Officer',
    department: 'Hindu Religious and Charitable Endowments',
    paper: 'Civil Engineering',
    standard: 'Diploma',
    syllabus: 'Civil Engineering',
  },
  {
    post: 'Junior Engineer',
    department: 'Fisheries and Fishermen Welfare',
    paper: 'Civil Engineering',
    standard: 'Diploma',
    syllabus: 'Civil Engineering',
  },
  {
    post: 'Junior Technical Assistant',
    department: 'Handlooms',
    paper: 'Handloom Technology, Textile Technology and Textile Manufacture',
    standard: 'Diploma',
    syllabus: 'Handloom Technology, Textile Technology and Textile Manufacture',
  },
  {
    post: 'Junior Tradesman (Sheet Metal)',
    department: 'Tamil Nadu State Transport Corporation',
    paper: 'Trade:Sheet Metal',
    standard: 'ITI',
    syllabus: 'Trade:Sheet Metal',
  },
  {
    post: 'Junior Tradesman (Diesel Mechanic)',
    department: 'Tamil Nadu State Transport Corporation',
    paper: 'Trade:Diesel Mechanic',
    standard: 'ITI',
    syllabus: 'Trade:Diesel Mechanic',
  },
  {
    post: 'Junior Tradesman (Mechanic Refrigeration and Air-Conditioner)',
    department: 'Tamil Nadu State Transport Corporation',
    paper: 'Trade:Mechanic Refrigeration and Air-Conditioner',
    standard: 'ITI',
    syllabus: 'Trade:Mechanic Refrigeration and Air-Conditioner',
  },
  {
    post: 'Junior Tradesman (Fitter)',
    department: 'Tamil Nadu State Transport Corporation',
    paper: 'Trade:Fitter',
    standard: 'ITI',
    syllabus: 'Trade:Fitter',
  },
  {
    post: 'Junior Tradesman (Mechanic Motor Vehicle)',
    department: 'Tamil Nadu State Transport Corporation',
    paper: 'Trade:Mechanic Motor Vehicle',
    standard: 'ITI',
    syllabus: 'Trade:Mechanic Motor Vehicle',
  },
  {
    post: 'Junior Tradesman (Electrician)',
    department: 'Tamil Nadu State Transport Corporation',
    paper: 'Trade:Electrician',
    standard: 'ITI',
    syllabus: 'Trade:Electrician',
  },
  {
    post: 'Junior Tradesman (Welder)',
    department: 'Tamil Nadu State Transport Corporation',
    paper: 'Trade:Welder (Gas & Electric)',
    standard: 'ITI',
    syllabus: 'Trade:Welder (Gas & Electric)',
  },
  {
    post: 'Motor Vehicle Inspector, Grade - II',
    department: 'Transport and Road Safety',
    paper: 'Automobile and Mechanical Engineering',
    standard: 'Diploma',
    syllabus: 'Automobile and Mechanical Engineering',
  },
  {
    post: 'Planning Assistant,Grade-B',
    department: 'Tamil Nadu Urban Habitat Development Board',
    paper: 'Civil Engineering and Architecture',
    standard: 'Diploma',
    syllabus: 'Civil Engineering and Architecture',
  },
  {
    post: 'Special Overseer',
    department: 'Adi Dravidar Welfare',
    paper: 'Civil Engineering',
    standard: 'Diploma',
    syllabus: 'Civil Engineering',
  },
  {
    post: 'Road Inspector',
    department: 'Rural Development and Panchayat Raj',
    paper: 'Draughtsman (Civil)',
    standard: 'I.T.I',
    syllabus: 'Draughtsman (Civil)',
  },
  {
    post: 'Senior Technical Assistant',
    department: 'Handlooms and Textiles',
    paper: 'Handloom Technology, Textile Technology and Textile Manufacture',
    standard: 'Diploma',
    syllabus: 'Handloom Technology, Textile Technology and Textile Manufacture',
  },
  {
    post: 'Surveyor-cum-Assistant Draughtsman',
    department: 'Town and Country Planning',
    paper: 'Surveyor and Draughtsman (Civil)',
    standard: 'I.T.I',
    syllabus: 'Surveyor and Draughtsman (Civil)',
  },
  {
    post: 'Supervisor (Weaving)',
    department: 'Tamil Nadu Textile Corporation',
    paper: 'Handloom Technology, Textile Technology and Textile Manufacture',
    standard: 'Diploma',
    syllabus: 'Handloom Technology, Textile Technology and Textile Manufacture',
  },
  {
    post: 'Surveyor',
    department: 'Tamil Nadu Housing Board',
    paper: 'Surveyor',
    standard: 'I.T.I',
    syllabus: 'Surveyor',
  },
  {
    post: 'Technical Assistant',
    department: 'Tamil Nadu Small Industries Development Corporation',
    paper: 'Civil Engineering',
    standard: 'Diploma',
    syllabus: 'Civil Engineering',
  },
  {
    post: 'Technical Assistant',
    department: 'Tamil Nadu Police Housing Corporation',
    paper: 'Civil Engineering',
    standard: 'Diploma',
    syllabus: 'Civil Engineering',
  },
  {
    post: 'Technical Assistant',
    department: 'Tamil Nadu Textbook and Educational Services Corporation',
    paper: 'Printing Technology',
    standard: 'Diploma',
    syllabus: 'Printing Technology',
  },
  {
    post: 'Technical Assistant (Electrical)',
    department: 'Tamil Nadu Power Distribution Corporation Limited',
    paper: 'Electrical and Electronics Engineering',
    standard: 'Diploma',
    syllabus: 'Electrical and Electronics Engineering',
  },
  {
    post: 'Technical Assistant (Air Conditioning)',
    department: 'Forensic Science',
    paper: 'Mechanical Engineering',
    standard: 'Diploma',
    syllabus: 'Mechanical Engineering',
  },
  {
    post: 'Technical Assistant (Gas Plant)',
    department: 'Forensic Science',
    paper: 'Mechanical Engineering',
    standard: 'Diploma',
    syllabus: 'Mechanical Engineering',
  },
  {
    post: 'Technician (Auto Mechanic)',
    department: 'Tamil Nadu Co-operative Milk Producers\' Federation Limited',
    paper: 'Trade: Fitter and Mechanic Motor Vehicle',
    standard: 'I.T.I',
    syllabus: 'Trade: Fitter and Mechanic Motor Vehicle',
  },
  {
    post: 'Technician (Boiler)',
    department: 'Tamil Nadu Co-operative Milk Producers\' Federation Limited',
    paper: 'Boiler Attendant Certificate, Grade-II',
    standard: 'Certificate Course',
    syllabus: 'Boiler Attendant Certificate, Grade-II',
  },
  {
    post: 'Technician (Electrical)',
    department: 'Tamil Nadu Co-operative Milk Producers\' Federation Limited',
    paper: 'Trade: Electrician',
    standard: 'I.T.I',
    syllabus: 'Trade: Electrician',
  },
  {
    post: 'Technician (Lab)',
    department: 'Tamil Nadu Co-operative Milk Producers\' Federation Limited',
    paper: 'Lab Technician',
    standard: 'Diploma',
    syllabus: 'Lab Technician',
  },
  {
    post: 'Technician (Operation)',
    department: 'Tamil Nadu Co-operative Milk Producers\' Federation Limited',
    paper: 'Technician (Operation)',
    standard: 'I.T.I',
    syllabus: 'Technician (Operation)',
  },
  {
    post: 'Technician (Refrigeration)',
    department: 'Tamil Nadu Co-operative Milk Producers\' Federation Limited',
    paper: 'Trade: Mechanic Refrigeration and Air-Conditioner',
    standard: 'I.T.I',
    syllabus: 'Trade: Mechanic Refrigeration and Air-Conditioner',
  },
  {
    post: 'Technician (Tyre)',
    department: 'Tamil Nadu Co-operative Milk Producers\' Federation Limited',
    paper: 'Trade: Fitter',
    standard: 'I.T.I',
    syllabus: 'Trade: Fitter',
  },
  {
    post: 'Technician (Welding)',
    department: 'Tamil Nadu Co-operative Milk Producers\' Federation Limited',
    paper: 'Trade: Welder (Gas and Electric)',
    standard: 'I.T.I',
    syllabus: 'Trade: Welder (Gas and Electric)',
  },
  {
    post: 'Tester',
    department: 'Industries and Commerce',
    paper: 'Electrical and Electronics Engineering',
    standard: 'Diploma',
    syllabus: 'Electrical and Electronics Engineering',
  },
  {
    post: 'Assistant Manger (Mines)',
    department: 'Tamil Nadu Magnesite Limited',
    paper: 'Mining Engineering',
    standard: 'Diploma',
    syllabus: 'Mining Engineering',
  },
  {
    post: 'Junior Technical Assistant',
    department: 'Textiles',
    paper: 'Handloom Technology, Textile Technology and Textile Manufacture',
    standard: 'Diploma',
    syllabus: 'Handloom Technology, Textile Technology and Textile Manufacture',
  },
  {
    post: 'Junior Engineer',
    department: 'Archaeology',
    paper: 'Civil Engineering',
    standard: 'Diploma',
    syllabus: 'Civil Engineering',
  },
  {
    post: 'Junior Draughting Officer',
    department: 'Tamil Nadu Forest Plantation Corporation Limited',
    paper: 'Civil Engineering',
    standard: 'Diploma',
    syllabus: 'Civil Engineering',
  },
  {
    post: 'Technincal Assistant (Civil)',
    department: 'Tamil Nadu Housing Board',
    paper: 'Civil Engineering',
    standard: 'Diploma',
    syllabus: 'Civil Engineering',
  },
  {
    post: 'Technincal Assistant (Electrical)',
    department: 'Tamil Nadu Housing Board',
    paper: 'Electrical and Electronics Engineering',
    standard: 'Diploma',
    syllabus: 'Electrical and Electronics Engineering',
  },
  {
    post: 'Junior Training Officer (Architectural Draughtsman)',
    department: 'Employment and Training',
    paper: 'Trade: Architectural Draughtsman',
    standard: 'ITI',
    syllabus: 'Trade: Architectural Draughtsman',
  },
  {
    post: 'Junior Training Officer (Basic Designer and Virtual Verifier)',
    department: 'Employment and Training',
    paper: 'Trade: Basic Designer and Virtual Verifier',
    standard: 'ITI',
    syllabus: 'Trade: Basic Designer and Virtual Verifier',
  },
  {
    post: 'Junior Training Officer (Computer Hardware and Network Maintenance)',
    department: 'Employment and Training',
    paper: 'Trade: Computer Hardware and Network Maintenance',
    standard: 'ITI',
    syllabus: 'Trade: Computer Hardware and Network Maintenance',
  },
  {
    post: 'Junior Training Officer (Advanced CNC Machining Technician )',
    department: 'Employment and Training',
    paper: 'Trade: Advanced CNC Machinig Technician',
    standard: 'ITI',
    syllabus: 'Trade: Advanced CNC Machinig Technician',
  },
  {
    post: 'Junior Training Officer (Electronics Mechanic )',
    department: 'Employment and Training',
    paper: 'Trade: Electronics Mechanic',
    standard: 'ITI',
    syllabus: 'Trade: Electronics Mechanic',
  },
  {
    post: 'Junior Training Officer (Food Production (General))',
    department: 'Employment and Training',
    paper: 'Trade: Food Production (General)',
    standard: 'ITI',
    syllabus: 'Trade: Food Production (General)',
  },
  {
    post: 'Junior Training Officer (Information and Communication Technology System Maintenance)',
    department: 'Employment and Training',
    paper: 'Trade: Information and Communication Technology System Maintenance',
    standard: 'ITI',
    syllabus: 'Trade: Information and Communication Technology System Maintenance',
  },
  {
    post: 'Junior Training Officer (Industrial Robotics and Digital Manufacturing Technician)',
    department: 'Employment and Training',
    paper: 'Trade: Industrial Robotics and Digital Manufacturing Technician',
    standard: 'ITI',
    syllabus: 'Trade: Industrial Robotics and Digital Manufacturing Technician',
  },
  {
    post: 'Junior Training Officer (Machinist)',
    department: 'Employment and Training',
    paper: 'Trade: Machinist',
    standard: 'ITI',
    syllabus: 'Trade: Machinist',
  },
  {
    post: 'Junior Training Officer (Workshop Calculation and Science)',
    department: 'Employment and Training',
    paper: 'Trade: Workshop Calculation and Science',
    standard: 'ITI',
    syllabus: 'Trade: Workshop Calculation and Science',
  },
  {
    post: 'Junior Training Officer (Mechanic Auto Body Repair)',
    department: 'Employment and Training',
    paper: 'Trade: Mechanic Auto Body Repair',
    standard: 'ITI',
    syllabus: 'Trade: Mechanic Auto Body Repair',
  },
  {
    post: 'Junior Training Officer (Mechanic Electric Vehicle)',
    department: 'Employment and Training',
    paper: 'Trade: Mechanic Electric Vehicle',
    standard: 'ITI',
    syllabus: 'Trade: Mechanic Electric Vehicle',
  },
  {
    post: 'Junior Training Officer (Manufacturing Process Control and Automation)',
    department: 'Employment and Training',
    paper: 'Trade: Manufacturing Process Control and Automation',
    standard: 'ITI',
    syllabus: 'Trade: Manufacturing Process Control and Automation',
  },
  {
    post: 'Junior Training Officer (Operator Advanced Machine Tools)',
    department: 'Employment and Training',
    paper: 'Trade: Operator Advanced Machine Tools',
    standard: 'ITI',
    syllabus: 'Trade: Operator Advanced Machine Tools',
  },
  {
    post: 'Junior Training Officer (Pump Operator cum Mechanic)',
    department: 'Employment and Training',
    paper: 'Trade: Pump Operator cum Mechanic',
    standard: 'ITI',
    syllabus: 'Trade: Pump Operator cum Mechanic',
  },
  {
    post: 'Junior Training Officer (Sewing Technology)',
    department: 'Employment and Training',
    paper: 'Trade: Sewing Technology',
    standard: 'ITI',
    syllabus: 'Trade: Sewing Technology',
  },
  {
    post: 'Junior Training Officer (Smart Phone Technician cum App Tester)',
    department: 'Employment and Training',
    paper: 'Trade: Smart Phone Technician cum App Tester',
    standard: 'ITI',
    syllabus: 'Trade: Smart Phone Technician cum App Tester',
  },
  {
    post: 'Junior Training Officer (Solar Technician (Electrical))',
    department: 'Employment and Training',
    paper: 'Trade: Solar Technician (Electrical)',
    standard: 'ITI',
    syllabus: 'Trade: Solar Technician (Electrical)',
  },
  {
    post: 'Junior Training Officer (Technician Medical Electronics)',
    department: 'Employment and Training',
    paper: 'Trade: Technician Medical Electronics',
    standard: 'ITI',
    syllabus: 'Trade: Technician Medical Electronics',
  },
  {
    post: 'Junior Training Officer (Wireman)',
    department: 'Employment and Training',
    paper: 'Trade: Wireman',
    standard: 'ITI',
    syllabus: 'Trade: Wireman',
  },
  {
    post: 'Junior Training Officer (Mechanic Two and Three Wheeler)',
    department: 'Employment and Training',
    paper: 'Trade: Mechanic Two and Three Wheeler',
    standard: 'ITI',
    syllabus: 'Trade: Mechanic Two and Three Wheeler',
  },
  {
    post: 'Junior Training Officer (Welder)',
    department: 'Employment and Training',
    paper: 'Trade:Welder (Gas & Electric)',
    standard: 'ITI',
    syllabus: 'Trade:Welder (Gas & Electric)',
  },
  {
    post: 'Junior Training Officer (Surveyor)',
    department: 'Employment and Training',
    paper: 'Trade: Surveyor',
    standard: 'ITI',
    syllabus: 'Trade: Surveyor',
  },
  {
    post: 'Junior Training Officer (Refrigeration and Air Conditioner Technician)',
    department: 'Employment and Training',
    paper: 'Trade: Refrigeration and Air Conditioner Technician',
    standard: 'ITI',
    syllabus: 'Trade: Refrigeration and Air Conditioner Technician',
  },
  {
    post: 'Junior Training Officer (Mechanic Motor Vehicle )',
    department: 'Employment and Training',
    paper: 'Trade: Mechanic Motor Vehicle',
    standard: 'ITI',
    syllabus: 'Trade: Mechanic Motor Vehicle',
  },
  {
    post: 'Junior Training Officer (Fitter)',
    department: 'Employment and Training',
    paper: 'Trade: Fitter',
    standard: 'ITI',
    syllabus: 'Trade: Fitter',
  },
  {
    post: 'Junior Training Officer (Electrician)',
    department: 'Employment and Training',
    paper: 'Trade: Electrician',
    standard: 'ITI',
    syllabus: 'Trade: Electrician',
  },
  {
    post: 'Junior Training Officer (Draughtsman Civil)',
    department: 'Employment and Training',
    paper: 'Trade: Draughtsman Civil',
    standard: 'ITI',
    syllabus: 'Trade: Draughtsman Civil',
  },
  {
    post: 'Junior Training Officer (Engineering Drawing)',
    department: 'Employment and Training',
    paper: 'Trade: Engineering Drawing and Draughtsman (Mechanical & Civil)',
    standard: 'ITI',
    syllabus: 'Trade: Engineering Drawing and Draughtsman (Mechanical & Civil)',
  },
  {
    post: 'Junior Training Officer (Turner)',
    department: 'Employment and Training',
    paper: 'Trade: Turner, Tool and Die Maker',
    standard: 'ITI',
    syllabus: 'Trade: Turner, Tool and Die Maker',
  },
  {
    post: 'Junior Training Officer (In-Plant Logistics Assistant)',
    department: 'Employment and Training',
    paper: 'Trade: In-Plant Logistics Assistant',
    standard: 'ITI',
    syllabus: 'Trade: In-Plant Logistics Assistant',
  },
  {
    post: 'Junior Training Officer (Fashion Design and Technology)',
    department: 'Employment and Training',
    paper: 'Trade: Fashion Design and Technology',
    standard: 'ITI',
    syllabus: 'Trade: Fashion Design and Technology',
  },
  {
    post: 'Junior Training Officer (Textile Mechatronics)',
    department: 'Employment and Training',
    paper: 'Trade: Textile Mechatronics',
    standard: 'ITI',
    syllabus: 'Trade: Textile Mechatronics',
  },
  {
    post: 'Junior Burner',
    department: 'Tamil Nadu Magnesite Limited',
    paper: 'Chemical Technology and Engineering',
    standard: 'Diploma',
    syllabus: 'Chemical Technology and Engineering',
  },
  {
    post: 'Chemist Grade - I',
    department: 'Industries and Commerce',
    paper: 'Chemical Technology and Engineering',
    standard: 'Diploma',
    syllabus: 'Chemical Technology and Engineering',
  },
  {
    post: 'Junior foreman',
    department: 'Tamil Nadu Magnesite Limited',
    paper: 'Mechanical Engineering',
    standard: 'Diploma',
    syllabus: 'Mechanical Engineering',
  },
  {
    post: 'Mines Surveyor',
    department: 'Tamil Nadu Minerals Limited',
    paper: 'Civil and Mining Engineering',
    standard: 'Diploma',
    syllabus: 'Civil and Mining Engineering',
  },
  {
    post: 'Assistant Rubber Maker',
    department: 'Arasu Rubber Corporation Limited',
    paper: 'Rubber Technology and Polymer Technology',
    standard: 'Diploma',
    syllabus: 'Rubber Technology and Polymer Technology',
  },
  {
    post: 'Field Assistant',
    department: 'Tamil Nadu Power Distribution Corporation Limited',
    paper: 'Trade: Electrician and Wireman',
    standard: 'ITI',
    syllabus: 'Trade: Electrician and Wireman',
  },
  {
    post: 'Mine Mate',
    department: 'Tamil Nadu Minerals Limited',
    paper: 'Mine Mate',
    standard: 'Certificate Course',
    syllabus: 'Mine Mate',
  },
];

const SyllabusTable: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Combined Civil Services Examinations
      </h1>

      <h2 className="text-2xl font-semibold text-blue-800 mb-4">
        Preliminary Examinations
      </h2>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">Name of the Post</th>
              <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">Department/Organization</th>
              <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">Paper</th>
              <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">Standard</th>
              <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">Syllabus</th>
            </tr>
          </thead>
          <tbody>
            {civilServicesPreliminaryData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-sm text-gray-600">{item.post}</td>
                <td className="px-4 py-2 border text-sm text-gray-600">{item.department}</td>
                <td className="px-4 py-2 border text-sm text-gray-600">{item.paper}</td>
                <td className="px-4 py-2 border text-sm text-gray-600">{item.standard}</td>
                <td className="px-4 py-2 border text-sm text-gray-600">{item.syllabus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-blue-800 mb-4">
        Main Examinations
      </h2>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">Name of the Post</th>
              <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">Department/Organization</th>
              <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">Paper</th>
              <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">Standard</th>
              <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">Syllabus</th>
            </tr>
          </thead>
          <tbody>
            {civilServicesMainData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-sm text-gray-600">{item.post}</td>
                <td className="px-4 py-2 border text-sm text-gray-600">{item.department}</td>
                <td className="px-4 py-2 border text-sm text-gray-600">{item.paper}</td>
                <td className="px-4 py-2 border text-sm text-gray-600">{item.standard}</td>
                <td className="px-4 py-2 border text-sm text-gray-600">{item.syllabus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Assistant Public Prosecutor, Grade II
      </h1>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">Name of the Post</th>
              <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">Department/Organization</th>
              <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">Paper</th>
              <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">Standard</th>
              <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">Syllabus</th>
            </tr>
          </thead>
          <tbody>
            {assistantPublicProsecutorData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-sm text-gray-600">{item.post}</td>
                <td className="px-4 py-2 border text-sm text-gray-600">{item.department}</td>
                <td className="px-4 py-2 border text-sm text-gray-600">{item.paper}</td>
                <td className="px-4 py-2 border text-sm text-gray-600">{item.standard}</td>
                <td className="px-4 py-2 border text-sm text-gray-600">{item.syllabus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Combined Technical Services Examination
      </h1>

      <h2 className="text-2xl font-semibold text-blue-800 mb-4">
        Interview Posts
      </h2>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">Name of the Post</th>
              <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">Department/Organization</th>
              <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">Paper</th>
              <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">Standard</th>
              <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">Syllabus</th>
            </tr>
          </thead>
          <tbody>
            {technicalServicesInterviewData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-sm text-gray-600">{item.post}</td>
                <td className="px-4 py-2 border text-sm text-gray-600">{item.department}</td>
                <td className="px-4 py-2 border text-sm text-gray-600">{item.paper}</td>
                <td className="px-4 py-2 border text-sm text-gray-600">{item.standard}</td>
                <td className="px-4 py-2 border text-sm text-gray-600">{item.syllabus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-blue-800 mb-4">
        Non-Interview Posts - Degree / Post Graduate Degree Level
      </h2>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">Name of the Post</th>
              <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">Department/Organization</th>
              <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">Paper</th>
              <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">Standard</th>
              <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">Syllabus</th>
            </tr>
          </thead>
          <tbody>
            {technicalServicesNonInterviewDegreeData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-sm text-gray-600">{item.post}</td>
                <td className="px-4 py-2 border text-sm text-gray-600">{item.department}</td>
                <td className="px-4 py-2 border text-sm text-gray-600">{item.paper}</td>
                <td className="px-4 py-2 border text-sm text-gray-600">{item.standard}</td>
                <td className="px-4 py-2 border text-sm text-gray-600">{item.syllabus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-blue-800 mb-4">
        Non-Interview Posts - Diploma / Post Diploma / ITI Level
      </h2>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">Name of the Post</th>
              <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">Department/Organization</th>
              <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">Paper</th>
              <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">Standard</th>
              <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">Syllabus</th>
            </tr>
          </thead>
          <tbody>
            {technicalServicesNonInterviewDiplomaData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-sm text-gray-600">{item.post}</td>
                <td className="px-4 py-2 border text-sm text-gray-600">{item.department}</td>
                <td className="px-4 py-2 border text-sm text-gray-600">{item.paper}</td>
                <td className="px-4 py-2 border text-sm text-gray-600">{item.standard}</td>
                <td className="px-4 py-2 border text-sm text-gray-600">{item.syllabus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm text-gray-600">
        Note: Unit-wise distribution of questions mentioned in the syllabus is only indicative. Commission reserves the right to marginally increase or decrease the number of questions in each unit if necessity arises.
      </p>
    </div>
  );
};

export default SyllabusTable;