import { Link } from "react-router-dom";

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';
import { title } from "process";

interface PageHeaderProps {
  title: string;
  children: React.ReactNode;
}

export const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" className='logoImg' />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>

        {props.children}
      </div>

    </header>
  )
}