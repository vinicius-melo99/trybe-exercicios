// Dados
const professionalBoard = [
    {
      id: '8579-6',
      firstName: 'Ana',
      lastName: 'Gates',
      specialities: ['UX', 'Design'],
    },
    {
      id: '5569-4',
      firstName: 'George',
      lastName: 'Jobs',
      specialities: ['Frontend', 'Redux', 'React', 'CSS'],
    },
    {
      id: '4456-4',
      firstName: 'Leila',
      lastName: 'Zuckerberg',
      specialities: ['Context API', 'RTL', 'Bootstrap'],
    },
    {
      id: '1256-4',
      firstName: 'Linda',
      lastName: 'Bezos',
      specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
    },
    {
      id: '9852-2-2',
      firstName: 'Jeff',
      lastName: 'Cook',
      specialities: ['Ruby', 'SQL'],
    },
    {
      id: '4678-2',
      firstName: 'Paul',
      lastName: 'Dodds',
      specialities: ['Backend'],
    },
  ];
  
  // Pesquisa
  const searchEmployee = (id, detail) => {
    let message = '';
    let verifyID = false;

    for(index = 0; index < professionalBoard.length; index += 1){
        if(professionalBoard[index].id === id){
            verifyID = true;
            if(detail === 'specialities'){
                message = `ID: ${professionalBoard[index].id}, Informação: ${professionalBoard[index][detail].join(", ")}`
                break;
            }
            message = `ID: ${professionalBoard[index].id}, Informação: ${professionalBoard[index][detail]}`;
            break;
        } 
    }
    if(!verifyID){
        return `ID não identificado`;
    } else if(message.includes(`undefined`)){
        return "Informação indisponível";
    }
        
    return message;

  };

  console.log(searchEmployee('4456-4', 'firstName'));

  module.exports = { searchEmployee };