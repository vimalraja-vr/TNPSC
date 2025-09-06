import Link from 'next/link';

export default function PreviousPapers() {
  const paperGroups = [
    {
      title: 'Group 1',
      papers: [
        { name: 'Group 1 Prelims 2010 May', url: '/tnpsc/question-paper-with-answer/group-1/group-1-prelims-2010-may-1' },
        { name: 'Group 1 Prelims 2011 June', url: '/tnpsc/question-paper-with-answer/group-1/group-1-prelims-2011-june-1' },
        { name: 'Group 1 Prelims 2013 February', url: '/tnpsc/question-paper-with-answer/group-1/group-1-prelims-2013-february-1' },
        { name: 'Group 1 Prelims 2014 July', url: '/tnpsc/question-paper-with-answer/group-1/group-1-prelims-2014-july-1' },
        { name: 'Group 1 Prelims 2015 November', url: '/tnpsc/question-paper-with-answer/group-1/group-1-prelims-2015-november-1' },
        { name: 'Group 1 Prelims 2017 February', url: '/tnpsc/question-paper-with-answer/group-1/group-1-prelims-2017-february-1' },
        { name: 'Group 1 Prelims 2019 March', url: '/tnpsc/question-paper-with-answer/group-1/group-1-prelims-2019-march-1' },
        { name: 'Group 1 Prelims 2021 January', url: '/tnpsc/question-paper-with-answer/group-1/group-1-prelims-2021-january-1' },
        { name: 'Group 1 Prelims 2022 November', url: '/tnpsc/question-paper-with-answer/group-1/group-1-prelims-2022-november-1' },
        { name: 'Group 1 Prelims 2024 July', url: '/tnpsc/question-paper-with-answer/group-1/group-1-prelims-2024-july-1' },
        { name: 'Group 1B and 1C Prelims 2024 July', url: '/tnpsc/question-paper-with-answer/group-1/group-1b-and-1c-prelims-2024-july-1' },
      ],
    },
    {
      title: 'Group 2 2A',
      papers: [
        { name: 'Group 2 2013 December GE', url: '/tnpsc/question-paper-with-answer/group-2-2a/group-2-2013-december-ge-1' },
        { name: 'Group 2 2013 December GT', url: '/tnpsc/question-paper-with-answer/group-2-2a/group-2-2013-december-gt-1' },
        { name: 'Group 2A 2016 January GE', url: '/tnpsc/question-paper-with-answer/group-2-2a/group-2a-2016-january-ge-1' },
        { name: 'Group 2A 2016 January GT', url: '/tnpsc/question-paper-with-answer/group-2-2a/group-2a-2016-january-gt-1' },
        { name: 'Group 2 2015 July GE', url: '/tnpsc/question-paper-with-answer/group-2-2a/group-2-2015-july-ge-1' },
        { name: 'Group 2 2015 July GT', url: '/tnpsc/question-paper-with-answer/group-2-2a/group-2-2015-july-gt-1' },
        { name: 'Group 2 2018 November GE', url: '/tnpsc/question-paper-with-answer/group-2-2a/group-2-2018-november-ge-1' },
        { name: 'Group 2 2018 November GT', url: '/tnpsc/question-paper-with-answer/group-2-2a/group-2-2018-november-gt-1' },
        { name: 'Group 2A 2014 June GE', url: '/tnpsc/question-paper-with-answer/group-2-2a/group-2a-2014-june-ge-1' },
        { name: 'Group 2A 2014 June GT', url: '/tnpsc/question-paper-with-answer/group-2-2a/group-2a-2014-june-gt-1' },
        { name: 'Group 2 2A 2022 May GE', url: '/tnpsc/question-paper-with-answer/group-2-2a/group-2-2a-2022-may-ge-1' },
        { name: 'Group 2 2A 2022 May GT', url: '/tnpsc/question-paper-with-answer/group-2-2a/group-2-2a-2022-may-gt-1' },
        { name: 'Group 2 2A 2024 September GE', url: '/tnpsc/question-paper-with-answer/group-2-2a/group-2-2a-2024-september-ge-1' },
        { name: 'Group 2 2A 2024 September GT', url: '/tnpsc/question-paper-with-answer/group-2-2a/group-2-2a-2024-september-gt-1' },
      ],
    },
    {
      title: 'Group 4 VAO',
      papers: [
        { name: 'VAO 2011 February GE', url: '/tnpsc/question-paper-with-answer/group-4-vao/vao-2011-february-ge-1' },
        { name: 'VAO 2011 February GT', url: '/tnpsc/question-paper-with-answer/group-4-vao/vao-2011-february-gt-1' },
        { name: 'Group 4 2012 July GE', url: '/tnpsc/question-paper-with-answer/group-4-vao/group-4-2012-july-ge-1' },
        { name: 'Group 4 2012 July GT', url: '/tnpsc/question-paper-with-answer/group-4-vao/group-4-2012-july-gt-1' },
        { name: 'Group 4 2013 August GE', url: '/tnpsc/question-paper-with-answer/group-4-vao/group-4-2013-august-ge-1' },
        { name: 'Group 4 2013 August GT', url: '/tnpsc/question-paper-with-answer/group-4-vao/group-4-2013-august-gt-1' },
        { name: 'VAO 2014 June GE', url: '/tnpsc/question-paper-with-answer/group-4-vao/vao-2014-june-ge-1' },
        { name: 'VAO 2014 June GT', url: '/tnpsc/question-paper-with-answer/group-4-vao/vao-2014-june-gt-1' },
        { name: 'Group 4 2014 December GE', url: '/tnpsc/question-paper-with-answer/group-4-vao/group-4-2014-december-ge-1' },
        { name: 'Group 4 2014 December GT', url: '/tnpsc/question-paper-with-answer/group-4-vao/group-4-2014-december-gt-1' },
        { name: 'VAO 2016 February GE', url: '/tnpsc/question-paper-with-answer/group-4-vao/vao-2016-february-ge-1' },
        { name: 'VAO 2016 February GT', url: '/tnpsc/question-paper-with-answer/group-4-vao/vao-2016-february-gt-1' },
        { name: 'Group 4 2016 November GE', url: '/tnpsc/question-paper-with-answer/group-4-vao/group-4-2016-november-ge-1' },
        { name: 'Group 4 2016 November GT', url: '/tnpsc/question-paper-with-answer/group-4-vao/group-4-2016-november-gt-1' },
        { name: 'Group 4 2018 February GE', url: '/tnpsc/question-paper-with-answer/group-4-vao/group-4-2018-february-ge-1' },
        { name: 'Group 4 2018 February GT', url: '/tnpsc/question-paper-with-answer/group-4-vao/group-4-2018-february-gt-1' },
        { name: 'Group 4 2019 September GE', url: '/tnpsc/question-paper-with-answer/group-4-vao/group-4-2019-september-ge-1' },
        { name: 'Group 4 2019 September GT', url: '/tnpsc/question-paper-with-answer/group-4-vao/group-4-2019-september-gt-1' },
        { name: 'Group 4 2022 July', url: '/tnpsc/question-paper-with-answer/group-4-vao/group-4-2022-july-1' },
        { name: 'Group 4 2024 June', url: '/tnpsc/question-paper-with-answer/group-4-vao/group-4-2024-june-1' },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-half bg-light d-table w-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="page-next-level">
                <h1 className="title">TNPSC Previous Year Question paper</h1>
                <div className="page-next">
                  <nav aria-label="breadcrumb" className="d-inline-block">
                    <ul className="breadcrumb bg-white rounded shadow mb-0">
                      <li className="breadcrumb-item active" aria-current="page">
                        TNPSC PREVIOUS YEAR QUESTION PAPERS
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shape */}
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      {/* Content with Three Parallel Tables */}
      <div className="container mt-5">
        <div className="row">
          {paperGroups.map((group, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card border rounded shadow p-3">
                <div className="card-body">
                  <h5 className="card-title text-center mb-3">{group.title}</h5>
                  <table className="table table-striped">
                    <tbody>
                      {group.papers.map((paper, idx) => (
                        <tr key={idx}>
                          <td>
                            <Link href={paper.url} className="text-muted">
                              <i className="mdi mdi-arrow-right text-primary me-2"></i>
                              {paper.name}
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              
            </div>
          ))}
        </div>
      </div>

      {/* Shape at Bottom */}
      <div className="position-relative">
        <div className="shape overflow-hidden text-footer">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
    </>
  );
}