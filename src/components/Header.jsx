import { useState } from "react";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import greenLogo from "../assets/icons/mrda-green.png";
import whiteLogo from "../assets/icons/mrda.png";

export default function Header() {
  const [shouldToggle, setShouldToggle] = useState(false);
  const about = <></>;
  const media = <></>;
  const guid = <></>;
  return (
    <header className={`${styles.header} ${shouldToggle && styles.whiten}`}>
      <a
        className={styles.login}
        href="https://gisportal.syadtech.com/greenmakkah/Login"
      >
        <svg
          aria-hidden="true"
          aria-label="user icon"
          focusable="false"
          data-prefix="fas"
          data-icon="user"
          className={styles.login__icon}
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          style={{ height: "15px" }}
        >
          <path
            fill="currentColor"
            d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
          ></path>
        </svg>
        <span className={styles.login__text}>الدخول</span>
      </a>
      <nav className={styles.navigation}>
        <Link to="/" aria-label="Go to home page">
          <svg
            className={styles.logo}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 158 38"
            fill="#fff"
          >
            <path
              d="M146.374 19.499H139.222V26.6509C139.222 28.2894 139.57 29.8462 140.198 31.2525C141.965 35.222 145.952 38.0002 150.571 38.0002H157.723V30.8483C157.723 24.5909 152.631 19.499 146.374 19.499ZM155.77 36.0477H150.571C145.389 36.0477 141.174 31.8331 141.174 26.6509V21.4515H146.374C151.556 21.4515 155.77 25.6661 155.77 30.8483V36.0477Z"
              fill="currentColor"
            />
            <path
              d="M139.222 19.499H134.022C127.765 19.499 122.673 24.5909 122.673 30.8483V38.0002H129.825C134.444 38.0002 138.43 35.222 140.198 31.2525C140.826 29.8462 141.174 28.2894 141.174 26.6509V19.499H139.222ZM139.222 26.6509C139.222 31.8288 135.007 36.0477 129.825 36.0477H124.625V35.8929V30.8483C124.625 25.6661 128.84 21.4515 134.022 21.4515H139.222V26.6509Z"
              fill="currentColor"
            />
            <path
              d="M150.571 0C144.314 0 139.222 5.0919 139.222 11.3493V18.5054H141.174V11.3493C141.174 6.16704 145.389 1.95247 150.571 1.95247H155.775V7.15188C155.775 12.3341 151.56 16.5487 146.378 16.5487H141.178L145.737 18.5011H146.382C152.64 18.5011 157.731 13.4092 157.731 7.15188V0H150.571Z"
              fill="currentColor"
            />
            <path
              d="M127.18 14.1877V12.6997H133.123C134.426 12.6997 135.484 13.7577 135.484 15.0607V16.5487H129.541C128.242 16.553 127.18 15.4908 127.18 14.1877Z"
              fill="#00B6BB"
            />
            <path
              d="M145.939 26.3369C145.939 26.3369 152.515 30.3924 157.723 38.0001L145.939 26.3369Z"
              fill="currentColor"
            />
            <path
              d="M141.174 16.5488H139.222V23.404H141.174V16.5488Z"
              fill="currentColor"
            />
            <path
              d="M134.865 26.3369C134.865 26.3369 128.29 30.3924 123.082 38.0001L134.865 26.3369Z"
              fill="currentColor"
            />
            <path
              d="M145.999 12.162C145.999 12.162 150.054 5.58643 157.662 0.378418L145.999 12.162Z"
              fill="currentColor"
            />
            <path
              d="M113.25 13.693V13.0909C113.25 12.6437 113.349 12.3211 113.547 12.119C113.745 11.9212 114.033 11.8223 114.407 11.8223H115.431C115.547 11.8223 115.641 11.861 115.723 11.9427C115.805 12.0244 115.844 12.119 115.844 12.2351V12.7856C115.844 12.9017 115.805 12.9963 115.723 13.0737C115.641 13.1511 115.547 13.1942 115.431 13.1942H114.622V13.693H115.431C115.487 13.693 115.538 13.7059 115.59 13.7274C115.641 13.7489 115.684 13.779 115.723 13.8134C115.762 13.8478 115.788 13.8952 115.809 13.9468C115.831 13.9984 115.844 14.05 115.844 14.1059V14.6607C115.844 14.7209 115.831 14.7725 115.809 14.8241C115.788 14.8757 115.758 14.9187 115.723 14.9531C115.689 14.9875 115.641 15.0176 115.59 15.0391C115.538 15.0606 115.487 15.0735 115.431 15.0735H113.005C112.945 15.0735 112.893 15.0606 112.842 15.0391C112.79 15.0176 112.747 14.9875 112.713 14.9531C112.678 14.9144 112.648 14.8714 112.627 14.8241C112.605 14.7725 112.592 14.7209 112.592 14.6607V14.1059C112.592 14.05 112.605 13.9984 112.627 13.9468C112.648 13.8952 112.678 13.8521 112.713 13.8134C112.751 13.7747 112.794 13.7489 112.842 13.7274C112.893 13.7059 112.945 13.693 113.005 13.693H113.25Z"
              fill="currentColor"
            />
            <path
              d="M110.975 19.546C111.143 19.0816 111.233 18.6257 111.233 18.1698C111.233 17.843 111.181 17.5334 111.083 17.2495C110.984 16.9657 110.812 16.7248 110.571 16.5227C110.326 16.3249 110.016 16.1658 109.629 16.054C109.246 15.9378 108.76 15.8862 108.18 15.8862H103.754C103.643 15.8862 103.539 15.9292 103.458 16.0109C103.372 16.097 103.329 16.1959 103.329 16.312V17.8043C103.329 17.9204 103.372 18.0193 103.458 18.101C103.544 18.1827 103.643 18.2301 103.754 18.2301H108.201C108.597 18.2301 108.876 18.3376 109.031 18.5483C109.186 18.7633 109.268 19.0128 109.268 19.2966C109.268 19.5675 109.212 19.8428 109.104 20.1223C108.997 20.3976 108.868 20.6212 108.709 20.7932H91.5794C91.8374 20.4234 92.0482 20.0062 92.2202 19.546C92.3922 19.0816 92.4782 18.6257 92.4782 18.1698C92.4782 17.843 92.4309 17.5334 92.3277 17.2495C92.2288 16.9657 92.0568 16.7248 91.8159 16.5227C91.5751 16.3249 91.2612 16.1658 90.8784 16.054C90.4914 15.9378 90.0097 15.8862 89.4248 15.8862H84.9952C84.535 15.8905 84.0878 15.9679 83.6577 16.1228C83.3223 16.2389 83.0126 16.4109 82.7331 16.6259V16.312C82.7331 16.1959 82.7073 16.097 82.6557 16.0109C82.6041 15.9249 82.5439 15.8862 82.4794 15.8862H81.5805C81.5117 15.8862 81.4515 15.9292 81.3999 16.0109C81.3526 16.097 81.3225 16.1959 81.3225 16.312V20.7932H65.6813V16.312C65.6813 16.1959 65.6382 16.097 65.5565 16.0109C65.4705 15.9249 65.3716 15.8862 65.2555 15.8862H63.7632C63.6471 15.8862 63.5482 15.9292 63.4665 16.0109C63.3804 16.097 63.3374 16.1959 63.3374 16.312V22.8145C63.3374 23.3994 63.2127 23.795 62.9633 24.01C62.7138 24.2251 62.4042 24.3283 62.0344 24.3283C61.9182 24.3283 61.8064 24.3197 61.6903 24.3068C61.5785 24.2939 61.4624 24.2724 61.3463 24.2423L60.813 26.2248C61.0968 26.3109 61.3721 26.3711 61.6387 26.4098C61.901 26.4442 62.1677 26.4614 62.4386 26.4614C62.9074 26.4614 63.3374 26.3883 63.7288 26.2463C64.1201 26.1044 64.4642 25.8851 64.7566 25.5841C65.0491 25.2873 65.277 24.9089 65.4404 24.453C65.5737 24.0789 65.6511 23.6359 65.6726 23.1413H110.812C110.923 23.1413 111.027 23.0983 111.108 23.0123C111.19 22.9263 111.237 22.8274 111.237 22.7156V20.7932H110.334C110.592 20.4234 110.803 20.0105 110.975 19.546ZM90.3494 20.1223C90.2419 20.3976 90.1129 20.6212 89.9538 20.7932H83.6964V19.8127C83.6964 19.2708 83.834 18.8708 84.1136 18.6171C84.3931 18.3591 84.6942 18.2301 85.021 18.2301H89.442C89.8377 18.2301 90.1172 18.3376 90.272 18.5483C90.4268 18.7633 90.5085 19.0128 90.5085 19.2966C90.5128 19.5718 90.4569 19.8428 90.3494 20.1223Z"
              fill="currentColor"
            />
            <path
              d="M106.124 14.2607C106.038 14.1747 105.995 14.0758 105.995 13.9597V12.2523C105.995 12.1405 106.038 12.0373 106.124 11.9513C106.21 11.8653 106.309 11.8223 106.425 11.8223H108.133C108.244 11.8223 108.348 11.8653 108.434 11.9513C108.52 12.0373 108.563 12.1362 108.563 12.2523V13.9597C108.563 14.0715 108.52 14.1747 108.434 14.2607C108.348 14.3467 108.249 14.3897 108.133 14.3897H106.425C106.309 14.3897 106.21 14.3467 106.124 14.2607Z"
              fill="currentColor"
            />
            <path
              d="M85.7736 14.2607C85.6875 14.1747 85.6445 14.0758 85.6445 13.9597V12.2523C85.6445 12.1405 85.6875 12.0373 85.7736 11.9513C85.8596 11.8653 85.9585 11.8223 86.0746 11.8223H87.7819C87.8937 11.8223 87.997 11.8653 88.083 11.9513C88.169 12.0373 88.212 12.1362 88.212 12.2523V13.9597C88.212 14.0715 88.169 14.1747 88.083 14.2607C87.997 14.3467 87.898 14.3897 87.7819 14.3897H86.0746C85.9585 14.3897 85.8596 14.3467 85.7736 14.2607Z"
              fill="currentColor"
            />
            <path
              d="M57.5488 23.0297C57.2047 23.1157 56.8005 23.1587 56.3403 23.1587H57.6391C57.7552 23.1587 57.8541 23.1157 57.9444 23.0297C58.0262 22.9436 58.0692 22.8447 58.0692 22.7329C58.0649 22.8404 57.8928 22.9393 57.5488 23.0297Z"
              fill="currentColor"
            />
            <path
              d="M57.7252 17.8777C57.4973 17.396 57.2006 16.9875 56.8264 16.6606C56.4566 16.3338 56.0394 16.0886 55.5792 15.9252C55.1148 15.7575 54.6417 15.6758 54.1558 15.6758C53.687 15.6758 53.2311 15.7532 52.7925 15.9123C52.3495 16.0714 51.9582 16.308 51.6141 16.6305C51.2744 16.9488 50.9991 17.353 50.7884 17.8347C50.5863 18.3206 50.4788 18.8969 50.4788 19.5678V20.8064H35.4224V20.1871C35.4224 19.5162 35.3149 18.9399 35.1084 18.4583C34.9063 17.9723 34.6311 17.5723 34.2913 17.2498C33.9473 16.9316 33.5559 16.6907 33.113 16.5359C32.67 16.3811 32.2141 16.2994 31.7454 16.2994V16.3037H22.5206V16.2994H22.7959V15.9897C22.7959 15.4479 22.9335 15.0479 23.213 14.7942C23.4883 14.5361 23.7936 14.4114 24.1204 14.4114L34.2827 14.3856L35.4267 12.0547H24.1204V12.059C23.6517 12.059 23.1958 12.1364 22.7572 12.2955C22.3142 12.4503 21.9185 12.6869 21.5788 13.0051C21.2348 13.3234 20.9595 13.7276 20.7531 14.2136C20.5467 14.6953 20.4434 15.2715 20.4434 15.9424V18.6432H31.7454C32.0765 18.6432 32.3776 18.7679 32.6571 19.0259C32.9324 19.284 33.07 19.6839 33.07 20.2215V20.7978H8.02334V19.5592C8.02334 18.8883 7.92013 18.312 7.7137 17.8261C7.50727 17.3444 7.23633 16.9402 6.88799 16.6219C6.54394 16.3037 6.15259 16.0628 5.71823 15.9037C5.27527 15.7489 4.8194 15.6672 4.35064 15.6672C3.86897 15.6672 3.39161 15.7489 2.93145 15.9166C2.46698 16.08 2.05413 16.3252 1.67997 16.652C1.31442 16.9789 1.00908 17.3874 0.781153 17.8691C0.553222 18.3551 0.441406 18.9141 0.441406 19.5592V22.7201C0.441406 22.832 0.48441 22.9309 0.570422 23.0169C0.656434 23.1029 0.755348 23.1459 0.867164 23.1459H56.3362C56.8006 23.1459 57.2006 23.1029 57.5446 23.0169C57.8887 22.9309 58.0607 22.832 58.0607 22.7201V19.5592C58.065 18.927 57.9532 18.368 57.7252 17.8777ZM5.67522 20.8064H2.78953V19.6108C2.78953 19.0948 2.95295 18.7034 3.2841 18.4325C3.61094 18.1615 3.96359 18.0239 4.35064 18.0239C4.67748 18.0239 4.97853 18.1572 5.25806 18.411C5.5376 18.669 5.67522 19.069 5.67522 19.6108V20.8064ZM55.7169 20.8064H52.8355V19.6108C52.8355 19.069 52.9731 18.669 53.2526 18.411C53.5279 18.1572 53.8332 18.0239 54.1558 18.0239C54.5428 18.0239 54.8955 18.1615 55.2266 18.4325C55.5534 18.7034 55.7169 19.0948 55.7169 19.6108V20.8064Z"
              fill="currentColor"
            />
            <path
              d="M115.267 16.0108C115.353 16.0969 115.396 16.1958 115.396 16.3119V26.0398C115.396 26.1516 115.353 26.2549 115.267 26.3409C115.181 26.4269 115.082 26.4699 114.966 26.4699H113.47C113.353 26.4699 113.255 26.4269 113.169 26.3409C113.083 26.2549 113.04 26.1559 113.04 26.0398V16.3119C113.04 16.1958 113.083 16.0969 113.169 16.0108C113.255 15.9248 113.353 15.8818 113.47 15.8818H114.966C115.082 15.8818 115.181 15.9248 115.267 16.0108Z"
              fill="currentColor"
            />
            <path
              d="M1.1123 11.7707V10.7729H5.09465C5.96767 10.7729 6.67727 11.4825 6.67727 12.3556V13.3533H2.69492C1.8219 13.3533 1.1123 12.6437 1.1123 11.7707Z"
              fill="#00B6BB"
            />
            <path
              d="M26.4384 16.3037H22.5249V16.308H26.4384V16.3037Z"
              fill="currentColor"
            />
            <path
              d="M26.4384 18.6519H22.5249V18.6562H26.4384V18.6519Z"
              fill="currentColor"
            />
            <path
              d="M22.8001 16.3037H22.5249V16.308H22.8001V16.3037Z"
              fill="currentColor"
            />
            <path
              d="M0.446103 32.8135C0.446103 32.4652 0.721339 32.1899 1.06969 32.1899H1.20731C1.47394 32.1899 1.66317 32.3276 1.77498 32.5168L3.28449 34.9767L4.8026 32.5082C4.93162 32.2975 5.11224 32.1899 5.36168 32.1899H5.49929C5.84764 32.1899 6.12288 32.4652 6.12288 32.8135V37.3291C6.12288 37.6775 5.84764 37.9527 5.49929 37.9527C5.15955 37.9527 4.88431 37.6689 4.88431 37.3291V34.4951L3.78766 36.1852C3.65864 36.3787 3.49522 36.5034 3.26729 36.5034C3.03936 36.5034 2.87594 36.383 2.74692 36.1852L1.66747 34.5209V37.3463C1.66747 37.6861 1.39223 37.957 1.04818 37.957C0.704136 37.957 0.4375 37.6904 0.4375 37.3463V32.8135H0.446103Z"
              fill="currentColor"
            />
            <path
              d="M7.17653 37.101L9.1591 32.6284C9.29672 32.3187 9.55046 32.1338 9.89021 32.1338H9.96331C10.3031 32.1338 10.5482 32.3187 10.6858 32.6284L12.6684 37.101C12.7071 37.1913 12.7329 37.273 12.7329 37.3547C12.7329 37.6858 12.4749 37.9568 12.1394 37.9568C11.847 37.9568 11.6534 37.7848 11.5373 37.5267L11.1546 36.6322H8.65163L8.25168 37.5654C8.14416 37.8106 7.93344 37.9568 7.6754 37.9568C7.34856 37.9568 7.09912 37.6987 7.09912 37.3719C7.10342 37.2773 7.13783 37.187 7.17653 37.101ZM10.6944 35.5227L9.90741 33.6476L9.1204 35.5227H10.6944Z"
              fill="currentColor"
            />
            <path
              d="M13.7134 32.7964C13.7134 32.4481 13.9886 32.1729 14.337 32.1729C14.6853 32.1729 14.9606 32.4481 14.9606 32.7964V34.7059L17.2657 32.418C17.4205 32.2632 17.5753 32.1729 17.7946 32.1729C18.143 32.1729 18.3709 32.4395 18.3709 32.7491C18.3709 32.9427 18.2806 33.0889 18.143 33.2179L16.5432 34.7102L18.2892 36.9035C18.3881 37.0239 18.4612 37.1572 18.4612 37.3422C18.4612 37.6905 18.1946 37.9528 17.829 37.9528C17.5839 37.9528 17.4377 37.8324 17.3001 37.6518L15.6744 35.523L14.9606 36.1896V37.325C14.9606 37.6733 14.6853 37.9485 14.337 37.9485C13.9886 37.9485 13.7134 37.6733 13.7134 37.325V32.7964Z"
              fill="currentColor"
            />
            <path
              d="M19.4937 32.7964C19.4937 32.4481 19.7689 32.1729 20.1172 32.1729C20.4656 32.1729 20.7408 32.4481 20.7408 32.7964V34.7059L23.0459 32.418C23.2008 32.2632 23.3556 32.1729 23.5749 32.1729C23.9233 32.1729 24.1512 32.4395 24.1512 32.7491C24.1512 32.9427 24.0609 33.0889 23.9233 33.2179L22.3234 34.7102L24.0695 36.9035C24.1684 37.0239 24.2415 37.1572 24.2415 37.3422C24.2415 37.6905 23.9749 37.9528 23.6093 37.9528C23.3642 37.9528 23.218 37.8324 23.0803 37.6518L21.4547 35.523L20.7408 36.1896V37.325C20.7408 37.6733 20.4656 37.9485 20.1172 37.9485C19.7689 37.9485 19.4937 37.6733 19.4937 37.325V32.7964Z"
              fill="currentColor"
            />
            <path
              d="M24.9168 37.101L26.8993 32.6284C27.037 32.3187 27.2907 32.1338 27.6304 32.1338H27.7035C28.0433 32.1338 28.2884 32.3187 28.426 32.6284L30.4086 37.101C30.4473 37.1913 30.4731 37.273 30.4731 37.3547C30.4731 37.6858 30.2151 37.9568 29.8796 37.9568C29.5872 37.9568 29.3937 37.7848 29.2776 37.5267L28.8948 36.6322H26.3919L25.9919 37.5654C25.8844 37.8106 25.6737 37.9568 25.4156 37.9568C25.0888 37.9568 24.8394 37.6987 24.8394 37.3719C24.8437 37.2773 24.8738 37.187 24.9168 37.101ZM28.4303 35.5227L27.6433 33.6476L26.8563 35.5227H28.4303Z"
              fill="currentColor"
            />
            <path
              d="M31.4492 32.7964C31.4492 32.4481 31.7245 32.1729 32.0728 32.1729C32.4212 32.1729 32.6964 32.4481 32.6964 32.7964V34.4694H35.0015V32.7964C35.0015 32.4481 35.2767 32.1729 35.6251 32.1729C35.9734 32.1729 36.2487 32.4481 36.2487 32.7964V37.3293C36.2487 37.6776 35.9734 37.9528 35.6251 37.9528C35.2767 37.9528 35.0015 37.6776 35.0015 37.3293V35.6219H32.6964V37.3293C32.6964 37.6776 32.4212 37.9528 32.0728 37.9528C31.7245 37.9528 31.4492 37.6776 31.4492 37.3293V32.7964Z"
              fill="currentColor"
            />
            <path
              d="M39.8052 35.0799V35.0627C39.8052 33.4457 41.0652 32.1211 42.7855 32.1211C43.6456 32.1211 44.2133 32.3146 44.725 32.6716C44.8455 32.7619 44.9831 32.9296 44.9831 33.1747C44.9831 33.5145 44.7078 33.7897 44.3638 33.7897C44.1832 33.7897 44.0714 33.7252 43.9811 33.6607C43.6413 33.4156 43.2758 33.2694 42.7382 33.2694C41.8308 33.2694 41.1083 34.0736 41.1083 35.0412V35.0584C41.1083 36.0991 41.8222 36.8603 42.8285 36.8603C43.2844 36.8603 43.6886 36.7485 44.0069 36.5206V35.7078H43.1639C42.8629 35.7078 42.6178 35.4713 42.6178 35.1702C42.6178 34.8692 42.8629 34.624 43.1639 34.624H44.5917C44.9401 34.624 45.2153 34.8993 45.2153 35.2476V36.6281C45.2153 36.9937 45.0777 37.2474 44.7767 37.4237C44.3122 37.7076 43.6413 37.9914 42.7855 37.9914C41.0222 38 39.8052 36.7571 39.8052 35.0799Z"
              fill="currentColor"
            />
            <path
              d="M46.4194 32.8438C46.4194 32.4955 46.6947 32.2202 47.043 32.2202H49.017C49.7395 32.2202 50.2986 32.4223 50.6727 32.7965C50.991 33.1147 51.1587 33.5577 51.1587 34.0953V34.1125C51.1587 35.007 50.7114 35.5575 50.0233 35.8413L50.892 36.895C51.0125 37.0498 51.0942 37.1788 51.0942 37.3723C51.0942 37.7207 50.8017 37.9486 50.5007 37.9486C50.2168 37.9486 50.0276 37.811 49.8814 37.6261L48.6643 36.0821H47.6666V37.325C47.6666 37.6734 47.3914 37.9486 47.043 37.9486C46.6947 37.9486 46.4194 37.6734 46.4194 37.325V32.8438ZM48.9396 34.9812C49.5503 34.9812 49.8986 34.6586 49.8986 34.177V34.1598C49.8986 33.6222 49.5245 33.347 48.9181 33.347H47.6752V34.9769H48.9396V34.9812Z"
              fill="currentColor"
            />
            <path
              d="M52.2896 37.2777V32.8438C52.2896 32.4955 52.5648 32.2202 52.9131 32.2202H56.0655C56.3751 32.2202 56.6245 32.474 56.6245 32.7793C56.6245 33.0889 56.3708 33.3298 56.0655 33.3298H53.5324V34.4823H55.6999C56.0096 34.4823 56.259 34.7361 56.259 35.0414C56.259 35.351 56.0053 35.5919 55.6999 35.5919H53.5324V36.7874H56.1085C56.4181 36.7874 56.6676 37.0412 56.6676 37.3465C56.6676 37.6562 56.4138 37.897 56.1085 37.897H52.9174C52.5648 37.9056 52.2896 37.6261 52.2896 37.2777Z"
              fill="currentColor"
            />
            <path
              d="M57.73 37.2777V32.8438C57.73 32.4955 58.0052 32.2202 58.3536 32.2202H61.5059C61.8155 32.2202 62.065 32.474 62.065 32.7793C62.065 33.0889 61.8112 33.3298 61.5059 33.3298H58.9729V34.4823H61.1404C61.45 34.4823 61.6994 34.7361 61.6994 35.0414C61.6994 35.351 61.45 35.5919 61.1404 35.5919H58.9729V36.7874H61.5489C61.8585 36.7874 62.108 37.0412 62.108 37.3465C62.108 37.6562 61.8585 37.897 61.5489 37.897H58.3579C58.0052 37.9056 57.73 37.6261 57.73 37.2777Z"
              fill="currentColor"
            />
            <path
              d="M63.1703 32.8136C63.1703 32.4653 63.4456 32.1901 63.7939 32.1901H63.9229C64.224 32.1901 64.4003 32.3363 64.5723 32.5556L66.9849 35.7208V32.7878C66.9849 32.4481 67.2602 32.1729 67.5999 32.1729C67.9397 32.1729 68.2192 32.4481 68.2192 32.7878V37.3121C68.2192 37.6604 67.944 37.9356 67.5956 37.9356H67.5526C67.2516 37.9356 67.0752 37.7894 66.9032 37.5701L64.4003 34.2887V37.3336C64.4003 37.6733 64.125 37.9485 63.7853 37.9485C63.4455 37.9485 63.166 37.6733 63.166 37.3336V32.8136H63.1703Z"
              fill="currentColor"
            />
            <path
              d="M72.0723 32.7964C72.0723 32.4481 72.3475 32.1729 72.6958 32.1729C73.0442 32.1729 73.3194 32.4481 73.3194 32.7964V37.3293C73.3194 37.6776 73.0442 37.9528 72.6958 37.9528C72.3475 37.9528 72.0723 37.6776 72.0723 37.3293V32.7964Z"
              fill="currentColor"
            />
            <path
              d="M74.7432 32.8136C74.7432 32.4653 75.0184 32.1901 75.3667 32.1901H75.4958C75.7968 32.1901 75.9731 32.3363 76.1452 32.5556L78.5578 35.7208V32.7878C78.5578 32.4481 78.833 32.1729 79.1728 32.1729C79.5125 32.1729 79.7921 32.4481 79.7921 32.7878V37.3121C79.7921 37.6604 79.5168 37.9356 79.1685 37.9356H79.1255C78.8244 37.9356 78.6481 37.7894 78.4761 37.5701L75.9774 34.2887V37.3336C75.9774 37.6733 75.7022 37.9485 75.3581 37.9485C75.0184 37.9485 74.7432 37.6733 74.7432 37.3336V32.8136Z"
              fill="currentColor"
            />
            <path
              d="M81.2153 32.7964C81.2153 32.4481 81.4906 32.1729 81.8389 32.1729C82.1873 32.1729 82.4625 32.4481 82.4625 32.7964V37.3293C82.4625 37.6776 82.1873 37.9528 81.8389 37.9528C81.4906 37.9528 81.2153 37.6776 81.2153 37.3293V32.7964Z"
              fill="currentColor"
            />
            <path
              d="M85.2107 33.3728H84.0108C83.6926 33.3728 83.4346 33.1147 83.4346 32.7965C83.4346 32.4782 83.6926 32.2202 84.0108 32.2202H87.6663C87.9846 32.2202 88.2426 32.4782 88.2426 32.7965C88.2426 33.1147 87.9846 33.3728 87.6663 33.3728H86.4665V37.3293C86.4665 37.6777 86.1912 37.9529 85.8429 37.9529C85.4945 37.9529 85.2193 37.6777 85.2193 37.3293V33.3728H85.2107Z"
              fill="currentColor"
            />
            <path
              d="M89.2017 32.7964C89.2017 32.4481 89.4769 32.1729 89.8252 32.1729C90.1735 32.1729 90.4487 32.4481 90.4487 32.7964V37.3293C90.4487 37.6776 90.1735 37.9528 89.8252 37.9528C89.4769 37.9528 89.2017 37.6776 89.2017 37.3293V32.7964Z"
              fill="currentColor"
            />
            <path
              d="M91.5584 37.101L93.5409 32.6284C93.6786 32.3187 93.9323 32.1338 94.272 32.1338H94.3452C94.6849 32.1338 94.93 32.3187 95.0676 32.6284L97.0502 37.101C97.0889 37.1913 97.1147 37.273 97.1147 37.3547C97.1147 37.6858 96.8567 37.9568 96.5212 37.9568C96.2288 37.9568 96.0353 37.7848 95.9192 37.5267L95.5364 36.6322H93.0335L92.6335 37.5654C92.526 37.8106 92.3153 37.9568 92.0572 37.9568C91.7347 37.9568 91.481 37.6987 91.481 37.3719C91.4853 37.2773 91.5154 37.187 91.5584 37.101ZM95.072 35.5227L94.2849 33.6476L93.4979 35.5227H95.072Z"
              fill="currentColor"
            />
            <path
              d="M98.8093 33.3723H97.6095C97.2912 33.3723 97.0332 33.1142 97.0332 32.796C97.0332 32.4778 97.2912 32.2197 97.6095 32.2197H101.265C101.583 32.2197 101.841 32.4778 101.841 32.796C101.841 33.1142 101.583 33.3723 101.265 33.3723H100.065V37.3288C100.065 37.6772 99.7899 37.9524 99.4415 37.9524C99.0932 37.9524 98.8179 37.6772 98.8179 37.3288V33.3723H98.8093Z"
              fill="currentColor"
            />
            <path
              d="M102.8 32.7964C102.8 32.4481 103.076 32.1729 103.424 32.1729C103.772 32.1729 104.047 32.4481 104.047 32.7964V37.3293C104.047 37.6776 103.772 37.9528 103.424 37.9528C103.076 37.9528 102.8 37.6776 102.8 37.3293V32.7964Z"
              fill="currentColor"
            />
            <path
              d="M106.989 37.4969L105.144 33.0888C105.105 32.9899 105.071 32.8953 105.071 32.7877C105.071 32.4394 105.346 32.1728 105.694 32.1728C106.021 32.1728 106.232 32.3577 106.327 32.6114L107.746 36.2884L109.182 32.5684C109.264 32.3663 109.483 32.1685 109.784 32.1685C110.124 32.1685 110.404 32.4265 110.404 32.7705C110.404 32.8695 110.369 32.9727 110.339 33.0458L108.481 37.4969C108.352 37.8065 108.116 37.9915 107.776 37.9915H107.694C107.354 37.9915 107.122 37.8065 106.989 37.4969Z"
              fill="currentColor"
            />
            <path
              d="M111.367 37.2772V32.8433C111.367 32.495 111.642 32.2197 111.99 32.2197H115.143C115.452 32.2197 115.702 32.4735 115.702 32.7788C115.702 33.0884 115.448 33.3293 115.143 33.3293H112.61V34.4818H114.777C115.087 34.4818 115.336 34.7356 115.336 35.0409C115.336 35.3506 115.087 35.5914 114.777 35.5914H112.61V36.787H115.186C115.495 36.787 115.745 37.0407 115.745 37.346C115.745 37.6557 115.495 37.8965 115.186 37.8965H111.995C111.642 37.9051 111.367 37.6256 111.367 37.2772Z"
              fill="currentColor"
            />
          </svg>
        </Link>
        <Link to="https://www.mrda.gov.sa/" aria-label="visit mdra.gov.sa">
          <img src={shouldToggle ? greenLogo : whiteLogo} alt="mdra" />
        </Link>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/" className={styles.navLink}>
              الرئيسية
            </NavLink>
          </li>
          <li>
            <button className={styles.navLink}>
              <span>عن بوابة أخضر مكة</span>
              <svg
                className={styles.navIcon}
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="chevron-down"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                style={{ height: "15px" }}
              >
                <path
                  fill="currentColor"
                  d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                ></path>
              </svg>
            </button>
          </li>
          <li>
            <button className={styles.navLink}>
              <span>المركز الإعلامي</span>
              <svg
                className={styles.navIcon}
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="chevron-down"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                style={{ height: "15px" }}
              >
                <path
                  fill="currentColor"
                  d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                ></path>
              </svg>
            </button>
          </li>
          <li>
            <button className={styles.navLink}>
              <span>دليل النباتات</span>
              <svg
                className={styles.navIcon}
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="chevron-down"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                style={{ height: "15px" }}
              >
                <path
                  fill="currentColor"
                  d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                ></path>
              </svg>
            </button>
          </li>
          <li>
            <NavLink className={styles.navLink}>الدراسات والأبحاث</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
