import styles from '../styles/Element.module.css'
import { useState } from 'react';
import g_bg1 from '../public/game_btn_1.png'
import g_bg2 from '../public/game_btn_2.png'

export default function Test() {
  const [value, setValue] = useState(20);
  const [mouseOver, setMouseOver] = useState(false);
  const [inputValue, setInputValue] = useState(false);
  let bg = mouseOver ? g_bg2 : g_bg1;
  function onChange(e) {
    setValue(e.target.value);
  }
  function inputChange(e) {
    if (e.target.value != '') {
      setInputValue(true);
    } else {
      setInputValue(false);
    }
  }
  function radioChange() {

  }
  return (
    <div className={styles.styleguide}>
      <p className={styles.text}>Switch</p>
      <label className={styles.switch}>
        <input type="checkbox" />
        <span className={styles.switchslider}></span>
        <span className={styles.switch_back}></span>
      </label>
      <p className={styles.text}>Slider</p>
      <div className="slidecontainer">
        <input
          type="range"
          min="1"
          max="100"
          value={value}
          onChange={onChange}
          className={styles.slider}
          id="myRange"
        />
      </div>
      <p className={styles.text}>Check Box</p>
      <div className={`${styles.checkboxcontainer} mt-4 inline-flex`}>
        <label className={styles.checkboxcontainer}>Select all
          <input type="checkbox" />
          <span className={styles.checkmark}></span>
        </label>
        <label className={styles.checkboxcontainer}>I accept the Terms & Conditions
          <input type="checkbox" checked={true} onChange={() => { }} />
          <span className={styles.checkmark}></span>
        </label>
        <label className={styles.checkboxcontainer}>I accept the Privacy Policys
          <input type="checkbox" />
          <span className={styles.checkmark}></span>
        </label>
        <label className={styles.checkboxcontainer}>I Accept Offers and Marketing
          <input type="checkbox" />
          <span className={styles.checkmark}></span>
        </label>
      </div>
      <p>Radio Buttons</p>
      <div>
        <label className={styles.rcontainer}>No thank you
          <input type="radio" checked={true} onChange={radioChange} name="radio1" />
          <span className={styles.rcheckmark}></span>
        </label>
        <label className={styles.rcontainer}>Yes please
          <input type="radio" name="radio1" />
          <span className={styles.rcheckmark}></span>
        </label>
      </div>
      <p>Input</p>
      <div className={styles.input_container}>
        <input type="text" required="" onChange={inputChange} />
        <label className={inputValue ? styles.valid : ''}>Phone Number</label>
      </div>
      <p>Button</p>
      <div className={styles.game_btn} style={{ backgroundImage: `url(${bg.src})` }} onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)}>
      </div>
      <p>Others</p>
      <div className={styles.other}>
        <div className='flex my-3'>
          <div className='fa fa-user text-white w-[22px] h-[22px] mx-4' style={{ backgroundImage: 'url(yellow-sub-up.png)' }}></div>
          <div className='fa fa-user text-white w-[22px] h-[22px] mx-4' style={{ backgroundImage: 'url(yellow-sub-down.png)' }}></div>
          <div className='fa fa-user text-white w-[22px] h-[22px] rounded-[11px] mx-4 bg-[#d5fd02]' style={{ backgroundImage: 'url(sub-left-1.png)', backgroundSize: '6px 11px', backgroundRepeat: 'no-repeat', backgroundPositionX: 'center', backgroundPositionY: 'center' }}></div>
          <div className='fa fa-user text-white w-[22px] h-[22px] mx-4' style={{ backgroundImage: 'url(yellow-sub-right.png)' }}></div>
        </div>
        <div className='flex my-3'>
          <div className='fa fa-user text-white w-[22px] h-[22px] mx-4' style={{ backgroundImage: 'url(black-sub-up.png)' }}></div>
          <div className='fa fa-user text-white w-[22px] h-[22px] mx-4' style={{ backgroundImage: 'url(black-sub-down.png)' }}></div>
          <div className='fa fa-user text-white w-[22px] h-[22px] rounded-[11px] mx-4 bg-[black] border-[#d5fd02] border-[2.5px]' style={{ backgroundImage: 'url(sub-left-2.png)', backgroundSize: '6px 11px', backgroundRepeat: 'no-repeat', backgroundPositionX: 'center', backgroundPositionY: 'center' }}></div>
          <div className='fa fa-user text-white w-[22px] h-[22px] mx-4' style={{ backgroundImage: 'url(black-sub-right.png)' }}></div>
        </div>
        <div className='flex my-3'>
          <div className='fa fa-user text-white w-[22px] h-[22px] mx-4' style={{ backgroundImage: 'url(white-sub-up.png)' }}></div>
          <div className='fa fa-user text-white w-[22px] h-[22px] mx-4' style={{ backgroundImage: 'url(white-sub-down.png)' }}></div>
          <div className='fa fa-user text-white w-[22px] h-[22px] mx-4' style={{ backgroundImage: 'url(white-sub-left.png)' }}></div>
          <div className='fa fa-user text-white w-[22px] h-[22px] mx-4' style={{ backgroundImage: 'url(white-sub-right.png)' }}></div>
        </div>
        <div className='flex my-3'>
          <div className='fa fa-user text-white w-[22px] h-[22px] mx-4' style={{ backgroundImage: 'url(plus-2.png)' }}></div>
          <div className='fa fa-user text-white w-[26px] h-[26px] mx-4' style={{ backgroundImage: 'url(plus-1.png)' }}></div>
          <div className='fa fa-user text-white w-[26px] h-[26px] mx-4' style={{ backgroundImage: 'url(close.png)' }}></div>
        </div>
        <div className='flex my-6 px-4'>
          <div className='w-2 h-2 bg-[#d5fd02] rounded mx-2'></div>
          <div className='w-2 h-2 bg-[white] rounded mx-2'></div>
          <div className='w-2 h-2 bg-[white] rounded mx-2'></div>
          <div className='w-2 h-2 bg-[white] rounded mx-2'></div>
          <div className='w-2 h-2 bg-[white] rounded mx-2'></div>
        </div>
      </div>
    </div>
  )
}