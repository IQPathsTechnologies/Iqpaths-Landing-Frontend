import React from 'react'
import styles from "./Third.module.css"

function Third() {
    
  return (
    <section className={styles.third}>
    <div className={styles.mid3}>
        <div className={styles.title_box}>
            <h3 className={styles.title}>
                What benefits are waiting for you?
            </h3>
            <p className={styles.text}>
            At IQpaths, we believe in nurturing talent and supporting growth. Here’s what you can look forward to:
            </p>
        </div>
        <div className={styles.benefits}>
            <div className={styles.row}>

                <div className={styles.box}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M20 11.25V20H28.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
                    <p className={styles.text}>Flexible working hours</p>
                </div>
                <div className={styles.box}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.75 8.75H10C9.30964 8.75 8.75 9.30964 8.75 10V30C8.75 30.6904 9.30964 31.25 10 31.25H13.75C14.4404 31.25 15 30.6904 15 30V10C15 9.30964 14.4404 8.75 13.75 8.75Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M30 8.75H26.25C25.5596 8.75 25 9.30964 25 10V30C25 30.6904 25.5596 31.25 26.25 31.25H30C30.6904 31.25 31.25 30.6904 31.25 30V10C31.25 9.30964 30.6904 8.75 30 8.75Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M31.25 12.5H35C35.3315 12.5 35.6495 12.6317 35.8839 12.8661C36.1183 13.1005 36.25 13.4185 36.25 13.75V26.25C36.25 26.5815 36.1183 26.8995 35.8839 27.1339C35.6495 27.3683 35.3315 27.5 35 27.5H31.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.75 27.5H5C4.66848 27.5 4.35054 27.3683 4.11612 27.1339C3.8817 26.8995 3.75 26.5815 3.75 26.25V13.75C3.75 13.4185 3.8817 13.1005 4.11612 12.8661C4.35054 12.6317 4.66848 12.5 5 12.5H8.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 20H25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M36.25 20H38.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.25 20H3.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
                    <p className={styles.text}> Sport compensation</p>
                </div>
                <div className={styles.box}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.25 17.9219V8.75C6.25 8.41848 6.3817 8.10054 6.61612 7.86612C6.85054 7.6317 7.16848 7.5 7.5 7.5H32.5C32.8315 7.5 33.1495 7.6317 33.3839 7.86612C33.6183 8.10054 33.75 8.41848 33.75 8.75V17.9219C33.75 31.0469 22.6094 35.3906 20.3906 36.125C20.1386 36.2183 19.8614 36.2183 19.6094 36.125C17.3906 35.3906 6.25 31.0469 6.25 17.9219Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M26.875 16.25L17.7031 25L13.125 20.625" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
                    <p className={styles.text}> Health care Insurance</p>
                </div>
                <div className={styles.box}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.09531 19.0473C7.91064 18.7272 7.66473 18.4466 7.37162 18.2216C7.07851 17.9965 6.74394 17.8314 6.38702 17.7356C6.03009 17.6399 5.6578 17.6154 5.2914 17.6635C4.925 17.7116 4.57166 17.8314 4.25156 18.0161C3.93147 18.2008 3.65088 18.4467 3.42582 18.7398C3.20076 19.0329 3.03563 19.3675 2.93987 19.7244C2.84411 20.0813 2.81959 20.4536 2.86771 20.82C2.91583 21.1864 3.03564 21.5397 3.22031 21.8598L9.00156 31.8755C10.5087 34.4288 12.9629 36.284 15.8305 37.0375C18.6981 37.7911 21.7473 37.3821 24.315 35.8996C26.8827 34.417 28.7614 31.9808 29.5424 29.1205C30.3235 26.2602 29.9438 23.2073 28.4859 20.6255L25.8297 16.0161C25.4338 15.4191 24.8251 14.9956 24.1277 14.8321C23.4303 14.6686 22.6968 14.7773 22.0768 15.1361C21.4568 15.495 20.9971 16.0768 20.7915 16.763C20.5859 17.4492 20.6498 18.1879 20.9703 18.8286" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.7203 22.734L10.7828 12.4527C10.5981 12.1326 10.3522 11.852 10.0591 11.627C9.76601 11.4019 9.43144 11.2368 9.07452 11.141C8.71759 11.0453 8.3453 11.0208 7.9789 11.0689C7.6125 11.117 7.25916 11.2368 6.93906 11.4215C6.61897 11.6062 6.33838 11.8521 6.11332 12.1452C5.88826 12.4383 5.72313 12.7729 5.62737 13.1298C5.53161 13.4867 5.50709 13.859 5.55521 14.2254C5.60333 14.5918 5.72314 14.9451 5.90781 15.2652L11.8453 25.5465" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M23.4703 23.1715L16.9078 11.7965C16.5349 11.15 15.9204 10.6782 15.1995 10.4848C14.4787 10.2914 13.7105 10.3923 13.0641 10.7652C12.4176 11.1382 11.9458 11.7527 11.7524 12.4735C11.559 13.1944 11.6599 13.9625 12.0328 14.609" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.4703 10.5777L13.8609 7.78087C13.488 7.1344 12.8735 6.66257 12.1526 6.46917C11.4318 6.27578 10.6637 6.37666 10.0172 6.74962C9.37073 7.12258 8.8989 7.73707 8.7055 8.45791C8.51211 9.17875 8.61298 9.9469 8.98594 10.5934L9.36094 11.234" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M29.3766 29.9215C31.2836 28.1946 32.5421 25.8671 32.9429 23.3259C33.3437 20.7846 32.8626 18.1827 31.5797 15.9527L28.9234 11.359C28.7388 11.0389 28.4929 10.7583 28.1997 10.5332C27.9066 10.3082 27.5721 10.1431 27.2151 10.0473C26.8582 9.95153 26.4859 9.92701 26.1195 9.97513C25.7531 10.0232 25.3998 10.1431 25.0797 10.3277C24.7596 10.5124 24.479 10.7583 24.2539 11.0514C24.0289 11.3445 23.8638 11.6791 23.768 12.036C23.6722 12.393 23.6477 12.7652 23.6958 13.1316C23.744 13.4981 23.8638 13.8514 24.0484 14.1715" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M24.4078 14.7965L19.9859 7.14024C19.613 6.49378 18.9985 6.02195 18.2776 5.82855C17.5568 5.63515 16.7887 5.73603 16.1422 6.10899C15.4957 6.48195 15.0239 7.09644 14.8305 7.81729C14.6371 8.53813 14.738 9.30628 15.1109 9.95274" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M27.625 1.76562L26.9844 4.17188" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M32.3594 3.96875L30.9219 6.01563" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M36.0313 7.64062L33.9844 9.07812" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
                    <p className={styles.text}> Marriage bonus</p>
                </div>
                <div className={styles.box}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.92512 32.4842L14.3314 9.34356C14.4033 9.14554 14.5242 8.96893 14.6827 8.83012C14.8412 8.69132 15.0322 8.59483 15.238 8.54962C15.4437 8.50442 15.6576 8.51195 15.8597 8.57154C16.0618 8.63112 16.2455 8.74082 16.3939 8.89043L31.1126 23.6092C31.2622 23.7575 31.3719 23.9413 31.4315 24.1434C31.4911 24.3454 31.4986 24.5593 31.4534 24.7651C31.4082 24.9709 31.3117 25.1619 31.1729 25.3204C31.0341 25.4789 30.8575 25.5997 30.6595 25.6717L7.51887 34.0779C7.29624 34.163 7.05373 34.1819 6.82064 34.1321C6.58754 34.0824 6.37382 33.9663 6.20529 33.7978C6.03676 33.6292 5.92062 33.4155 5.8709 33.1824C5.82119 32.9493 5.84002 32.7068 5.92512 32.4842V32.4842Z"
                            stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M26.25 11.25C26.25 11.25 26.25 7.5 30 7.5C33.75 7.5 33.75 3.75 33.75 3.75"
                            stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16 31L9 24" stroke="black" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M22.5 2.5V6.25" stroke="black" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M33.75 17.5L36.25 20" stroke="black" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M33.75 12.5L37.5 11.25" stroke="black" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M12 15.75L24.25 28" stroke="black" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>

                    <p className={styles.text}> Fun team events</p>
                </div>

            </div>
            <div className={styles.row}>

                <div className={styles.box}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7031 28.8438C12.9219 34.1406 5.85938 34.1406 5.85938 34.1406C5.85938 34.1406 5.85938 27.0781 11.1563 25.2969" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M30.6094 16.4689L20 27.0783L12.9219 20.0002L23.5313 9.39081C27.5469 5.37518 31.5625 5.42206 33.2813 5.67206C33.5465 5.70744 33.7927 5.82912 33.9819 6.01832C34.1711 6.20751 34.2927 6.45372 34.3281 6.71893C34.5781 8.43768 34.625 12.4533 30.6094 16.4689Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M28.8438 18.2344V28.3281C28.8391 28.6578 28.7043 28.9723 28.4687 29.2031L23.4219 34.2656C23.2618 34.4256 23.0612 34.539 22.8417 34.5939C22.6221 34.6488 22.3918 34.6431 22.1753 34.5773C21.9587 34.5115 21.7641 34.3882 21.6121 34.2205C21.4602 34.0528 21.3566 33.847 21.3125 33.625L20 27.0781" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.764 11.1562H11.6703C11.3406 11.1609 11.0261 11.2957 10.7953 11.5313L5.7328 16.5781C5.57286 16.7382 5.4594 16.9388 5.40451 17.1583C5.34962 17.3779 5.35537 17.6082 5.42113 17.8247C5.4869 18.0413 5.61021 18.2359 5.77793 18.3879C5.94564 18.5398 6.15146 18.6434 6.37342 18.6875L12.9203 20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
                    <p className={styles.text}> Perfessional grow budget</p>
                </div>
                <div className={styles.box}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.5 6.25H7.5C6.80964 6.25 6.25 6.80964 6.25 7.5V32.5C6.25 33.1904 6.80964 33.75 7.5 33.75H32.5C33.1904 33.75 33.75 33.1904 33.75 32.5V7.5C33.75 6.80964 33.1904 6.25 32.5 6.25Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M27.5 3.75V8.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.5 3.75V8.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.25 13.75H33.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.375 20H18.75L16.25 23.125C16.6614 23.1243 17.0667 23.2251 17.4298 23.4186C17.7929 23.6121 18.1027 23.8922 18.3316 24.234C18.5605 24.5759 18.7015 24.969 18.7421 25.3784C18.7827 25.7879 18.7216 26.201 18.5642 26.5811C18.4069 26.9613 18.1581 27.2967 17.84 27.5577C17.522 27.8187 17.1444 27.9971 16.7408 28.0772C16.3373 28.1573 15.9202 28.1365 15.5265 28.0167C15.1329 27.897 14.775 27.6819 14.4844 27.3906" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.5 21.875L25 20V28.125" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
                    <p className={styles.text}> 30 days paid vacation</p>
                </div>
                <div className={styles.box}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.25 10V30C6.25 30.663 6.51339 31.2989 6.98223 31.7678C7.45107 32.2366 8.08696 32.5 8.75 32.5H33.75C34.0815 32.5 34.3995 32.3683 34.6339 32.1339C34.8683 31.8995 35 31.5815 35 31.25V13.75C35 13.4185 34.8683 13.1005 34.6339 12.8661C34.3995 12.6317 34.0815 12.5 33.75 12.5H8.75C8.08696 12.5 7.45107 12.2366 6.98223 11.7678C6.51339 11.2989 6.25 10.663 6.25 10ZM6.25 10C6.25 9.33696 6.51339 8.70107 6.98223 8.23223C7.45107 7.76339 8.08696 7.5 8.75 7.5H30" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M28.125 24.375C29.1605 24.375 30 23.5355 30 22.5C30 21.4645 29.1605 20.625 28.125 20.625C27.0895 20.625 26.25 21.4645 26.25 22.5C26.25 23.5355 27.0895 24.375 28.125 24.375Z" fill="black"/>
                </svg>
                
                    <p className={styles.text}> Competitive salary</p>
                </div>
                <div className={styles.box}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.625 31.25C13.7316 31.25 16.25 28.7316 16.25 25.625C16.25 22.5184 13.7316 20 10.625 20C7.5184 20 5 22.5184 5 25.625C5 28.7316 7.5184 31.25 10.625 31.25Z"
                            stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M29.375 31.25C32.4816 31.25 35 28.7316 35 25.625C35 22.5184 32.4816 20 29.375 20C26.2684 20 23.75 22.5184 23.75 25.625C23.75 28.7316 26.2684 31.25 29.375 31.25Z"
                            stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16.25 25H23.75" stroke="black" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M5.00003 25.625V11.25C4.99797 10.757 5.09355 10.2684 5.28127 9.81253C5.469 9.35662 5.74514 8.94241 6.09377 8.59377C6.44241 8.24514 6.85662 7.969 7.31253 7.78127C7.76843 7.59355 8.257 7.49797 8.75003 7.50003"
                            stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M31.25 7.50003C31.743 7.49797 32.2316 7.59355 32.6875 7.78127C33.1434 7.969 33.5576 8.24514 33.9063 8.59377C34.2549 8.94241 34.531 9.35662 34.7188 9.81253C34.9065 10.2684 35.0021 10.757 35 11.25V25.625"
                            stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <p className={styles.text}> Compensation for eyeglasses</p>
                </div>
                <div className={styles.box}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.25 15L20 5L38.75 15L20 25L1.25 15Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M29.375 37.5V20L20 15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M34.375 17.3281V25.8594C34.3739 26.1249 34.2861 26.3827 34.125 26.5937C33.0781 28 28.6406 33.125 20 33.125C11.3594 33.125 6.92187 28 5.875 26.5937C5.7139 26.3827 5.62612 26.1249 5.625 25.8594V17.3281" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
                    <p className={styles.text}> Allowance for first-graders
                    </p>
                </div>

            </div>

        </div>

    </div>
</section>
  )
}

export default Third 
