import React from 'react'
import HiveNav from '../../../components/HiveComponents/HiveNavBar/HiveNav.component';
import { Link } from 'react-router-dom';

import './EditProfile.screen.styles.scss' 


function EditProfile() {
  return (
    <>
    <HiveNav />
            <form method="post" enctype="multipart/form-data">
        <div className="sttngs">
        <Link to='/hive/user-profile'>
            <ion-icon name="arrow-back-outline"></ion-icon>
        </Link>
            <h2>SETTINGS</h2>
            <div className="tabordion">
                <section id="section1">
                    <input className="t" type="radio" name="sections" id="option1" checked />
                    <label for="option1" className="trr"> Account</label>
                    <article>
                        <div className="frm">
                            <div id='profile-upload'>
                                {/* Profile Image */}
                                <div className="hvr-profile-img">
                                    <input type="file" name="ProfileImage" id='getval ProfileImage imag' className="upload" accept="image/*" />
                                    <div className="icons">
                                    <div className="camera4"><span></span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="tr">
                                {/* Full Name */}
                                <label className="label" for="input">Full Name</label>
                                <input className="input" type="text" id="input FullName" name="FullName" />

                                {/* Username */}
                                <label className="label" for="input"> User Name </label>
                                <input className="input texte" type="text" id="input UserName" name="UserName" />

                                {/* Email */}
                                <label className="label" for="input">Email</label>
                                <input className="input" type="text" id="input Email" name="Email" disabled />
                            </div>

                            <br />

                            {/* Country*/}
                            <label className="label" for="select">Country</label>
                            <div className="select-wrap e">
                                <select className="select" id="select" asp-for="Country">
                                    <option value="">Select Country</option>
                                </select>
                            </div>

                            {/* phone number */}
                            <label className="label" for="input">Phone Number</label>
                            <input className="input" type="text" id="input PhoneNumber" name="PhoneNumber"/>

                            {/* Bio */}
                            <label className="label" for="textarea">SHORT BIOGRAPHY<p id="count"></p></label>
                            <textarea className="textarea e" rows="7" cols="25" id="bio" maxlength="500" asp-for="Bio"></textarea>

                            {/* Social Media */}
                            <div className="social">
                                <label className="label" for="input">FACEBOOK URL</label>
                                <input className="input e" type="text" id="input" />
                            </div>

                            <div className="social">
                                <label className="label" for="input">LinkedIn URL</label>
                                <input className="input e" type="text" id="input" />
                            </div>

                            <div className="social">
                                <label className="label" for="input">Instagram URL</label>
                                <input className="input e" type="text" id="input"/>
                            </div>

                            <button type="submit" className="edit-btn">Update Profile</button>

                        </div>
                    </article>
                </section>

                <section id="section2">
                    <input className="t" type="radio" name="sections" id="option2" />
                    <label for="option2" className="trr"> Email</label>
                    <article>
                        <div className="tr wwq">
                            <label className="label" for="input">Current email</label>
                            <input className="input e" type="text" id="input" />

                            <label className="label" for="input">New email</label>
                            <input className="input e" type="email" id="input" />

                            <label className="label" for="input">confirm password</label>
                            <input className="input e" type="password" id="input" />
                        </div>
                        <button>Update Email</button>
                    </article>
                </section>

                <section id="section3">
                    <input className="t" type="radio" name="sections" id="option3" />
                    <label for="option3" className="trr">Password</label>
                    <article>
                        <div className="tr wwq">
                            {/* Current Password */}
                            <label className="label" for="currentPassword">Current Password</label>
                            <input className="input e" type="password" id="currentPassword" name="CurrentPassword" />
                            
                            {/* New Password */}
                            <label className="label" for="newPassword">New Password</label>
                            <input className="input e" type="password" id="newPassword" name="NewPassword" />

                            {/* Confirm new Password */}
                            <label className="label" for="confirmPassword">Repeat Password</label>
                            <input className="input e" type="password" id="confirmPassword" name="ConfirmPassword" />

                        </div>
                        <button type="submit" className="edit-btn">Change Password</button>
                    </article>
                </section>

                <section id="section4">
                    <input className="t" type="radio" name="sections" id="option4" />
                    <label for="option4" className="trr">Verify</label>
                    <article>
                        <p>The green verified badge <span className="ver">&#10026;</span> on ZIki lets people know that an account is authentic.</p>
                    </article>
                </section>
            </div>

            <div asp-validation-summary="All" className="text-danger"></div>


        </div>
    </form>
    </>
  )
}

export default EditProfile
