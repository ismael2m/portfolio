import React from 'react';
import { Helmet } from 'react-helmet';


const Head = ({ title }) => {
  switch (title) {
    case 'Ismaël Mmadi':
      return (
        <Helmet>
          <title>
            {title}
          </title>
        </Helmet>
      );

    case '/profil':
      return (
        <Helmet>
          <title>
            {title}
          </title>
        </Helmet>
      );

    case '404':
      return (
        <Helmet>
          <title>
            {title}
          </title>
        </Helmet>
      );


    default:
      return (
        <Helmet>
          <title>
            Projets |
            {' '}
            {title}
          </title>
        </Helmet>
      ); 
  }
};


//   if (title === 'Ismaël Mmadi') {
//     return (
//       <Helmet>
//         <title>
//           {title}
//         </title>
//       </Helmet>
//     );
//   } if (title !== '/profil') {
//     return (
//       <Helmet>
//         <title>
//           Projets |
//           {' '}
//           {title}
//         </title>
//       </Helmet>
//     );
//   } const locaSplit = title.split('/');
//   const toUpper = (a) => (`${a}`).charAt(0).toUpperCase() + a.substr(1);
//   return (
//     <Helmet>
//       <title>
//         IMM |
//         {' '}
//         {toUpper(locaSplit[1])}
//       </title>
//     </Helmet>
//   );
// };

export default Head;