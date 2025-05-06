import React from 'react'

const MasterClass: React.FC = () => {
  return <section className="master-class">
    <h2>Майстер-класи</h2>
    <p className='master-class__subtitle'>Навчіться створювати власні їстівні букети разом із нами!</p>
    <ul className='master-class__benefits'>
      <li>Індивідуальний підхід до кожного учасника</li>
      <li>Робота з найсвіжішими продуктами</li>
      <li>Секрети оформлення і композиції</li>
      <li>Сертифікат після закінчення</li>
    </ul>
    <button className="button">Дізнатися більше</button>

  </section>
}

export default MasterClass