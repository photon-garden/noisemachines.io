import React from 'react'

export default ({ h1, ths, trs, footerTr, wrapperClass }) => (
  <div id='wrapper' className={`divided ${wrapperClass}`}>
    <section className='wrapper style1 align-center'>
      <div className='inner'>
        <h1>{h1}</h1>
        <div className='index align-left'>
          <section>
            <div className='content'>
              <div className='table-wrapper'>
                <table className='alt uniform'>
                  <thead>
                    <tr>{ths}</tr>
                  </thead>
                  <tbody>{trs}</tbody>
                  <tfoot>{footerTr}</tfoot>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
)
