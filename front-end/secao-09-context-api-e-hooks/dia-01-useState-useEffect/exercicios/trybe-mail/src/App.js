import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [emails, setEmails] = useState([
    {
      id: 1,
      title: 'Tenho uma oportunidade pra vc! venha conferir',
      status: 0,
    },
    {
      id: 2,
      title: 'Parabéns! você foi o ganhador de um Celta 0km, venha retirar o prêmio!',
      status: 0,
    },
    {
      id: 3,
      title: 'Breaking News... Elon Musk acaba de comprar a China.',
      status: 0,
    },
  ]);

  useEffect(() => {
    emails.every(({ status }) => status === 1) 
      && alert('parabéns! você leu todas as mensagens')
  }, [emails])

  const setAllEmailReadAndUnread = ({ target: { name } }) => {
    const emailsStatus = []
    if(name === 'todos-lidos'){
      emails.forEach((email) => {
        emailsStatus.push({
          ...email,
          status: 1,
        })
      })
      setEmails(emailsStatus);
    } else {
      emails.forEach((email) => {
        emailsStatus.push({
          ...email,
          status: 0,
        })
      })
      setEmails(emailsStatus);
    }
  }

  const setEmailRead = ({ target: { name } }) => {
    const newEmails = [...emails];

    emails.forEach((email, index) => {
      if(email.id === Number(name)) {
        newEmails[index] = {
          ...email,
          status: 1,
        }
      }
    })
    setEmails(newEmails);
  }

  const setEmailUnread = ({ target: { name } }) => {
    const newEmails = [...emails];

    emails.forEach((email, index) => {
      if(email.id === Number(name)) {
        newEmails[index] = {
          ...email,
          status: 0,
        }
      }
    })
    setEmails(newEmails);
  }
  
  return (
   <main>
      <h1>Trybe Mail</h1>
      <section>
        <button
          name='todos-lidos'
          onClick={ setAllEmailReadAndUnread }
        >
          Marcar todas como lida
        </button>
        <button
          name='todos-nao-lidos'
          onClick={ setAllEmailReadAndUnread }
        >
          Marcar todas como não lida
        </button>
      </section>
      <section className='email-container'>
        {console.log(emails)}
        
        {emails.map(({ title, status, id }) => (
          <div className='email'> 
              <h3 style={{fontWeight: status === 0 ? 700 : 400}}>{ title }</h3> 
            <section>
              <button
               name={ id }
               onClick={ setEmailRead }
              >
                Marcar como lido
              </button>
              <button
               name={ id } 
               onClick={ setEmailUnread }
              >
                Marcar como não lido
              </button>
            </section>
          </div>
        ))}
      </section>
   </main>
  );
}

export default App;
