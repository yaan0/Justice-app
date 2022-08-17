import Avatar from '@mui/material/Avatar';

import './UserCard.css'

const UserCard = () => (
    <div className='userCard-container'>
    <div className="userCard-wrapper">
      <div className="userCard-layots">
        <div className='userCard-item'>
          <img className='item-img' src="/images/Stroke.svg" alt="Stroke" />
          <img className='item-img-add' src="/images/Addphoto.svg" alt="Addphoto" />
          <Avatar
            alt="PersonalField"
            src="/images/PersonalField.svg"
            sx={{ width: 27, height: 27 }} />
        </div>
        <h4 className="userCard-title__item">Алексей Иванов</h4>
       </div>
      </div>

      <div className="userCard-wrapper">
        <div className="userCard-layots">
          <div className='userCard-item'>
            <img className='item-img' src="/images/Stroke.svg" alt="Stroke" />
            <img className='item-img-detele' src="/images/DeletePhoto.svg" alt="DeletePhoto" />
            <Avatar
              alt="PersonalField"
              src="/images/Ellipse.svg"
              sx={{ width: 84, height: 84 }} />
          </div>
          <h4 className="userCard-title__item">Алексей Иванов</h4>
        </div>
      </div>

    </div>
  )


export default UserCard;
