import Portfolio from './components/Portfolio/Portfolio';
import Store from './components/Store/Store';
import Dropdown from './components/Dropdown/Dropdown';

function App() {
  return (
    <div className={'wrapper'}>
      <header className={'header'} id={'header'}>
        <div className={'header__body _container'}>
          <h2 className={'header__title'}>
            2. Домашнее задание к лекции «События и состояние»
          </h2>
        </div>
      </header>

      <main className={'main'}>
        <div className={'main__item task _container'} id={'task1'}>
          <header className={'task__header'}>
            <h3 className={'task__title'}>2.1 Портфолио с фильтрами</h3>
            <nav className={'task__menu menu'}>
              <div className={'menu__item'}>
                <a className={'menu__link menu__link-bottom'} href={'#task2'}>
                  {/* <span className={'_visually-hidden'}>next task</span> */}
                </a>
              </div>
            </nav>
          </header>
          <div className={'task__body'}>
            <Portfolio />
          </div>
        </div>

        <div className={'main__item task _container'} id={'task2'}>
          <header className={'task__header'}>
            <h3 className={'task__title'}>2.2 Расположение товаров</h3>
            <nav className={'task__menu menu'}>
              <div className={'menu__item'}>
                <a className={'menu__link menu__link-top'} href={'#header'}>
                  {/* <span className={'_visually-hidden'}>previous task</span> */}
                </a>
              </div>
              <div className={'menu__item'}>
                <a className={'menu__link menu__link-bottom'} href={'#task3'}>
                  {/* <span className={'_visually-hidden'}>next task</span> */}
                </a>
              </div>
            </nav>
          </header>
          <div className={'task__body'}>
            <Store />
          </div>
        </div>

        <div className={'main__item task task_3 _container'} id={'task3'}>
          <header className={'task__header'}>
            <h3 className={'task__title'}>2.3 Выпадающий список*</h3>
            <nav className={'task__menu menu'}>
              <div className={'menu__item'}>
                <a className={'menu__link menu__link-top'} href={'#header'}>
                  <span className={'_visually-hidden'}>home task</span>
                </a>
              </div>
            </nav>
          </header>
          <div className={'task__body task__body_task3'}>
            <Dropdown />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
