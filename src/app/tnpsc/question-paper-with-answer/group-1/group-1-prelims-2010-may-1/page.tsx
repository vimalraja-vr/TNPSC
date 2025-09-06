"use client";

import { useState } from 'react';

export default function Home() {
  const [showAnswers, setShowAnswers] = useState<number[]>([]);
  const [notes, setNotes] = useState<Record<number, string>>({});
  const [showNote, setShowNote] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 10;

  const quizQuestions = [
    {
      question: "The Avogadro number is\nஅவோகாட்ரோ எண் என்பது",
      options: [
        { id: 'A', text: '6.00x10<sup>24</sup>' },
        { id: 'B', text: '6.023x10<sup>23</sup>' },
        { id: 'C', text: '6.054x10<sup>22</sup>' },
        { id: 'D', text: '6.504x10<sup>22</sup>' },
      ],
      correctAnswer: 'B. 6.023x10<sup>23</sup>',
    },
    {
      question: "Viscous force is directly proportional to\nபாகுநிலை விசை என்பது கீழ்க்காணும் எந்த ஒன்றினுக்கு நேர் விகிதத்தில் உள்ளது ?",
      options: [
        { id: 'A', text: 'temperature gradient\nவெப்பநிலை வாட்டம்' },
        { id: 'B', text: 'mass gradient\nநிறை வாட்டம்' },
        { id: 'C', text: 'velocity gradient\nவேக வாட்டம்' },
        { id: 'D', text: 'charge gradient\nமின்னூட்ட வாட்டம்' },
      ],
      correctAnswer: 'C. velocity gradient\nவேக வாட்டம்',
    },
    {
      question: "The South America country that suffered due to earthquake in 2010 was\n2010-ம் ஆண்டு பூகம்பத்தால் பாதிக்கப்பட்ட தென் அமெரிக்கா நாடு",
      options: [
        { id: 'A', text: 'Argentina\nஅர்ஜென்டைனா' },
        { id: 'B', text: 'Chile\nசிலி' },
        { id: 'C', text: 'Brazil\nபிரேசில்' },
        { id: 'D', text: 'Libya\nலிபியா' },
      ],
      correctAnswer: 'B. Chile\nசிலி',
    },
    {
      question: "According to the Economic Survey of India (2007-2008), the birth rate in Tamil Nadu state is\nஇந்திய பொருளாதார ஆய்வு அறிக்கை (92007-08)ன் படி , தமிழ்நாட்டின் பிறப்பு விகிதம்",
      options: [
        { id: 'A', text: '16.2' },
        { id: 'B', text: '18.4' },
        { id: 'C', text: '15.3' },
        { id: 'D', text: '10.6' },
      ],
      correctAnswer: 'A. 16.2',
    },
    {
      question: "The structure observed by Robert Hooke in plant cells was\nஇராபர்ட் ஹூக் , தாவர செல்களில் பார்த்த அமைப்பின் பெயர்",
      options: [
        { id: 'A', text: 'Protoplasm\nபுரோட்டோ பிளாசம்' },
        { id: 'B', text: 'Cell wall\nசெல் சுவர்' },
        { id: 'C', text: 'Nucleus\nநியூக்ளியஸ்' },
        { id: 'D', text: 'Tracheids\nட்ரக்சீட்கள்' },
      ],
      correctAnswer: 'B. Cell wall\nசெல் சுவர்',
    },
    {
      question: "How many pairs of cranial nerves are present in shark fishes?\nஎத்தனை இணை கிரானியல் நரம்புகள் ஷார்க் மீன்(Shark) வகையில் உள்ளது ?",
      options: [
        { id: 'A', text: '8' },
        { id: 'B', text: '10' },
        { id: 'C', text: '12' },
        { id: 'D', text: '14' },
      ],
      correctAnswer: 'B. 10',
    },
    {
      question: "When the basis of classification is according to location or place, the classification is called __________ classification\nவகைப்படுத்துதல் என்பது இடம் அல்லது அமைவிடம் இவற்றை அடிப்படையாகக் கொண்டு அமையும் எனில் , அது ______________வகைப்பாட்டியல் என அழைக்கப்படும்.",
      options: [
        { id: 'A', text: 'Quantitative\nஎண்ணின் அடிப்படையிலான' },
        { id: 'B', text: 'Geographical\nபூகோள ரீதியான' },
        { id: 'C', text: 'Qualitative\nபண்பின் அடிப்படையிலான' },
        { id: 'D', text: 'Chronological\nகால வரிகையான' },
      ],
      correctAnswer: 'B. Geographical\nபூகோள ரீதியான',
    },
    {
      question: "The oxidation number of Fe in K₃[Fe(CN)₆] is\nK₃[Fe(CN)₆] என்ற அணைவுச் சேர்மத்தில் Fe-ன் ஆக்சிஜனேற்ற எள்",
      options: [
        { id: 'A', text: '+2' },
        { id: 'B', text: '+3' },
        { id: 'C', text: '+1' },
        { id: 'D', text: '+4' },
      ],
      correctAnswer: 'B. +3',
    },
    {
      question: "The ray which does not affect the photographic plate is\nஒளிப்படத் தகட்டைப் பாதிக்காத கதிர்",
      options: [
        { id: 'A', text: 'Alpha ray\nஆல்ஃபா கதிர்' },
        { id: 'B', text: 'Beta Ray\nபீட்டா கதிர்' },
        { id: 'C', text: 'Gamma Ray\nகாமா கதிர்' },
        { id: 'D', text: 'none of these\nஇவற்றுள் எதுவுமில்லை' },
      ],
      correctAnswer: 'D. none of these\nஇவற்றுள் எதுவுமில்லை',
    },
    {
      question: "Who among the following said that Buddha's character and teaching made him 'The Light not of Asia only but of the World'?\nபின்வருபவர்களில் புத்தரின் குணாதிசயமும் , போதனையும் அவரை 'ஆசியாவின் ஒளிமட்டுமின்றி உலகின் ஒளியாக்குகிறது' என்று கூறியவர் யார் ?",
      options: [
        { id: 'A', text: 'Sir Edwin Arnold\nசர் எட்வின் அர்னால்டு' },
        { id: 'B', text: 'Mrs. Rhys Davids\nதிருமதி. ரைஸ் டேவிட்ஸ்' },
        { id: 'C', text: 'Dr. Radhakrishnan\nடாக்டர். இராதாகிருஷ்ணன்' },
        { id: 'D', text: 'H.G. Wells\nஎச். ஜி. வெல்ஸ்' },
      ],
      correctAnswer: 'A. Sir Edwin Arnold\nசர் எட்வின் அர்னால்டு',
    },
  ];

  const totalPages = Math.ceil(quizQuestions.length / questionsPerPage);
  const startIndex = (currentPage - 1) * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const currentQuestions = quizQuestions.slice(startIndex, endIndex);

  const handleViewAnswer = (index: number) => {
    setShowAnswers((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>, qIndex: number) => {
    setNotes((prev) => ({ ...prev, [qIndex]: e.target.value }));
  };

  const handleRoughWork = (index: number) => {
    setShowNote(showNote === index ? null : index);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setShowAnswers([]);
      setShowNote(null);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setShowAnswers([]);
      setShowNote(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <section className="section">
        <div className="container-fluid tab pd-50">
          <div className="row" id="counter">
            {/* Sidebar */}
            <div className="col-md-3 mt-4 pt-2 pd-align animated fadeInLeft">
              <div className="text-center pt-1 pb-1 text-head">
                <b className="title font-weight-normal mb-0">Group 1 Question Papers</b>
              </div>
              <ul className="nav nav-pills nav-justified flex-column bg-white rounded shadow p-3 mb-0 sticky-bar" id="pills-tab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link rounded active" href="#current">
                    <div className="text-center pt-1 pb-1">
                      <b className="title font-weight-normal mb-0"><i className="mdi mdi-minus"></i> Group 1 Prelims 2010 May</b>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link rounded" href="#2011">
                    <div className="text-center pt-1 pb-1">
                      <b className="title font-weight-normal mb-0"><i className="mdi mdi-plus"></i> Group 1 Prelims 2011 June</b>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link rounded" href="#2013">
                    <div className="text-center pt-1 pb-1">
                      <b className="title font-weight-normal mb-0"><i className="mdi mdi-plus"></i> Group 1 Prelims 2013 February</b>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link rounded" href="#2014">
                    <div className="text-center pt-1 pb-1">
                      <b className="title font-weight-normal mb-0"><i className="mdi mdi-plus"></i> Group 1 Prelims 2014 July</b>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link rounded" href="#2015">
                    <div className="text-center pt-1 pb-1">
                      <b className="title font-weight-normal mb-0"><i className="mdi mdi-plus"></i> Group 1 Prelims 2015 November</b>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link rounded" href="#2017">
                    <div className="text-center pt-1 pb-1">
                      <b className="title font-weight-normal mb-0"><i className="mdi mdi-plus"></i> Group 1 Prelims 2017 February</b>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link rounded" href="#2019">
                    <div className="text-center pt-1 pb-1">
                      <b className="title font-weight-normal mb-0"><i className="mdi mdi-plus"></i> Group 1 Prelims 2019 March</b>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link rounded" href="#2021">
                    <div className="text-center pt-1 pb-1">
                      <b className="title font-weight-normal mb-0"><i className="mdi mdi-plus"></i> Group 1 Prelims 2021 January</b>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link rounded" href="#2022">
                    <div className="text-center pt-1 pb-1">
                      <b className="title font-weight-normal mb-0"><i className="mdi mdi-plus"></i> Group 1 Prelims 2022 November</b>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link rounded" href="#2024">
                    <div className="text-center pt-1 pb-1">
                      <b className="title font-weight-normal mb-0"><i className="mdi mdi-plus"></i> Group 1 Prelims 2024 July</b>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link rounded" href="#2024b">
                    <div className="text-center pt-1 pb-1">
                      <b className="title font-weight-normal mb-0"><i className="mdi mdi-plus"></i> Group 1B and 1C Prelims 2024 July</b>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Main Content */}
            <div className="col-md-6 col-12 mt-4 pt-2 pd-align animated fadeInUp">
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade bg-white show active p-4 rounded shadow" id="developing" role="tabpanel" aria-labelledby="webdeveloping">
                  <h2 className="title h5 font-weight-bold text-center pt-2 mb-50">Group 1 Prelims 2010 May TNPSC Questions</h2>
                  {currentQuestions.map((question, index) => {
                    const globalIndex = startIndex + index;
                    return (
                      <div key={globalIndex} className="mt-4 mt-50 mb-30 qus">
                        <div className="text-muted row">
                          <div className="qusnum">
                            {globalIndex + 1}.
                          </div>
                          <div className="qusdes" dangerouslySetInnerHTML={{ __html: question.question.replace('\n', '<br />') }} />
                        </div>
                        <div className="list-unstyled mt-4 row">
                          {question.options.map((option, optIndex) => (
                            <div key={optIndex} className="mt-2 col-12 p-0" onClick={() => {}}>
                              <div className="text-muted">
                                <div className="qusnum">{option.id}.</div>
                                <div className="qusdes" dangerouslySetInnerHTML={{ __html: option.text.replace('\n', '<br />') }} />
                              </div>
                            </div>
                          ))}
                          <div className="mt-4">
                            <span className="emoji">😑</span>
                            <a
                              href="javascript:void(0)"
                              onClick={() => handleViewAnswer(globalIndex)}
                              className="text-primary view hvr-shadow hvr-grow-shadow"
                            >
                              View Answer
                            </a>
                            <a
                              href="javascript:void(0)"
                              onClick={() => handleRoughWork(globalIndex)}
                              className="text-primary view rough hvr-grow-shadow ml-2"
                            >
                              Rough Work
                            </a>
                          </div>
                        </div>
                        {showAnswers.includes(globalIndex) && (
                          <div className="answer animate__animated animate__fadeInDown">
                            <div>
                              <b>ANSWER :</b>
                              <div dangerouslySetInnerHTML={{ __html: question.correctAnswer.replace('\n', '<br />') }} />
                            </div>
                          </div>
                        )}
                        {showNote === globalIndex && (
                          <div className="roungh animate__animated animate__fadeInDown mt-4">
                            <textarea
                              className="form-control"
                              value={notes[globalIndex] || ''}
                              onChange={(e) => handleNoteChange(e, globalIndex)}
                              placeholder="Write your notes here..."
                              rows={4}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                  {/* Pagination */}
                  <div className="col-12 mt-50">
                    <ul className="pagination">
                      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <a
                          className="page-link"
                          onClick={(e) => {
                            if (currentPage > 1) {
                              handlePreviousPage();
                            } else {
                              e.preventDefault();
                            }
                          }}
                          aria-label="Previous"
                        >
                          Prev
                        </a>
                      </li>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                          <a
                            className="page-link"
                            onClick={() => {
                              if (currentPage !== page) {
                                setCurrentPage(page);
                                setShowAnswers([]);
                                setShowNote(null);
                              }
                            }}
                          >
                            {page}
                          </a>
                        </li>
                      ))}
                      <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <a
                          className="page-link"
                          onClick={(e) => {
                            if (currentPage < totalPages) {
                              handleNextPage();
                            } else {
                              e.preventDefault();
                            }
                          }}
                          aria-label="Next"
                        >
                          Next
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-md-3 mt-4 pt-2 pd-align animated fadeInRight">
              <div className="sticky-bar image">
                {/* <img src="https://via.placeholder.com/300x600" width="100%" className="img-fluid" alt="Premium Ad" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}