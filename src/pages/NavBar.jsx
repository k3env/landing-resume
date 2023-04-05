import { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import Toggler from '../assets/toggler.svg';

export function NavBar({ hidden, links }) {
  // console.log(className);
  const classList = ['navbar', 'fixed-top', 'shadow-sm', 'navbar-expand-lg', 'bg-light', 'py-3', 'py-lg-0', 'px-lg-5'];
  if (hidden) {
    classList.push('navbar-light');
  }

  const [visible, toggle] = useState(false);

  const mClassList = ['px-lg-3', 'navbar-collapse']; // ['collapse', 'navbar-collapse', 'px-lg-3'];
  // if (visible) {
  //   mClassList.push('show');
  // }

  return (
    <nav className={classList.join(' ')}>
      <a href="/" className="navbar-brand ml-lg-3">
        <h1 className="m-0 display-5">
          <span className="text-primary">K3</span>Env
        </h1>
      </a>
      <button
        type="button"
        className="navbar-toggler"
        onClick={() => {
          toggle(!visible);
        }}
      >
        {/* <span style={{ backgroundImage: Toggler }} /> */}
        <img src={Toggler} alt="" />
      </button>
      <Collapse in={visible} className={mClassList.join(' ')}>
        <div className="navbar-nav m-auto py-0">
          {links.map((l) => (
            <a
              key={`${l.link}-${l.title}`}
              href={l.link}
              className="nav-item nav-link active"
              onClick={() => toggle(false)}
            >
              {l.title}
            </a>
          ))}
        </div>
        {/* <Button variant="outline-primary" type="button" className="d-none d-lg-block">
          Нанять
        </Button> */}
      </Collapse>
    </nav>
  );
}
