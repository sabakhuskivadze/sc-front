"use client"
import { useState } from 'react';
import styles from './page.module.css'

export default function Dashboard() {
    const [show, setShow] = useState(false)
    const currentDate = new Date();
    const month = currentDate.toLocaleString('default', { month: 'long',day:'numeric', year:'numeric' });
    return(
        <>
        {/* <head</header>
        <div className={styles.axaliDivi}>
            
        </div> */}
        
        <div className={styles.fullPage}>
        <div className={styles.sider}>
            <div className={styles.siderName}>
                <span>FIRALI</span>
            </div>
            <div className={styles.siderBody}>
                <div className={styles.unitContainer}>
                    <div className={styles.siderUnitHome}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 20.5V16C9.5 14.619 10.619 13.5 12 13.5V13.5C13.381 13.5 14.5 14.619 14.5 16V20.5H20V11.914C20 11.384 19.789 10.875 19.414 10.5L12.707 3.79301C12.316 3.40201 11.683 3.40201 11.293 3.79301L4.586 10.5C4.211 10.875 4 11.384 4 11.914V20.5H9.5Z" stroke="#FC6A00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>საწყისი გვერდი</span>
                    </div>
                    <div className={styles.siderUnit}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21L8 17.001V17H5C3.895 17 3 16.105 3 15V5C3 3.895 3.895 3 5 3H19C20.105 3 21 3.895 21 5V15C21 16.105 20.105 17 19 17H16L12 20.999" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16 12H8" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 8H16" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>შეტყობინებები</span>
                    </div>
                        <div className={styles.siderUnit}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 13H17" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7 17H17" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.77905 5.49C5.77605 5.49 5.77405 5.492 5.77405 5.495C5.77405 5.498 5.77605 5.5 5.77905 5.5C5.78205 5.5 5.78405 5.498 5.78405 5.495C5.78405 5.492 5.78205 5.49 5.77905 5.49" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.32202 5.49C8.31902 5.49 8.31702 5.492 8.31702 5.495C8.31702 5.498 8.32002 5.5 8.32202 5.5C8.32502 5.5 8.32702 5.498 8.32702 5.495C8.32702 5.492 8.32502 5.49 8.32202 5.49" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.861 5.49C10.858 5.49 10.856 5.492 10.856 5.495C10.856 5.498 10.858 5.5 10.861 5.5C10.864 5.5 10.866 5.498 10.866 5.495C10.866 5.492 10.864 5.49 10.861 5.49" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3 8H20.954" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3H5Z" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>ვებ გვერდი</span>
                    </div>
                    <div className={styles.siderUnit}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C9.953 18.147 6.86 17.82 4.444 19.019C3.779 19.348 3 18.899 3 18.157V6.844C3 6.237 3.275 5.655 3.756 5.285C6.245 3.368 9.753 3.596 12 5.969C14.247 3.596 17.755 3.368 20.244 5.286C20.725 5.656 21 6.238 21 6.844V18.156C21 18.898 20.221 19.348 19.556 19.018C17.14 17.82 14.047 18.147 12 20V20Z" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 20V5.97" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>ჟურნალი</span>
                    </div>
                    <div className={styles.siderUnit}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9715 10.2L16.5857 4.58574C17.3668 3.8047 18.6331 3.8047 19.4142 4.58574V4.58574C19.7892 4.96081 19.9999 5.46952 19.9999 5.99996C19.9999 6.53039 19.7892 7.0391 19.4142 7.41417L13.8 13.0285C13.4175 13.411 12.9212 13.6591 12.3857 13.7356L10.5708 13.9948C10.415 14.0171 10.2579 13.9647 10.1466 13.8534C10.0353 13.7421 9.9829 13.585 10.0052 13.4292L10.2644 11.6143C10.3409 11.0788 10.589 10.5825 10.9715 10.2V10.2Z" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.7088 9.11967L14.8804 6.29124" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13 3.05865C9.1853 2.62152 5.51146 4.64518 3.84221 8.10305C2.17296 11.5609 2.87358 15.6963 5.58865 18.4114C8.30372 21.1264 12.4391 21.8271 15.897 20.1578C19.3548 18.4886 21.3785 14.8147 20.9414 11" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                        <span>ნიშანი</span>
                    </div>
                    <div className={styles.siderUnit}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5.99751C16.1438 5.99751 19.5031 9.35677 19.5031 13.5006C19.5031 17.6445 16.1438 21.0038 12 21.0038C7.85609 21.0038 4.49683 17.6445 4.49683 13.5006C4.49683 9.35677 7.85609 5.99751 12 5.99751" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 8.99875V13.0004" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.99915 2.99626H14.0008" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.0033 6.99792L19.0029 5.99751" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                        <span>განვლილი თემატიკა</span>
                    </div>
                    <div className={styles.siderUnit}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 11V4.00743C12 3.72016 12.1227 3.44658 12.3373 3.25558C12.5519 3.06458 12.8378 2.97435 13.1232 3.00762C17.2371 3.52263 20.4773 6.76291 20.9924 10.8768C21.0256 11.1621 20.9354 11.4481 20.7444 11.6627C20.5534 11.8772 20.2798 12 19.9925 12H13C12.4477 12 12 11.5523 12 11Z" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.99995 4.76019C4.55533 6.31545 2.55218 9.95911 3.0847 13.7009C3.61721 17.4426 6.55736 20.3827 10.2991 20.9152C14.0408 21.4478 17.6845 19.4446 19.2398 16" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                        <span>შედეგები</span>
                    </div>
                    <div className={styles.siderUnit}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.70304 4.09499L3.52904 7.52499C2.23104 8.24599 2.23104 10.112 3.52904 10.833L9.70304 14.263C11.131 15.056 12.868 15.056 14.297 14.263L20.471 10.833C21.769 10.112 21.769 8.24599 20.471 7.52499L14.297 4.09499C12.868 3.30199 11.132 3.30199 9.70304 4.09499Z" stroke="#BFBFBF" stroke-width="1.419" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.99109 12.2V16.124C5.99109 17.073 6.46609 17.958 7.25509 18.483L8.86209 19.552C10.7631 20.816 13.2371 20.816 15.1371 19.552L16.7441 18.483C17.5341 17.958 18.0081 17.072 18.0081 16.124V12.2" stroke="#BFBFBF" stroke-width="1.4167" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                        <span>განათლება</span>
                    </div>
                    <div className={styles.siderUnit}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 18L18.1642 20.8694C18.3107 21.0023 18.5218 21.0362 18.7027 20.9561C18.8835 20.8759 19 20.6967 19 20.4988V18H20C21.1046 18 22 17.1046 22 16V11C22 9.89543 21.1046 9 20 9H12C10.8954 9 10 9.89543 10 11V16C10 17.1046 10.8954 18 12 18H15Z" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 16.0001L6.83588 18.8694C6.68936 19.0023 6.47827 19.0363 6.29743 18.9561C6.11659 18.876 5.99999 18.6968 6 18.499V16H5C3.34315 16 2 14.6569 2 13V6C2 4.34315 3.34315 3 5 3H15C16.6569 3 18 4.34315 18 6V9" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                        <span>ჯომუნიკაცია</span>
                    </div>
                    
                </div>
            </div>
        </div>


        <div className={styles.mainContent}>
            <div className={styles.welcome}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.33333H8" stroke="#898989" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.99996 2V4" stroke="#898989" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11 2V4" stroke="#898989" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 14H4C2.89543 14 2 13.1046 2 12V5C2 3.89543 2.89543 3 4 3H12C13.1046 3 14 3.89543 14 5V7.33333" stroke="#898989" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5 10H6" stroke="#898989" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.04196 10.2191L10.7086 8.8858C11.0738 8.59365 11.5928 8.59365 11.958 8.8858L13.6246 10.2191C13.8619 10.4088 14 10.6962 14 11V13.3333C14 13.7015 13.7015 14 13.3333 14H9.33329C8.9651 14 8.66663 13.7015 8.66663 13.3333V11C8.66663 10.6962 8.80473 10.4088 9.04196 10.2191V10.2191Z" stroke="#898989" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>{month}</p>
                

            </div>

        </div>
        </div>
        </>
    )
}