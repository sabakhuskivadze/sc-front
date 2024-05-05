"use client"
import { useState } from 'react';
import styles from './page.module.css'
import Loggin from '../login/page';
export default function Dashboard() {
    const [show, setShow] = useState(false)
    const currentDate = new Date();
    const month = currentDate.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' });
    return (
        <>
            <div className={styles.fullPage}>


                <div className={styles.sider}>
                    <div className={styles.siderName}>
                        <span>FIRALI</span>
                    </div>
                    <div className={styles.siderBody}>
                        <div className={styles.unitContainer}>
                            <div className={styles.siderUnitHome}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 20.5V16C9.5 14.619 10.619 13.5 12 13.5V13.5C13.381 13.5 14.5 14.619 14.5 16V20.5H20V11.914C20 11.384 19.789 10.875 19.414 10.5L12.707 3.79301C12.316 3.40201 11.683 3.40201 11.293 3.79301L4.586 10.5C4.211 10.875 4 11.384 4 11.914V20.5H9.5Z" stroke="#FC6A00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>საწყისი გვერდი</span>
                            </div>
                            <div className={styles.siderUnit}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 21L8 17.001V17H5C3.895 17 3 16.105 3 15V5C3 3.895 3.895 3 5 3H19C20.105 3 21 3.895 21 5V15C21 16.105 20.105 17 19 17H16L12 20.999" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16 12H8" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8 8H16" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>შეტყობინებები</span>
                            </div>
                            <div className={styles.siderUnit}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 13H17" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7 17H17" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5.77905 5.49C5.77605 5.49 5.77405 5.492 5.77405 5.495C5.77405 5.498 5.77605 5.5 5.77905 5.5C5.78205 5.5 5.78405 5.498 5.78405 5.495C5.78405 5.492 5.78205 5.49 5.77905 5.49" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8.32202 5.49C8.31902 5.49 8.31702 5.492 8.31702 5.495C8.31702 5.498 8.32002 5.5 8.32202 5.5C8.32502 5.5 8.32702 5.498 8.32702 5.495C8.32702 5.492 8.32502 5.49 8.32202 5.49" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10.861 5.49C10.858 5.49 10.856 5.492 10.856 5.495C10.856 5.498 10.858 5.5 10.861 5.5C10.864 5.5 10.866 5.498 10.866 5.495C10.866 5.492 10.864 5.49 10.861 5.49" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3 8H20.954" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3H5Z" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>ვებ გვერდი</span>
                            </div>
                            <div className={styles.siderUnit}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C9.953 18.147 6.86 17.82 4.444 19.019C3.779 19.348 3 18.899 3 18.157V6.844C3 6.237 3.275 5.655 3.756 5.285C6.245 3.368 9.753 3.596 12 5.969C14.247 3.596 17.755 3.368 20.244 5.286C20.725 5.656 21 6.238 21 6.844V18.156C21 18.898 20.221 19.348 19.556 19.018C17.14 17.82 14.047 18.147 12 20V20Z" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12 20V5.97" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>ჟურნალი</span>
                            </div>
                            <div className={styles.siderUnit}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9715 10.2L16.5857 4.58574C17.3668 3.8047 18.6331 3.8047 19.4142 4.58574V4.58574C19.7892 4.96081 19.9999 5.46952 19.9999 5.99996C19.9999 6.53039 19.7892 7.0391 19.4142 7.41417L13.8 13.0285C13.4175 13.411 12.9212 13.6591 12.3857 13.7356L10.5708 13.9948C10.415 14.0171 10.2579 13.9647 10.1466 13.8534C10.0353 13.7421 9.9829 13.585 10.0052 13.4292L10.2644 11.6143C10.3409 11.0788 10.589 10.5825 10.9715 10.2V10.2Z" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M17.7088 9.11967L14.8804 6.29124" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13 3.05865C9.1853 2.62152 5.51146 4.64518 3.84221 8.10305C2.17296 11.5609 2.87358 15.6963 5.58865 18.4114C8.30372 21.1264 12.4391 21.8271 15.897 20.1578C19.3548 18.4886 21.3785 14.8147 20.9414 11" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>ნიშანი</span>
                            </div>
                            <div className={styles.siderUnit}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 5.99751C16.1438 5.99751 19.5031 9.35677 19.5031 13.5006C19.5031 17.6445 16.1438 21.0038 12 21.0038C7.85609 21.0038 4.49683 17.6445 4.49683 13.5006C4.49683 9.35677 7.85609 5.99751 12 5.99751" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12 8.99875V13.0004" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9.99915 2.99626H14.0008" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M20.0033 6.99792L19.0029 5.99751" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>განვლილი თემატიკა</span>
                            </div>
                            <div className={styles.siderUnit}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 11V4.00743C12 3.72016 12.1227 3.44658 12.3373 3.25558C12.5519 3.06458 12.8378 2.97435 13.1232 3.00762C17.2371 3.52263 20.4773 6.76291 20.9924 10.8768C21.0256 11.1621 20.9354 11.4481 20.7444 11.6627C20.5534 11.8772 20.2798 12 19.9925 12H13C12.4477 12 12 11.5523 12 11Z" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7.99995 4.76019C4.55533 6.31545 2.55218 9.95911 3.0847 13.7009C3.61721 17.4426 6.55736 20.3827 10.2991 20.9152C14.0408 21.4478 17.6845 19.4446 19.2398 16" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>შედეგები</span>
                            </div>
                            <div className={styles.siderUnit}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.70304 4.09499L3.52904 7.52499C2.23104 8.24599 2.23104 10.112 3.52904 10.833L9.70304 14.263C11.131 15.056 12.868 15.056 14.297 14.263L20.471 10.833C21.769 10.112 21.769 8.24599 20.471 7.52499L14.297 4.09499C12.868 3.30199 11.132 3.30199 9.70304 4.09499Z" stroke="#BFBFBF" stroke-width="1.419" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5.99109 12.2V16.124C5.99109 17.073 6.46609 17.958 7.25509 18.483L8.86209 19.552C10.7631 20.816 13.2371 20.816 15.1371 19.552L16.7441 18.483C17.5341 17.958 18.0081 17.072 18.0081 16.124V12.2" stroke="#BFBFBF" stroke-width="1.4167" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>განათლება</span>
                            </div>
                            <div className={styles.siderUnit}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 18L18.1642 20.8694C18.3107 21.0023 18.5218 21.0362 18.7027 20.9561C18.8835 20.8759 19 20.6967 19 20.4988V18H20C21.1046 18 22 17.1046 22 16V11C22 9.89543 21.1046 9 20 9H12C10.8954 9 10 9.89543 10 11V16C10 17.1046 10.8954 18 12 18H15Z" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10 16.0001L6.83588 18.8694C6.68936 19.0023 6.47827 19.0363 6.29743 18.9561C6.11659 18.876 5.99999 18.6968 6 18.499V16H5C3.34315 16 2 14.6569 2 13V6C2 4.34315 3.34315 3 5 3H15C16.6569 3 18 4.34315 18 6V9" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>ჯომუნიკაცია</span>
                            </div>

                        </div>
                    </div>
                </div>

                <div className={styles.rightPart}>
                    <div className={styles.mainContent}>
                        <div className={styles.mainHeader}>
                            <div className={styles.welcomeLeftPart}>
                                <div className={styles.welcomeTop}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 7.33333H8" stroke="#898989" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M4.99996 2V4" stroke="#898989" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11 2V4" stroke="#898989" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6 14H4C2.89543 14 2 13.1046 2 12V5C2 3.89543 2.89543 3 4 3H12C13.1046 3 14 3.89543 14 5V7.33333" stroke="#898989" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M5 10H6" stroke="#898989" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.04196 10.2191L10.7086 8.8858C11.0738 8.59365 11.5928 8.59365 11.958 8.8858L13.6246 10.2191C13.8619 10.4088 14 10.6962 14 11V13.3333C14 13.7015 13.7015 14 13.3333 14H9.33329C8.9651 14 8.66663 13.7015 8.66663 13.3333V11C8.66663 10.6962 8.80473 10.4088 9.04196 10.2191V10.2191Z" stroke="#898989" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p>{month}</p>
                                </div>
                                <span className={styles.welcomeName}>მოგესალმებით, <span className={styles.welcomeDif}></span></span>
                            </div>
                            <div className={styles.welcomeInfo}>
                                <div className={styles.rightContainer}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.55691 1.68699C11.1479 -0.215008 16.4109 1.96599 18.3129 6.55699C20.2149 11.148 18.0339 16.411 13.4429 18.313C8.85191 20.215 3.58891 18.034 1.68691 13.443C-0.214091 8.85199 1.96591 3.58899 6.55691 1.68699" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9.71802 5.98499V10.636L13.374 12.865" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>ირეკება:<span className={styles.welcomeHour}> 9 საათი</span></span>
                                </div>
                                <div className={styles.welcomeCenter}>
                                    <div className={styles.navCon}>
                                        <div className={styles.single}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.70801 18.344V18.709C9.70801 19.974 10.734 21 12 21V21C13.266 21 14.292 19.974 14.292 18.708V18.343" stroke="#505050" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M13.833 5.751V4.833C13.833 3.821 13.013 3 12 3V3C10.987 3 10.167 3.821 10.167 4.833V5.751" stroke="#505050" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.563 10.188V10.188C6.563 7.68501 8.592 5.65701 11.094 5.65701H12.907C15.41 5.65701 17.438 7.68601 17.438 10.188V10.188V12.985C17.438 13.515 17.649 14.024 18.024 14.399L18.665 15.04C19.04 15.415 19.251 15.924 19.251 16.454V16.454C19.251 17.498 18.405 18.344 17.361 18.344H6.64C5.596 18.344 4.75 17.498 4.75 16.454V16.454C4.75 15.924 4.961 15.415 5.336 15.04L5.977 14.399C6.352 14.024 6.563 13.515 6.563 12.985V10.188Z" stroke="#505050" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <span>შეტყობინება</span>
                                        </div>
                                        <div className={styles.single}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.666 2.00001C9.279 1.99501 6.156 3.82801 4.509 6.78801C2.862 9.74801 2.951 13.369 4.741 16.244L3 21L7.755 19.259C11.119 21.344 15.433 21.08 18.517 18.599C21.601 16.118 22.784 11.961 21.468 8.22801C20.153 4.49401 16.624 1.99801 12.666 2.00001V2.00001Z" stroke="#505050" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <span>ჩათი</span>
                                        </div>
                                        <div className={styles.single}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21V21C7.029 21 3 16.971 3 12V12C3 7.029 7.029 3 12 3V3C16.971 3 21 7.029 21 12V12C21 16.971 16.971 21 12 21Z" stroke="#505050" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M12 13.25V13C12 12.183 12.505 11.74 13.011 11.4C13.505 11.067 14 10.633 14 9.83301C14 8.72801 13.105 7.83301 12 7.83301C10.895 7.83301 10 8.72801 10 9.83301" stroke="#505050" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M11.999 16C11.861 16 11.749 16.112 11.75 16.25C11.75 16.388 11.862 16.5 12 16.5C12.138 16.5 12.25 16.388 12.25 16.25C12.25 16.112 12.138 16 11.999 16" stroke="#505050" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <span>დახმარება</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.user}>
                                    <div className={styles.WelcomeUser}>
                                        <span>შესული როგორც </span>
                                        <span className={styles.welcomeUserName}>გაბრიელ კვერღელიძე</span>
                                    </div>
                                    <div className={styles.check}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 10L12 14L16 10" stroke="#808080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={styles.basicInfo}>
                        <div className={styles.pinned}>
                            <span>დაპინული</span>
                            <span>ხვალინდელი ცხრილი</span>
                        </div>
                        <div className={styles.pinnedContent}>
                            <div className={styles.bodyLeft}>
                                <div className={styles.pinnedTop}>
                                    <div className={styles.pinnedContentSingleTop}>
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="40" height="40" rx="20" fill="#FFE9D9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9715 18.2L24.5857 12.5857C25.3668 11.8047 26.6331 11.8047 27.4142 12.5857V12.5857C27.7892 12.9608 27.9999 13.4695 27.9999 14C27.9999 14.5304 27.7892 15.0391 27.4142 15.4142L21.8 21.0285C21.4175 21.4109 20.9212 21.6591 20.3857 21.7356L18.5708 21.9948C18.415 22.0171 18.2579 21.9647 18.1466 21.8534C18.0353 21.7421 17.9829 21.585 18.0052 21.4292L18.2644 19.6143C18.3409 19.0788 18.589 18.5825 18.9715 18.2V18.2Z" stroke="#FC6A00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M25.7088 17.1197L22.8804 14.2912" stroke="#FC6A00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M21 11.0587C17.1853 10.6215 13.5115 12.6452 11.8422 16.1031C10.173 19.5609 10.8736 23.6963 13.5886 26.4114C16.3037 29.1265 20.4391 29.8271 23.897 28.1578C27.3548 26.4886 29.3785 22.8147 28.9414 19" stroke="#FC6A00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <span>ნიშნები <span className={styles.pinnedRes}>დღეს - 6, 7</span></span>
                                    </div>
                                    <div className={styles.pinnedContentSingleTop}>
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="40" height="40" rx="20" fill="#FFE9D9" />
                                            <path d="M20 29L16 25.001V25H13C11.895 25 11 24.105 11 23V13C11 11.895 11.895 11 13 11H27C28.105 11 29 11.895 29 13V23C29 24.105 28.105 25 27 25H24L20 28.999" stroke="#FC6A00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M24 20H16" stroke="#FC6A00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M16 16H24" stroke="#FC6A00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <span>შეტყობინებები <span className={styles.pinnedRes}>9+</span></span>
                                    </div>
                                </div>
                                <div className={styles.pinnedBottom}>
                                    <div className={styles.pinnedContentSingleBottom}>
                                        <div className={styles.pinnedDifLeft}>
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="40" height="40" rx="20" fill="#FFE9D9" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 29.0037V29.0037C19.3865 27.776 18.1311 27.0012 16.7586 27.0031H12.4962C12.0984 27.0031 11.7169 26.8451 11.4356 26.5638C11.1543 26.2825 10.9962 25.9009 10.9962 25.5031V25.5031V13.4971C10.9962 13.0993 11.1543 12.7177 11.4356 12.4364C11.7169 12.1551 12.0984 11.9971 12.4962 11.9971H15.9987C17.0599 11.9971 18.0776 12.4186 18.828 13.169C19.5784 13.9194 20 14.9371 20 15.9983V15.9983V29.0037Z" stroke="#FC6A00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 29.0036C20.6135 27.7759 21.8689 27.001 23.2413 27.003H27.5073C28.3344 27.001 29.0037 26.33 29.0037 25.503V13.497C29.0037 13.0991 28.8457 12.7176 28.5644 12.4363C28.2831 12.155 27.9016 11.9969 27.5037 11.9969H24.0013C21.7914 11.9969 20 13.7884 20 15.9982V29.0036Z" stroke="#FC6A00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <div className={styles.pinnedDifLeftTop}>
                                                <span>ნამუშევრები </span>
                                                <span className={styles.welcomeUserName}>საშინაო დავალება</span>
                                            </div>
                                        </div>
                                        <div className={styles.pinnedDifBot}>
                                            <span>
                                                მათემატიკა - საშინაო დავა...
                                            </span>
                                            <span>
                                                ქართული - საშინაო დავა...
                                            </span>
                                            <p className={styles.more}>ნახე მეტი</p>
                                        </div>
                                    </div>
                                    <div className={styles.pinnedLeft}>
                                        <div className={styles.pinnedLeftTop}>
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="40" height="40" rx="20" fill="#FFE9D9" />
                                                <path d="M19 20H29" stroke="#FC6A00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M14.414 18.586C15.195 19.367 15.195 20.633 14.414 21.414C13.633 22.195 12.367 22.195 11.586 21.414C10.805 20.633 10.805 19.367 11.586 18.586C12.367 17.805 13.633 17.805 14.414 18.586" stroke="#FC6A00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M19 13H29" stroke="#FC6A00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M11.02 12.508L12.673 13.996L16 11" stroke="#FC6A00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M19 27H29" stroke="#FC6A00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M14.414 25.586C15.195 26.367 15.195 27.633 14.414 28.414C13.633 29.195 12.367 29.195 11.586 28.414C10.805 27.633 10.805 26.367 11.586 25.586C12.367 24.805 13.633 24.805 14.414 25.586" stroke="#FC6A00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <span>დასწრება</span>
                                        </div>
                                        <div className={styles.attendanceContainer}>
                                            <div className={styles.attendance}>
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12.6251" cy="12" r="9.00375" fill="#90EA3B" stroke="#90EA3B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M9.06763 12.3391L11.2355 14.507L11.2215 14.493L16.1126 9.602" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <span>ორშ</span>
                                            </div>
                                            <div className={styles.attendance}>
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12.8751" cy="12" r="9.00375" fill="#FF7072" stroke="#FF7072" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M15.875 9L9.875 15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M9.875 9L15.875 15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <span>სამ</span>
                                            </div>
                                            <div className={styles.attendance}>
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12.6251" cy="12" r="9.00375" fill="#90EA3B" stroke="#90EA3B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M9.06763 12.3391L11.2355 14.507L11.2215 14.493L16.1126 9.602" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <span>ოთხ</span>
                                            </div>
                                            <div className={styles.attendance}>
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12.6251" cy="12" r="9.00375" fill="#90EA3B" stroke="#90EA3B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M9.06763 12.3391L11.2355 14.507L11.2215 14.493L16.1126 9.602" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <span>ხუთ</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.bodyRigth}>
                                <div className={styles.topTable}>
                                    <thead className={styles.upperTable}>
                                        <th className={styles.tableTopStartUnit}>
                                            <div className={styles.tableNumeric}>
                                                <span>1</span>
                                            </div>
                                            <div className={styles.unitHour}>
                                                <span className={styles.test}>9:00 - 9:45</span>
                                            </div>
                                        </th>
                                        <th className={styles.tableBodyUnit}>
                                            <div className={styles.tableNumeric}>
                                                <span>2</span>
                                            </div>
                                            <div className={styles.unitHour}>
                                                <span className={styles.test}>9:55 - 10:40</span>
                                            </div>
                                        </th>
                                        <th className={styles.tableBodyUnit}>
                                            <div className={styles.tableNumeric}>
                                                <span>3</span>
                                            </div>
                                            <div className={styles.unitHour}>
                                                <span className={styles.test}>10:45 - 11:30</span>
                                            </div>
                                        </th>
                                        <th className={styles.tableBodyUnit}>
                                            <div className={styles.tableNumeric}>
                                                <span>4</span>
                                            </div>
                                            <div className={styles.unitHour}>
                                                <span className={styles.test}>11:35 - 12:20</span>
                                            </div>
                                        </th>
                                        <th className={styles.tableBodyUnit}>
                                            <div className={styles.tableNumerics}>
                                                <span className={styles.difNum}>5</span>
                                            </div>
                                            <div className={styles.unitHour}>
                                                <span className={styles.tests}>12:25 - 13:10</span>
                                            </div>
                                        </th>
                                        <th className={styles.tableBodyUnit}>
                                            <div className={styles.tableNumeric}>
                                                <span>6</span>
                                            </div>
                                            <div className={styles.unitHour}>
                                                <span className={styles.test}>13:15 - 14:00</span>
                                            </div>
                                        </th>
                                        <th className={styles.tableTopLastUnit}>
                                            <div className={styles.tableNumeric}>
                                                <span>7</span>
                                            </div>
                                            <div className={styles.unitHour}>
                                                <span className={styles.test}>14:05 - 15:40</span>
                                            </div>
                                        </th>
                                    </thead>
                                    <tbody className={styles.tableBottomBody}>
                                        <td className={styles.tableBottomStartUnit}>
                                            <div className={styles.tableNumeric}>
                                                <span>8</span>
                                            </div>
                                            <div className={styles.unitHour}>
                                                <span className={styles.test}>14:05 - 15:40</span>
                                            </div>
                                        </td>
                                        <td className={styles.tableBodyUnit}>
                                            <div className={styles.tableNumeric}>
                                                <span>9</span>
                                            </div>
                                            <div className={styles.unitHour}>
                                                <span className={styles.test}>13:15 - 14:00</span>
                                            </div>
                                        </td>
                                        <td className={styles.tableBodyUnit}>
                                            <div className={styles.tableNumeric}>
                                                <span>10</span>
                                            </div>
                                            <div className={styles.unitHour}>
                                                <span className={styles.test}>13:15 - 14:00</span>
                                            </div>
                                        </td>
                                        <td className={styles.tableBodyUnit}>
                                            <div className={styles.tableNumeric}>
                                                <span>11</span>
                                            </div>
                                            <div className={styles.unitHour}>
                                                <span className={styles.test}>13:15 - 14:00</span>
                                            </div>
                                        </td>
                                        <td className={styles.tableBodyUnit}>
                                            <div className={styles.tableNumeric}>
                                                <span>12</span>
                                            </div>
                                            <div className={styles.unitHour}>
                                                <span className={styles.test}>13:15 - 14:00</span>
                                            </div>
                                        </td>
                                        <td className={styles.tableBodyUnit}>
                                            <div className={styles.tableNumeric}>
                                                <span>13</span>
                                            </div>
                                            <div className={styles.unitHour}>
                                                <span className={styles.test}>13:15 - 14:00</span>
                                            </div>
                                        </td>
                                        <td className={styles.tableBodyUnit}>
                                            <div className={styles.tableNumeric}>
                                                <span>14</span>
                                            </div>
                                            <div className={styles.unitHour}>
                                                <span className={styles.test}>13:15 - 14:00</span>
                                            </div>
                                        </td>
                                    </tbody>
                                    <input type="text" placeholder='დაამატეთ სასურველი რამ' className={styles.placeHolder} />
                                </div>
                                <div className={styles.lastTable}>

                                </div>
                            </div>

                        </div>

                        <div className={styles.userChoices}>
                            <div className={styles.choiceRow}>
                                <div className={styles.choiceContent}>
                                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1666 33.8333C16.755 30.745 11.6 30.2 7.57329 32.1983C6.46496 32.7467 5.16663 31.9983 5.16663 30.7617V11.9067C5.16663 10.895 5.62496 9.925 6.42663 9.30834C10.575 6.11334 16.4216 6.49334 20.1666 10.4483C23.9116 6.49334 29.7583 6.11334 33.9066 9.31C34.7083 9.92667 35.1666 10.8967 35.1666 11.9067V30.76C35.1666 31.9967 33.8683 32.7467 32.76 32.1967C28.7333 30.2 23.5783 30.745 20.1666 33.8333V33.8333Z" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M20.1666 33.8333V10.45" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>ჟურნალი</span>
                                </div>
                                <div className={styles.choiceContent}>
                                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.5 35.5L13.8333 28.835V28.8333H8.83333C6.99167 28.8333 5.5 27.3417 5.5 25.5V8.83333C5.5 6.99167 6.99167 5.5 8.83333 5.5H32.1667C34.0083 5.5 35.5 6.99167 35.5 8.83333V25.5C35.5 27.3417 34.0083 28.8333 32.1667 28.8333H27.1667L20.5 35.4983" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M27.1666 20.5H13.8333" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.8333 13.8333H27.1666" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>წერილები</span>
                                </div>
                                <div className={styles.choiceContent}>
                                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.5001 3.83333V10.5" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.1668 3.83333V10.5" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M5.8335 15.5H35.8335" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M32.5002 7.16666H9.16683C7.32516 7.16666 5.8335 8.65832 5.8335 10.5V32.1667C5.8335 34.0083 7.32516 35.5 9.16683 35.5H32.5002C34.3418 35.5 35.8335 34.0083 35.8335 32.1667V10.5C35.8335 8.65832 34.3418 7.16666 32.5002 7.16666Z" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.5002 22.1667H29.1669" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.5002 28.8333H20.8336" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M27.5002 35.5V30.5C27.5002 29.58 28.2469 28.8333 29.1669 28.8333H35.8336" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>ცხრილი</span>
                                </div>
                            </div>
                            <div className={styles.choiceRow}>
                                <div className={styles.choiceContent}>
                                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8334 18.8333V7.17905C20.8334 6.70027 21.038 6.24431 21.3956 5.92598C21.7532 5.60764 22.2298 5.45726 22.7053 5.5127C29.5618 6.37106 34.9623 11.7715 35.8206 18.628C35.8761 19.1036 35.7257 19.5802 35.4074 19.9378C35.089 20.2954 34.6331 20.5 34.1543 20.5H22.5C21.5796 20.4999 20.8334 19.7538 20.8334 18.8333Z" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.1667 8.43365C8.42568 11.0258 5.08709 17.0985 5.97462 23.3348C6.86215 29.571 11.7624 34.4712 17.9986 35.3587C24.2348 36.2463 30.3076 32.9077 32.8997 27.1667" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>შედეგები</span>
                                </div>
                                <div className={styles.choiceContent}>
                                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M37.1666 5.49999H3.83325" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M35.5 5.5V25.3033C35.5 27.2533 33.8217 28.8333 31.75 28.8333H9.25C7.17833 28.8333 5.5 27.2533 5.5 25.3033V5.5" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M22.1667 28.8333L25.5001 35.5" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M18.8333 28.8333L15.5 35.5" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M27.1666 13.8333L21.6116 19.3883L18.2783 16.055L13.8333 20.5" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>შეტყობინებების დაფა</span>
                                </div>
                                <div className={styles.choiceContent}>
                                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.4999 37.1667H15.1666C14.2825 37.1669 13.4345 36.8158 12.8093 36.1906C12.1841 35.5655 11.833 34.7175 11.8333 33.8333V17.1667C11.833 16.2825 12.1841 15.4346 12.8093 14.8094C13.4345 14.1842 14.2825 13.8331 15.1666 13.8333H33.4999C34.384 13.8331 35.232 14.1842 35.8572 14.8094C36.4824 15.4346 36.8335 16.2825 36.8333 17.1667V33.8333C36.8332 35.6743 35.3408 37.1666 33.4999 37.1667Z" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M29.4487 13.8333L28.1712 6.58846C28.0179 5.71773 27.5249 4.9436 26.8007 4.43648C26.0765 3.92937 25.1804 3.73084 24.3098 3.8846L6.2549 7.0681C5.38417 7.22139 4.61004 7.71441 4.10293 8.43864C3.59581 9.16286 3.39728 10.0589 3.55104 10.9296L6.44512 27.343C6.5984 28.2138 7.09145 28.988 7.81572 29.4951C8.53999 30.0022 9.43611 30.2007 10.3068 30.0469L11.8331 29.7777" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>წერილები</span>
                                </div>
                            </div>
                            <div className={styles.choiceRow}>
                                <div className={styles.choiceContent}>
                                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 15.5H35.5" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16.3333 22.1667H12.1666" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M18.8333 32.1667H5.5" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.5 28.8333L18.8333 32.1667L15.5 35.5" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M5.5 25.5V13.8333C5.5 11.0717 7.73833 8.83334 10.5 8.83334H30.5C33.2617 8.83334 35.5 11.0717 35.5 13.8333V27.1667C35.5 29.9283 33.2617 32.1667 30.5 32.1667H25.5" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>გადახდა</span>
                                </div>
                                <div className={styles.choiceContent}>
                                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.8333 20.5H35.4999" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.1901 18.1433C12.4917 19.445 12.4917 21.555 11.1901 22.8567C9.88841 24.1583 7.77841 24.1583 6.47674 22.8567C5.17507 21.555 5.17507 19.445 6.47674 18.1433C7.77841 16.8417 9.88841 16.8417 11.1901 18.1433" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M18.8333 8.83333H35.4999" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M5.53345 8.01333L8.28845 10.4933L13.8334 5.5" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M18.8333 32.1667H35.4999" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.1901 29.81C12.4917 31.1117 12.4917 33.2217 11.1901 34.5233C9.88841 35.825 7.77841 35.825 6.47674 34.5233C5.17507 33.2217 5.17507 31.1117 6.47674 29.81C7.77841 28.5083 9.88841 28.5083 11.1901 29.81" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>დასწრება</span>
                                </div>
                                <div className={styles.choiceContent}>
                                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.7618 6.645C22.4134 3.475 31.1851 7.11 34.3551 14.7617C37.5251 22.4133 33.8901 31.185 26.2384 34.355C18.5868 37.525 9.81509 33.89 6.64509 26.2383C3.47676 18.5867 7.11009 9.815 14.7618 6.645" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M20.03 13.8083V21.56L26.1234 25.275" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>ნამუშევრები</span>
                                </div>
                            </div>
                            <div className={styles.choiceRow}>
                                <div className={styles.choiceContent}>
                                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.6667 4.66669L14.1667 7.16669L11.6667 9.66669" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.1667 7.16669H10.8334C8.07195 7.16669 5.83337 9.40526 5.83337 12.1667" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M30 36.3333L27.5 33.8333L30 31.3333" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M27.5 33.8333H30.8333C33.5948 33.8333 35.8333 31.5947 35.8333 28.8333" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <circle cx="11.7452" cy="22.5833" r="3.75" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3333 34.6667V33.8333C18.3333 31.9924 16.8409 30.5 15 30.5H8.33333C6.49238 30.5 5 31.9924 5 33.8333V34.6667C5 35.1269 5.3731 35.5 5.83333 35.5H17.5C17.9602 35.5 18.3333 35.1269 18.3333 34.6667Z" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>ჩანაცვლებები</span>
                                </div>
                                <div className={styles.choiceContent}>
                                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.2843 20.1739L21.2849 20.1733C21.4077 20.0467 21.4045 19.8445 21.278 19.7217C21.1514 19.5989 20.9492 19.6019 20.8264 19.7284C20.7035 19.8549 20.7063 20.0571 20.8328 20.18C20.9592 20.303 21.1613 20.3002 21.2844 20.1739" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M5.5 22.6667C6.03626 22.5842 6.57781 22.5408 7.12037 22.537V22.537C10.1286 22.537 13.0136 23.7321 15.1408 25.8592C17.2679 27.9864 18.463 30.8714 18.4629 33.8796C18.458 34.4222 18.4147 34.9636 18.3333 35.5" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <rect x="5.5" y="12.1667" width="23.3333" height="23.3333" rx="3" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10.5 12.1667V10.5C10.5 7.73858 12.7386 5.5 15.5 5.5H30.5C33.2614 5.5 35.5 7.73858 35.5 10.5V25.5C35.5 28.2614 33.2614 30.5 30.5 30.5H28.8333" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>ფოტოები</span>
                                </div>
                                <div className={styles.choiceContent}>
                                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.1308 14.5716L17.2024 20.5" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M23.1308 21.9821L17.2024 27.9104" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.70635 18.9305C9.76517 18.4094 9.5478 17.8954 9.13298 17.5746C7.80681 16.7703 6.94881 15.3768 6.82764 13.8305C6.82764 10.1471 12.7996 7.16107 20.1665 7.16107C27.5334 7.16107 33.5054 10.1471 33.5054 13.8305C33.3842 15.3768 32.5262 16.7703 31.2001 17.5746C30.7852 17.8954 30.5679 18.4094 30.6267 18.9305L31.5679 28.9778C31.6847 30.2237 31.271 31.4611 30.4284 32.3863C29.5859 33.3115 28.3924 33.8388 27.1411 33.8388H13.192C11.9407 33.8388 10.7473 33.3115 9.90473 32.3863C9.06217 31.4611 8.64848 30.2237 8.76519 28.9778L9.70635 18.9305Z" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>სასადილო</span>
                                </div>
                            </div>
                            <div className={styles.choiceRow}>
                                <div className={styles.halfChoice}>
                                    <svg width="41" height="22" viewBox="0 0 41 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.1667 12.1666H28.8334" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M32.1667 5.76001H8.83333C6.99167 5.76001 5.5 7.25168 5.5 9.09334V32.1667C5.5 34.0083 6.99167 35.5 8.83333 35.5H32.1667C34.0083 35.5 35.5 34.0083 35.5 32.1667V9.09334C35.5 7.25168 34.0083 5.76001 32.1667 5.76001Z" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M25.3151 20.8234L19.2967 26.8417L15.6851 23.23" stroke="#4D4D4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}