import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    <>
      <div className={styles.main_container}>
        <div className={styles.header}>
          <div className={styles.postName} >
            <img
              src="/Images/fire.jpg"className={styles.app_logo}/>
            <h1>POSTARA</h1>
          </div>
          <div className={styles.input_search}>
            <input id="name" type="text" autocomplete="name" required />
            <div className={styles.search}>
              <a href="#"> <img src="/Images/search-solid.svg" className={styles.Image} /> </a>
            </div>
          </div>
          <div className={styles.top_Image}>
          <a href="#"><img
              src="/Images/youtube.png"
              className={styles.Image}
            /></a>
            <a href="#"><img
              src="/Images/chat.png"
              className={styles.Image}
            />
</a>
<a href="#"><img
              src="/Images/notification.png"
              className={styles.Image}
            /></a>

<a href="#"><img
              src="/Images/user.png"
              className={styles.Image}
            /></a>
          </div>
        </div>
        <div className={styles.container} >
          <div className={styles.sidebar}>
            <ul className={styles.sidebar_item}>
              <li>
                <a href="#" ><span className={styles.item}> <img src="/Images/house.png" className={styles.sid_img} /></span><span className="item">Home</span></a>
              </li>
              <li>
                <a href="#" ><span className={styles.item}> <img src="/Images/notis.svg" className={styles.sid_img} /></span><span className="item">Notifications</span></a>
              </li>
              <li>
                <a href="#" ><span className={styles.item}> <img src="/Images/email.png" className={styles.sid_img} /></span><span className="item">Messages</span></a>
              </li>
              <li>
                <a href="#" ><span className={styles.item}> <img src="/Images/bookmark-regular.svg" className={styles.sid_img} /></span><span className="item">Bookmarks</span></a>
              </li>
              <li>
                <a href="#" ><span className={styles.item}> <img src="/Images/files.png" className={styles.sid_img} /></span><span className="item">Lists</span></a>
              </li>
              <li>
                <a href="#" ><span className={styles.item}> <img src="/Images/user-plus-solid.svg" className={styles.sid_img} /></span><span className="item">Subscriptions</span></a>
              </li>
              <li>
                <a href="#" ><span className={styles.item}> <img src="/Images/credit-card.png" className={styles.sid_img} /></span><span className="item">Add card</span></a>
              </li>
              <li>
                <a href="#" ><span className={styles.item}> <img src="/Images/users.png" className={styles.sid_img} /></span><span className="item">My profile</span></a>
              </li>
              <li>
                <a href="#" ><span className={styles.item}> <img src="/Images/plus.png" className={styles.sid_img} /></span><span className="item">More</span></a>
              </li>
            </ul>
          </div>
          {/* <div className={styles.main_box}>
          <img src="/Images/plus.png" className={styles.sid_img} />
          </div>
          <div className={styles.sugesstion}>
          <img src="/Images/plus.png" className={styles.sid_img} />
          </div> */}
        </div>
      </div>
      {/* <div className={styles.container} >
        <div className={styles.side_container}>
          <ul class={styles.items}>
            <li><a href="#" >
              <span className={styles.item}> <img
                src="/Images/3643769-building-home-house-main-menu-start_113416.svg"
                className={styles.Image}
              /></span>
              <span className="item">Home</span>
            </a><hr></hr></li>
            <li><a href="#" >
              <span className={styles.item}> <img
                src="/Images/alarm_alert_attention_bell_clock_notification_ring_icon_123203.svg"
                className={styles.Image}
              /></span>
              <span className="item">Notifications</span>
            </a><hr></hr></li>
            <li><a href="#" >
              <span className={styles.item}><img
                src="/Images/envelope-open-text-solid.svg"
                className={styles.Image}
              /></span>
              <span className="item">Messages</span>
            </a><hr></hr></li>

            <li><a href="#" >
              <span className={styles.item}><img
                src="/Images/bookmark-solid.svg"
                className={styles.Image}
              /></span>
              <span className="item">Bookmarks</span>
            </a><hr></hr></li>
            <li><a href="#" >
              <span className={styles.item}><img
                src="/Images/list-solid.svg"
                className={styles.Image}
              /></span>
              <span className="item">Lists</span>
            </a><hr></hr></li>
            <li><a href="#" >
              <span className={styles.item}><img
                src="/Images/user-plus-solid.svg"
                className={styles.Image}
              /></span>
              <span className="item">Subscriptions</span>
            </a><hr></hr></li>
            <li><a href="#" >
              <span className={styles.item}><img
                src="/Images/credit-card-regular.svg"
                className={styles.Image}
              /></span>
              <span className="item">Add card</span>
            </a><hr></hr></li>
            <li><a href="#" >
              <span className={styles.item}><img
                src="/Images/user-circle-regular.svg"
                className={styles.Image}
              /></span>
              <span className="item">My profile</span>
            </a><hr></hr></li>
            <li><a href="#" >
              <span className={styles.item}><img
                src="/Images/comment-dots-regular.svg"
                className={styles.Image}
              /></span>
              <span className="item">More</span>
            </a></li>
          </ul>
        </div>
        <div><img
          src="/Images/me.jpg"
          height={498}
          width={900}
        /></div>
        <div> sugesstion post</div> */}
      {/* </div> */}
    </>
  )
}
