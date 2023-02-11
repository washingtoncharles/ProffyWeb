import { PageHeader } from '../../components/Pageheader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id='subject' />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id='week_day' />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id='time' />
          </div>
        </form>
      </PageHeader>

      <main>
        <article className="teacher-item">
          <header>
            <img src="https://github.com/washingtoncharles.png" alt="Avatar" />
            <div>
              <strong>Washington Charles</strong>
              <span>Química</span>
            </div>
          </header>

          <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br /><br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 60,00</strong>
            </p>
            <button type='button'>
              <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
          </footer>

        </article>
      </main>
    </div>
  )
}