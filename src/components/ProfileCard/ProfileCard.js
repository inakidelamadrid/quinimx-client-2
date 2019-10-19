//@format
import React from 'react'
import styles from './styles.module.scss'

const ProfileCard = ({ name, jobTitle, image }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={`${styles.card} profile-two`}>
        <div className={`${styles.cardImage} profile-img-two`}>{image}</div>

        <ul className={styles.socialIcons}>
          <li>
            <a href="">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fab fa-dribbble"></i>
            </a>
          </li>
        </ul>
        <div className={styles.details}>
          <h2>
            {name}
            <br />
            <span className="job-title">{jobTitle}</span>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
