export default function Connect() {
  return (
    <div className="connect-wrap" id="connect">
      <h2 className="page-section-heading max_lg:pb-4">Connect</h2>
      <ul>
        <li>
          <h3 className="page-sub-heading pb-2 max_lg:hidden">Email</h3>
          <a href="mailto:youremail@email.com">
            <p className="max_lg:hidden">youremail@email.com</p>
            <svg
              className="hidden max_lg:block"
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.94338 16C1.41336 16 0.956962 15.8109 0.574178 15.4328C0.191393 15.0547 0 14.6039 0 14.0804V1.91965C0 1.39611 0.191393 0.945277 0.574178 0.567166C0.956962 0.189055 1.41336 0 1.94338 0H20.0566C20.6007 0 21.0607 0.189055 21.4364 0.567166C21.8121 0.945277 22 1.39611 22 1.91965V14.0804C22 14.6039 21.8121 15.0547 21.4364 15.4328C21.0607 15.8109 20.6007 16 20.0566 16H1.94338ZM20.4286 3.42359L11.5277 8.59929C11.4443 8.65133 11.3583 8.69227 11.2697 8.72212C11.181 8.75197 11.0911 8.7669 11 8.7669C10.8993 8.7669 10.8144 8.75197 10.7455 8.72212C10.6765 8.69227 10.5964 8.65431 10.505 8.60824L1.5714 3.42359V14.0804C1.5714 14.1875 1.60628 14.2755 1.67602 14.3444C1.74577 14.4133 1.83489 14.4478 1.94338 14.4478H20.0566C20.1651 14.4478 20.2542 14.4133 20.324 14.3444C20.3937 14.2755 20.4286 14.1875 20.4286 14.0804V3.42359ZM11 6.89552L20.2124 1.55222H1.81782L11 6.89552ZM1.5714 3.03837V3.28398V2.11019V2.13084V1.55222V2.12941V2.09296V3.28652V3.04097V14.4478V3.03837Z" />
            </svg>
            <span></span>
          </a>
        </li>
        <li>
          <h3 className="page-sub-heading pb-2 max_lg:hidden">Phone</h3>
          <a href="tel:+449876543210" target="_blank">
            <p className="max_lg:hidden">+44 98765 43210</p>
            <svg
              className="hidden max_lg:block"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.3113 19.9922C16.011 19.8021 13.7999 19.194 11.678 18.168C9.55615 17.1419 7.63505 15.7653 5.9147 14.0382C4.19433 12.311 2.83247 10.3921 1.82912 8.28156C0.825777 6.17095 0.218659 3.96368 0.00776947 1.65974C-0.0344084 1.21269 0.0951407 0.8243 0.396417 0.494581C0.697693 0.164861 1.07428 0 1.52617 0H4.83059C5.21344 0 5.54275 0.114959 5.81853 0.344875C6.09431 0.574792 6.28654 0.874973 6.39521 1.24542L7.05708 3.89704C7.10737 4.17976 7.09156 4.45598 7.00963 4.72569C6.92772 4.9954 6.79429 5.21474 6.60934 5.38372L3.68692 8.2328C4.15737 9.11668 4.67892 9.94857 5.25157 10.7285C5.82422 11.5084 6.45169 12.2378 7.13398 12.9166C7.80787 13.5912 8.53578 14.2161 9.31769 14.7913C10.0996 15.3665 10.944 15.8897 11.8508 16.3608L14.8487 13.4289C15.0255 13.2437 15.2283 13.1202 15.457 13.0585C15.6857 12.9967 15.9412 12.987 16.2235 13.0292L18.7566 13.5873C19.1394 13.6929 19.4424 13.8879 19.6654 14.1722C19.8885 14.4566 20 14.7946 20 15.1861V18.4714C20 18.924 19.8301 19.3012 19.4904 19.603C19.1506 19.9047 18.7576 20.0345 18.3113 19.9922ZM2.94721 6.62429L5.33189 4.33332C5.37244 4.30081 5.3988 4.25613 5.41097 4.19927C5.42314 4.14238 5.42111 4.08958 5.4049 4.04085L4.84989 1.84249C4.83367 1.7775 4.80529 1.72876 4.76473 1.69627C4.72416 1.66376 4.67142 1.64751 4.60653 1.64751H1.87411C1.82545 1.64751 1.7849 1.66376 1.75244 1.69627C1.71999 1.72876 1.70376 1.76938 1.70376 1.81813C1.76865 2.62077 1.91019 3.42139 2.12838 4.21999C2.34658 5.01858 2.61953 5.82001 2.94721 6.62429ZM13.5127 17.1334C14.2692 17.4668 15.0601 17.7199 15.8856 17.8928C16.7111 18.0657 17.4775 18.1928 18.1847 18.274C18.2334 18.274 18.274 18.2578 18.3064 18.2253C18.3389 18.1928 18.3551 18.1522 18.3551 18.1034V15.3738C18.3551 15.3088 18.3389 15.256 18.3064 15.2153C18.274 15.1747 18.2253 15.1463 18.1604 15.13L16.1043 14.684C16.0556 14.6678 16.013 14.6658 15.9765 14.6779C15.94 14.6901 15.9015 14.7165 15.8609 14.7572L13.5127 17.1334Z" />
            </svg>
            <span></span>
          </a>
        </li>
        <li>
          <h3 className="page-sub-heading pb-2 max_lg:hidden">LinkedIn</h3>
          <a href="https://www.linkedin.com/in/your-profile/" target="_blank">
            <p className="max_lg:hidden">linkedin.com/in/your-profile/</p>
            <svg
              className="hidden max_lg:block"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.65548 6.4342H0.640452C0.462258 6.4342 0.317871 6.57866 0.317871 6.75678V19.6554C0.317871 19.8336 0.462258 19.9779 0.640452 19.9779H4.65548C4.83368 19.9779 4.97806 19.8336 4.97806 19.6554V6.75678C4.97806 6.57866 4.83368 6.4342 4.65548 6.4342Z" />
              <path d="M2.64942 0.0219727C1.18852 0.0219727 0 1.2092 0 2.66849C0 4.12842 1.18852 5.3161 2.64942 5.3161C4.10916 5.3161 5.29671 4.12836 5.29671 2.66849C5.29677 1.2092 4.10916 0.0219727 2.64942 0.0219727Z" />
              <path d="M14.868 6.11353C13.2555 6.11353 12.0634 6.80675 11.3404 7.59443V6.75669C11.3404 6.57856 11.196 6.43411 11.0178 6.43411H7.17268C6.99448 6.43411 6.8501 6.57856 6.8501 6.75669V19.6553C6.8501 19.8335 6.99448 19.9778 7.17268 19.9778H11.1789C11.3571 19.9778 11.5015 19.8335 11.5015 19.6553V13.2735C11.5015 11.1229 12.0856 10.2851 13.5847 10.2851C15.2174 10.2851 15.3471 11.6282 15.3471 13.3841V19.6553C15.3471 19.8335 15.4915 19.9779 15.6697 19.9779H19.6775C19.8556 19.9779 20 19.8335 20 19.6553V12.5802C20 9.38249 19.3903 6.11353 14.868 6.11353Z" />
            </svg>
            <span></span>
          </a>
        </li>
        <li>
          <h3 className="page-sub-heading pb-2 max_lg:hidden">Instagram</h3>
          <a href="https://www.instagram.com/yourprofile/" target="_blank">
            <p className="max_lg:hidden">instagram.com/yourprofile/</p>
            <svg
              className="hidden max_lg:block"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.8123 0H5.18798C3.8125 0.00147654 2.49377 0.54854 1.52116 1.52116C0.54854 2.49377 0.00147654 3.8125 0 5.18798V15.812C0.00147654 17.1875 0.54854 18.5062 1.52116 19.4788C2.49377 20.4515 3.8125 20.9985 5.18798 21H15.8123C17.1878 20.9985 18.5065 20.4514 19.4791 19.4788C20.4516 18.5062 20.9986 17.1875 21 15.812V5.18798C20.9986 3.81253 20.4516 2.4938 19.4791 1.52118C18.5065 0.548551 17.1878 0.00147669 15.8123 0ZM19.0066 15.812C19.0057 16.659 18.6689 17.471 18.07 18.0699C17.4712 18.6688 16.6593 19.0058 15.8123 19.007H5.18798C4.34098 19.0059 3.52897 18.669 2.93008 18.07C2.33119 17.4711 1.99431 16.659 1.99336 15.812V5.18798C1.99431 4.34098 2.33119 3.52894 2.93008 2.92998C3.52897 2.33103 4.34098 1.99407 5.18798 1.99303H15.8123C16.6593 1.99416 17.4712 2.33115 18.07 2.9301C18.6689 3.52904 19.0057 4.34104 19.0066 5.18798V15.812Z" />
              <path d="M10.4998 5.49939C9.51079 5.49945 8.54401 5.79279 7.7217 6.34231C6.8994 6.89182 6.2585 7.67284 5.88007 8.58659C5.50163 9.50034 5.40265 10.5058 5.59564 11.4758C5.78863 12.4458 6.26492 13.3368 6.96428 14.0361C7.66364 14.7354 8.55467 15.2117 9.52469 15.4046C10.4947 15.5975 11.5001 15.4985 12.4139 15.12C13.3276 14.7415 14.1086 14.1005 14.658 13.2782C15.2075 12.4558 15.5008 11.489 15.5008 10.5C15.4993 9.17416 14.9719 7.90304 14.0344 6.96555C13.0968 6.02807 11.8257 5.50078 10.4998 5.49939ZM10.4998 13.5076C9.90498 13.5075 9.32352 13.3311 8.82897 13.0006C8.33442 12.6701 7.94898 12.2003 7.72139 11.6507C7.4938 11.1012 7.43429 10.4965 7.55038 9.91306C7.66646 9.32967 7.95293 8.7938 8.37356 8.37321C8.7942 7.95262 9.3301 7.66621 9.91351 7.55019C10.4969 7.43417 11.1016 7.49374 11.6512 7.72139C12.2007 7.94904 12.6704 8.33453 13.0009 8.82912C13.3313 9.32371 13.5077 9.90518 13.5077 10.5C13.507 11.2975 13.1898 12.0621 12.6258 12.626C12.0619 13.1898 11.2973 13.5069 10.4998 13.5076Z" />
              <path d="M15.7057 3.95972C15.4417 3.95965 15.1836 4.03788 14.9641 4.18451C14.7445 4.33115 14.5734 4.53959 14.4723 4.78349C14.3712 5.02739 14.3447 5.29579 14.3962 5.55474C14.4477 5.81369 14.5748 6.05156 14.7614 6.23827C14.9481 6.42498 15.186 6.55214 15.4449 6.60367C15.7038 6.6552 15.9722 6.62878 16.2162 6.52777C16.4601 6.42675 16.6686 6.25566 16.8153 6.03615C16.9619 5.81663 17.0402 5.55854 17.0402 5.29453C17.0402 4.94057 16.8996 4.60111 16.6494 4.35079C16.3991 4.10047 16.0597 3.9598 15.7057 3.95972Z" />
            </svg>
            <span></span>
          </a>
        </li>
      </ul>
    </div>
  );
}
