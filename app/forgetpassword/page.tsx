"use client"
import axios from "axios"
import React, { ChangeEvent, use, useState } from "react"
import styles from './page.module.css'
import { message } from 'antd';
import router from "next/router";
import { Alert, Form, Input, Typography } from 'antd';
import { time } from "console";
import {
    RadiusBottomleftOutlined,
    RadiusBottomrightOutlined,
    RadiusUpleftOutlined,
    RadiusUprightOutlined,
} from '@ant-design/icons';
import { Button, Divider, notification, Space } from 'antd';
import type { NotificationArgsProps } from 'antd';


export default function forgetpassword() {
    const [getMember, setGetmEMBER] = useState([])
    const [ get, setGet] = useState('')
    const [get1, setGet1] = useState('')
    const [pas, setPass] = useState<string | number>('')
    const [getName, setGetName] = useState();
    const [otherINp, setOtherInp] = useState<boolean>(false)
    const [code1, setCode] = useState('')
    const [messageApi,] = message.useMessage();
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const [buttonColor, setButtonColor] = useState('');
    const [time, setTime] = useState(Number)
    const [api, contextHolder] = notification.useNotification();
    const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGet(e.target.value)
    }


 


    const [form] = Form.useForm();

    const [inp1, setInp1] = useState<string>();
    const [inp2, setInp2] = useState<string>();
    const [inp3, setInp3] = useState<string>();
    const send1 = async (e: ChangeEvent<HTMLInputElement>) => {
        setInp1(e.target.value)
    }

    const send2 = async (e: ChangeEvent<HTMLInputElement>) => {
        setInp2(e.target.value)
    }

    const send3 = async (e: ChangeEvent<HTMLInputElement>) => {
        setInp3(e.target.value)
    }



     let first = String(code1)
const [search,setSearch] = useState<string>()


    const changePass = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(first)
        console.log(e.target.value);
        setSearch(e.target.value);
    }
    const success = () => {
        let url = 'http://localhost:3001/send-code/' + search
        console.log(url)
        
        let isSuccess = false;
        axios.get('http://localhost:3001/Login')
            .then((result) => {
                setGetmEMBER(result.data);
                return;
            })
            .catch(() => {
                console.log('error');
            });

            axios.get(url)
            .then((resCode) => {
                setCode(resCode.data);
            })
            .catch((error) => {
                console.error('Error fetching code:', error);
            });
        

        getMember.forEach(item => {
            if (search === item.email) {
                isSuccess = true;
                console.log(item.name);
            }
            setIsDisabled(true)
        });
        if (isSuccess) {
            messageApi.open({
                type: 'success',
                content: 'თქვენ წარმატებით გაიარეთ!',
            });
            setOtherInp(true);
        } else {
            messageApi.error({
                type: 'error',
                content: 'ინფორმაცია არასწორია!',
            });
        }

        let i = 60;

        let int = setInterval(() => {
            if (i <= 0) {
                setIsDisabled(false);
                clearInterval(int);
            } else {
                if (i !== 6) {
                    setTime(i)
                }
                i--;
            }
        }, 1000);



    };

    if (get == code1){
        console.log(code1);

    }


   


    return (
        <>

            <div className={styles.card}>
                <div className={styles.loginCard}>
                    <h2>ფირალი</h2>
                    <span>შეიყვანე ექაუნთი</span>
                    <div className={styles.loginCrdItem}>
                        <div className={styles.input}>
                            <p>იმეილი</p>
                            <input className={styles.inputS}onChange={changePass}  type="text" />
                        </div>
                        <div className={styles.input}>
                            {otherINp && <input onChange={onchange} className={styles.inputS} type='text'></input>}
                        </div>
                        <div className={styles.container}>
                            <button disabled={isDisabled} onClick={success} className={styles.btn}>გაგზავნე კოდი    {time}</button>
                            {contextHolder}
                            {/* <Button type="primary" onClick={openNotification}>
       დახმარება მჭირდება რაღაც ვერ გავაკეთე
      </Button> */}
                            <div className={styles.continerGroup}>
                                <svg width="501" height="18" viewBox="0 0 501 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.5" y1="8.5" x2="233.5" y2="8.5" stroke="#BFBFBF" stroke-linecap="round" />
                                    <path d="M245.878 14.14C245.271 14.14 244.725 14.0327 244.24 13.818C243.755 13.594 243.372 13.272 243.092 12.852C242.812 12.4227 242.672 11.8953 242.672 11.27C242.672 11.046 242.691 10.8407 242.728 10.654C242.775 10.458 242.821 10.2947 242.868 10.164H244.296C244.249 10.2947 244.212 10.4533 244.184 10.64C244.165 10.8173 244.156 11.0087 244.156 11.214C244.156 11.578 244.226 11.8907 244.366 12.152C244.506 12.4133 244.707 12.614 244.968 12.754C245.229 12.8847 245.533 12.95 245.878 12.95C246.233 12.95 246.531 12.8847 246.774 12.754C247.026 12.614 247.217 12.4133 247.348 12.152C247.488 11.8907 247.558 11.564 247.558 11.172C247.558 10.7147 247.455 10.3413 247.25 10.052C247.054 9.76267 246.821 9.48733 246.55 9.226C246.326 9.002 246.102 8.764 245.878 8.512C245.654 8.26 245.467 7.97067 245.318 7.644C245.169 7.308 245.094 6.91133 245.094 6.454H246.578C246.578 6.846 246.69 7.196 246.914 7.504C247.138 7.80267 247.399 8.10133 247.698 8.4C247.931 8.61467 248.151 8.85267 248.356 9.114C248.571 9.37533 248.748 9.674 248.888 10.01C249.028 10.3367 249.098 10.724 249.098 11.172C249.098 11.76 248.958 12.278 248.678 12.726C248.407 13.174 248.029 13.524 247.544 13.776C247.059 14.0187 246.503 14.14 245.878 14.14ZM254.216 14.14C253.124 14.14 252.284 13.8133 251.696 13.16C251.117 12.4973 250.828 11.5267 250.828 10.248V5.992C250.828 5.35733 250.945 4.84867 251.178 4.466C251.421 4.08333 251.738 3.80333 252.13 3.626C252.531 3.44867 252.97 3.36 253.446 3.36H256.834V4.564H253.642C253.241 4.564 252.919 4.66667 252.676 4.872C252.443 5.068 252.326 5.404 252.326 5.88V6.328C252.326 6.468 252.317 6.65933 252.298 6.902C252.279 7.13533 252.261 7.31733 252.242 7.448H252.312C252.471 7.24267 252.653 7.06067 252.858 6.902C253.063 6.734 253.306 6.60333 253.586 6.51C253.875 6.41667 254.207 6.37 254.58 6.37C255.504 6.37 256.241 6.69667 256.792 7.35C257.352 7.994 257.632 8.95533 257.632 10.234C257.632 11.0927 257.487 11.8113 257.198 12.39C256.918 12.9687 256.521 13.4073 256.008 13.706C255.504 13.9953 254.907 14.14 254.216 14.14ZM254.216 12.95C254.869 12.95 255.345 12.7167 255.644 12.25C255.952 11.774 256.106 11.116 256.106 10.276C256.106 9.436 255.952 8.77333 255.644 8.288C255.336 7.80267 254.879 7.56 254.272 7.56C253.768 7.56 253.367 7.66267 253.068 7.868C252.779 8.07333 252.573 8.36733 252.452 8.75C252.331 9.12333 252.27 9.576 252.27 10.108V10.472C252.27 11.228 252.419 11.83 252.718 12.278C253.017 12.726 253.516 12.95 254.216 12.95Z" fill="#808080" />
                                    <line x1="267.5" y1="8.5" x2="500.5" y2="8.5" stroke="#BFBFBF" stroke-linecap="round" />
                                </svg>

                                <div className={styles.cardGroup}>
                                    <div className={styles.socialCard}>
                                        <p>შეიყვანე ექაუნთი Google-ით</p>
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.48916 14.3775L6.86261 16.7165L4.57258 16.7649C3.88819 15.4955 3.5 14.0432 3.5 12.4998C3.5 11.0074 3.86295 9.60006 4.50631 8.36084H4.5068L6.54557 8.73462L7.43868 10.7612C7.25175 11.3061 7.14987 11.8911 7.14987 12.4998C7.14994 13.1605 7.26961 13.7935 7.48916 14.3775Z" fill="#FBBB00" />
                                            <path d="M21.3431 10.8184C21.4464 11.3628 21.5003 11.925 21.5003 12.4997C21.5003 13.144 21.4326 13.7725 21.3035 14.3788C20.8654 16.4419 19.7206 18.2433 18.1348 19.5182L18.1343 19.5177L15.5663 19.3866L15.2029 17.1178C16.2552 16.5007 17.0776 15.5349 17.5108 14.3788H12.6982V10.8184H17.581H21.3431Z" fill="#518EF8" />
                                            <path d="M18.1335 19.5183L18.134 19.5188C16.5917 20.7585 14.6324 21.5002 12.4996 21.5002C9.07225 21.5002 6.09238 19.5845 4.57227 16.7654L7.48885 14.3779C8.24889 16.4064 10.2056 17.8503 12.4996 17.8503C13.4857 17.8503 14.4094 17.5838 15.2021 17.1185L18.1335 19.5183Z" fill="#28B446" />
                                            <path d="M18.2442 5.57196L15.3286 7.95892C14.5082 7.44613 13.5384 7.14991 12.4995 7.14991C10.1536 7.14991 8.16023 8.66011 7.43826 10.7613L4.50635 8.36096H4.50586C6.00372 5.47307 9.02117 3.5 12.4995 3.5C14.6832 3.5 16.6855 4.27786 18.2442 5.57196Z" fill="#F14336" />
                                        </svg>

                                    </div>
                                    <div className={styles.socialCard}>
                                        <p>შეიყვანე ექაუნთი Facebook-ით</p>
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.5 12.5C22.5 6.97757 18.0224 2.5 12.5 2.5C6.97757 2.5 2.5 6.97757 2.5 12.5C2.5 17.4909 6.15631 21.6281 10.9376 22.3791V15.3913H8.39791V12.5H10.9376V10.2964C10.9376 7.7904 12.4311 6.40522 14.7149 6.40522C15.809 6.40522 16.9537 6.60069 16.9537 6.60069V9.06167H15.6922C14.4505 9.06167 14.0624 9.8323 14.0624 10.624V12.5H16.8355L16.3926 15.3913H14.0624V22.3791C18.8437 21.6295 22.5 17.4923 22.5 12.5Z" fill="#1977F3" />
                                            <path d="M16.3931 15.3912L16.8361 12.4999H14.0629V10.624C14.0629 9.83364 14.4496 9.0616 15.6928 9.0616H16.9542V6.60062C16.9542 6.60062 15.8095 6.40515 14.7154 6.40515C12.4316 6.40515 10.9382 7.78892 10.9382 10.2963V12.4999H8.39844V15.3912H10.9382V22.379C11.4472 22.4592 11.969 22.4999 12.5005 22.4999C13.0321 22.4999 13.5538 22.4578 14.0629 22.379V15.3912H16.3931Z" fill="#FEFEFE" />
                                        </svg>

                                    </div>
                                    <div className={styles.socialCard}>
                                        <p>შეიყვანე ექაუნთი Apple-ით</p>
                                        <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.2426 10.0628C12.2679 12.7868 14.6322 13.6933 14.6584 13.7048C14.6384 13.7687 14.2806 14.9966 13.4128 16.2649C12.6625 17.3615 11.8839 18.4539 10.6573 18.4766C9.45206 18.4988 9.06451 17.7619 7.68657 17.7619C6.30904 17.7619 5.87845 18.454 4.73755 18.4988C3.55357 18.5436 2.65196 17.3131 1.89552 16.2206C0.349775 13.9858 -0.831498 9.9057 0.754653 7.15155C1.54262 5.78383 2.95077 4.91773 4.4792 4.89552C5.64183 4.87334 6.73918 5.6777 7.44994 5.6777C8.16026 5.6777 9.49378 4.71039 10.8957 4.85245C11.4826 4.87688 13.13 5.08952 14.1879 6.63794C14.1026 6.69078 12.2222 7.78549 12.2426 10.0628ZM9.97747 3.37397C10.606 2.6131 11.0291 1.5539 10.9137 0.5C10.0076 0.536416 8.91203 1.10377 8.26214 1.86422C7.67972 2.53763 7.16964 3.61548 7.30727 4.64852C8.31717 4.72665 9.34886 4.13532 9.97747 3.37397Z" fill="black" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {contextHolder}
        </>
    )
}

function useMemo(arg0: () => { name: string; }, arg1: never[]) {
    throw new Error("Function not implemented.");
}
