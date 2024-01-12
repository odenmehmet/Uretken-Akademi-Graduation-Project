import styled from 'styled-components';


const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  background-color: ${({theme}) => theme.card_light};

  //background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
`;


const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;




const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  return (
    
    <section className="footer mainSection section" id="footerSection">
      <style>
        {`
          body {
            font-family: proxima-nova, sans-serif;
            background: #fff;
            max-width: 100vw;
            max-width: 1920px;
            margin: 0 auto;
            overflow-x: hidden;
        }
        
        body.preload * {
            -webkit-transition: none !important;
            -moz-transition: none !important;
            -ms-transition: none !important;
            -o-transition: none !important;
        }
        
        body.noscroll {
            overflow: hidden;
            height: 100vh;
        }
        
        * {
            font-family: proxima-nova, sans-serif;
            box-sizing: border-box;
        }
        
        img {
            max-width: 100%;
        }
        
        a {
            color: #000;
            text-decoration: none !important;
            transition: 0.3s ease all;
        }
        
        ::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            background-color: #F5F5F5;
        }
        
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
            background-color: #F5F5F5;
        }
        
        ::-webkit-scrollbar-thumb {
            background-color: #363636;
        }
        
        a:hover {
            text-decoration: none !important;
        }
        
        *:focus {
            box-shadow: unset !important;
            outline: unset !important;
        }
        
        svg.iconset {
            position: absolute;
            pointer-events: none;
        }
        
        @media (min-width: 1400px) {
            .container, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
                max-width: 1700px;
            }
        }
        
        .row.newzero {
            margin-left: 0px;
            margin-right: 0px;
        }
        
        .row.newrow {
            margin-left: -7px;
            margin-right: -7px;
        }
        
        .row.newone {
            margin-left: -1px;
            margin-right: -1px;
        }
        
        .row.newtwo {
            margin-left: -2px;
            margin-right: -2px;
        }
        
        .row.newzero > * {
            --bs-gutter-x: 0px;
        }
        
        .row.newrow > * {
            --bs-gutter-x: 7px;
        }
        
        .row.newone > * {
            --bs-gutter-x: 1px;
        }
        
        .row.newtwo > * {
            --bs-gutter-x: 2px;
        }
        
        @media only screen and (min-width: 1920px) {
            .row > .col-md-n8 {
                flex: 0 0 auto;
                width: 12.5%;
            }
        
            .row > .col-md-n5 {
                flex: 0 0 auto;
                width: 20%;
            }
        
            .row > .col-md-n10 {
                flex: 0 0 auto;
                width: 10%;
            }
        
            .row > .col-md-n16 {
                flex: 0 0 auto;
                width: 6.25%;
            }
        }
        
        @media only screen and (min-width: 768px) {
        }
        
        section.firstSection .slider {
            position: absolute;
            left: 0px;
            right: 0px;
            height: 100vh;
            z-index: -1;
            pointer-events: none;
        }
        
        header:before {
            content: '';
            height: 180px;
            z-index: 0;
            position: absolute;
            background: rgb(0, 0, 0);
            background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7231267507002801) 202%);
            left: 0px;
            right: 0px;
            top: 0px;
            pointer-events: none;
            opacity: 0.3;
        }
        
        section.firstSection .slider .swiper-slide:after {
            content: '';
            height: 324px;
            background: rgb(0, 0, 0);
            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7231267507002801) 100%);
            z-index: 1;
            position: absolute;
            bottom: 0px;
            left: 0px;
            right: 0px;
        }
        
        section.firstSection .slider .swiper-slide .slogan {
            font-size: 75px;
            letter-spacing: -0.04em;
            text-align: left;
            color: #fff;
            margin-bottom: 40px;
            position: absolute;
            left: 50%;
            top: 25%;
            transform: translate(-50%, -50%);
            z-index: 1;
        }
        
        section.firstSection .slider .swiper-slide .slogan b {
            font-weight: bold;
        }
        
        section.firstSection .slider .swiper-slide .slogan span {
            border-bottom: 1.5px solid #fff;
            line-height: 67px;
            display: inline-block;
        }
        
        section.firstSection .slider .swiper-slide .img {
            width: 100%;
            height: 100vh;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
        
        section.firstSection .slider .swiper-slide .img:before {
            content: '';
            position: absolute;
            left: 0px;
            right: 0px;
            top: 0px;
            bottom: 0px;
            background: #000;
            opacity: 0.65;
        }
        
        header {
            top: 0;
            z-index: 3;
            right: 0px;
            left: 50%;
            /* transform: translateX(-50%); */
            position: fixed;
            left: 0px;
            right: 0px;
            transition: all ease .3s;
        }
        
        header .head {
        }
        
        header .head .menu {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }
        
        header .head .menu .navbar-nav {
            display: flex;
            justify-content: center;
            white-space: nowrap;
            height: 74px;
        }
        
        header .head .menu .navbar-nav > li {
            max-height: 75px;
            display: flex;
            align-items: center;
            position: relative;
            background: #10332d00;
            transition: 0.3s ease all;
        }
        
        header .head .menu .navbar-nav > li > a {
            font-weight: 600;
            text-align: left;
            color: #fff;
            padding: 0px 13px;
            display: flex;
            transition: 0.4s ease all;
            font-size: 18px;
            height: 100%;
            align-items: center;
            z-index: 2;
            position: relative;
        }
        
        header .head .menu .navbar-nav > li:not(.logo):not(.phone):hover {
            z-index: 3;
        }
        
        header .head .menu .navbar-nav > li:not(.logo):not(.phone):hover > a {
            color: #8aca38;
            background: #10332d;
        }
        
        header .head .menu .navbar-nav > li:not(.logo):not(.phone) .dropMenu {
            display: none;
        }
        
        header .head .menu .navbar-nav > li.submenu:not(.logo):not(.phone) > .dropMenu {
            display: block;
            position: absolute;
            top: 100%;
            left: 0px;
            background: #10332d;
            min-width: 278px;
            opacity: 0;
            pointer-events: none;
            transition: 0.4s ease all;
            z-index: 1;
        }
        
        header .head .menu .navbar-nav > li.submenu:not(.logo):not(.phone):hover > .dropMenu {
            opacity: 1;
            pointer-events: auto;
            filter: drop-shadow(1px 29px 43px rgba(0, 0, 0, 0.48));
        }
        
        header .head .menu .navbar-nav > li.submenu:not(.logo):not(.phone) > .dropMenu > .dropdown-menu {
            padding: 35px 0px 25px;
        }
        
        header .head .menu .navbar-nav > li.submenu > .dropMenu > .dropdown-menu > li {
            position: relative;
        }
        
        header .head .menu .navbar-nav > li.submenu > .dropMenu > .dropdown-menu > li > a {
            font-size: 18px;
            letter-spacing: 0.02em;
            line-height: 45px;
            text-align: left;
            color: #fff;
            padding: 0px 19px;
            position: relative;
            display: block;
            z-index: 2;
        }
        
        header .head .menu .navbar-nav > li.submenu > .dropMenu > .dropdown-menu > li:before {
            content: '';
            position: absolute;
            left: -22px;
            right: -22px;
            bottom: 0px;
            top: 0px;
            opacity: 0;
            background: #8aca38;
            z-index: 0;
        }
        
        header .head .menu .navbar-nav > li.submenu > .dropMenu > .dropdown-menu > li.submenu:after {
            content: '';
            height: 17.1px;
            width: 9.66px;
            background: #0f413c;
            position: absolute;
            left: -45px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1;
            -webkit-mask-image: url(../img/svg/caret-right.svg);
            -webkit-mask-position: top center;
            -webkit-mask-size: 100% 100%;
            -webkit-mask-repeat: no-repeat;
            transition: 0.5s ease all;
            opacity: 0;
        }
        
        header .head .menu .navbar-nav > li.submenu > .dropMenu > .dropdown-menu > li:hover {
        }
        
        header .head .menu .navbar-nav > li.submenu > .dropMenu > .dropdown-menu > li:hover > a {
        }
        
        header .head .menu .navbar-nav > li.submenu > .dropMenu > .dropdown-menu > li:hover:before {
            opacity: 1;
            filter: drop-shadow(0px 10px 40px rgba(0, 0, 0, 0.56));
        }
        
        header .head .menu .navbar-nav > li.submenu > .dropMenu > .dropdown-menu > li.submenu:hover:after {
            opacity: 1;
            left: -5px;
        }
        
        header .head .menu .navbar-nav > li.submenu > .dropMenu > .dropdown-menu > li.submenu > .dropMenu {
            width: 0px;
            background: #8aca38;
            display: block;
            position: absolute;
            left: 100%;
            top: 50%;
            transform: translateY(-30%);
            padding: 24px 0px;
            pointer-events: none;
            opacity: 0;
            transition: 0.5s ease width;
        }
        
        header .head .menu .navbar-nav > li.submenu > .dropMenu > .dropdown-menu > li.submenu:hover > .dropMenu {
            width: 280px;
            opacity: 1;
            pointer-events: auto;
        }
        
        header .head .menu .navbar-nav > li.submenu > .dropMenu > .dropdown-menu > li.submenu > .dropMenu .dropdown-menu {
            white-space: nowrap;
            width: 280px;
            opacity: 0;
            transition: unset;
        }
        
        header .head .menu .navbar-nav > li.submenu > .dropMenu > .dropdown-menu > li.submenu:hover > .dropMenu .dropdown-menu {
            opacity: 1;
            transition: 0.5s 0.3s ease all;
        }
        
        header .head .menu .navbar-nav > li.submenu > .dropMenu > .dropdown-menu > li.submenu > .dropMenu .dropdown-menu li {
        }
        
        header .head .menu .navbar-nav > li.submenu > .dropMenu > .dropdown-menu > li.submenu > .dropMenu .dropdown-menu li a {
            font-size: 18px;
            letter-spacing: 0.02em;
            line-height: 45px;
            text-align: left;
            color: #fff;
            padding: 0px 24px;
            display: block;
        }
        
        header .head .menu .navbar-nav > li.submenu > .dropMenu > .dropdown-menu > li.submenu > .dropMenu .dropdown-menu li a:hover {
            color: #1E7D62;
        }
        
        header .head .menu .navbar-nav > li.logo {
            width: 280px;
            justify-content: center;
            margin: 0px -2px;
        }
        
        header .head .menu .navbar-nav > li.logo .logoArea {
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            -webkit-mask-image: url(../img/svg/logoShape.svg);
            -webkit-mask-position: top center;
            -webkit-mask-size: 100% 100%;
            -webkit-mask-repeat: no-repeat;
            width: 282.8px;
            height: 145.63px;
        }
        
        header .head .menu .navbar-nav > li.logo .logoArea img {
            width: 80px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            margin-top: 12px;
        }
        
        header .head .menu .navbar-nav > li.phone a {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        header .head .menu .navbar-nav > li.phone {
        }
        
        header .head .menu .navbar-nav > li.phone:before {
            content: '';
            position: absolute;
            left: 0px;
            top: 50%;
            width: 0px;
            height: 34.5px;
            background: transparent;
            border: 0.5px solid #a2a2a2;
            opacity: 0.57;
            mix-blend-mode: multiply;
            transform: translateY(-50%);
        }
        
        header .head .menu .navbar-nav > li.phone .icon {
            width: 28.4px;
            height: 28.35px;
            fill: #0A4740;
            margin-right: 8px;
            margin-left: 2px;
        }
        
        header .head .menu .navbar-nav > li.phone span {
            font-weight: bold;
            font-size: 22px;
            letter-spacing: 0.04em;
            text-align: left;
            color: #fff;
        }
        
        header .navShapeClip {
            position: absolute;
            pointer-events: none;
            width: 0px;
            height: 0px;
        }
        
        header .navShape {
            width: calc(100% + 170px);
            background-size: cover;
            -webkit-clip-path: url(#navShapeClip);
            clip-path: url(#navShapeClip);
            position: absolute;
            top: 0px;
            min-width: 1200px;
            left: 50%;
            transform: translateX(-50%);
            height: 74px;
            background: linear-gradient(
                    267deg, #066069 0%, #1e7d62 38.49%, #8aca38 100%);
            filter: drop-shadow(0px 20px 50px rgba(0, 0, 0, 0.16));
            z-index: -1;
            max-width: 100vw;
        }
        
        .headerSearchBtn {
            right: 230px;
            top: 25px;
            position: fixed;
            font-size: 22px;
            text-align: left;
            color: #fff;
            padding: 12px 16px;
            border-radius: 26px;
            background: #066069;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            overflow: hidden;
            transition: 0.3s ease all;
            width: 100px;
            z-index: 3;
            right: 40px;
            top: 80px;
            justify-content: space-between;
        }
        
        .headerSearchBtn span {
        }
        
        .headerSearchBtn .icon {
            fill: #8aca38;
            width: 23.79px;
            height: 23.77px;
        }
        
        .headerFastMenu {
            position: fixed;
            right: 40px;
            top: 20px;
            font-size: 22px;
            text-align: left;
            color: #fff;
            padding: 12px 13px;
            border-radius: 26px;
            background: #066069;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            overflow: hidden;
            transition: 0.3s ease all;
            width: 170px;
            z-index: 3;
        }
        
        .headerFastMenu .icon {
            width: 23.79px;
            height: 23.77px;
            fill: #8aca38;
            right: 0px;
            transition: 0.3s ease all;
            position: relative;
            margin-left: 10px;
            opacity: 1;
        }
        
        .headerFastMenu span {
            display: inline-block;
            margin: 0px;
            transition: 0.3s ease all;
        }
        
        .headerFastMenu:hover span {
            margin-right: -15px;
        }
        
        .headerFastMenu:before {
            content: '';
            -webkit-mask-image: url(../img/svg/meramBel.svg);
            -webkit-mask-position: top center;
            -webkit-mask-size: 100% 100%;
            -webkit-mask-repeat: no-repeat;
            position: absolute;
            left: -86px;
            width: 70.1px;
            height: 70.1px;
            opacity: 0;
            background: #066069;
            transition: 0.3s ease all;
        }
        
        .headerFastMenu:hover {
            background: linear-gradient(307deg, #8aca38 0%, #1e7d62 26.02%, #066069 290%);
            filter: drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.16));
            padding-left: 50px;
            padding-right: 0px;
        }
        
        .headerFastMenu:hover:before {
            left: -16px;
            opacity: 1;
            background: #8aca38;
        }
        
        .headerFastMenu:hover .icon {
            margin-left: 0px;
            right: -100px;
            opacity: 0;
        }
        
        header .menuBackdrop {
            position: fixed;
            left: -100vw;
            right: 0px;
            top: 0px;
            bottom: 0px;
            min-width: 200vw;
            min-height: 100vh;
            z-index: 3;
            background: #000;
            opacity: 0;
            pointer-events: none;
            transition: 0.3s ease all;
        }
        
        header .menuBackdrop.active {
            opacity: 0.7;
            pointer-events: auto;
        }
        
        .headerSearch {
            position: fixed;
            left: 0px;
            top: 0px;
            right: 0px;
            z-index: 5;
            opacity: 0;
            pointer-events: none;
        }
        
        .headerSearch:before {
            content: '';
            background: linear-gradient(311deg, #cac038 0%, #c6d58a 0%, #066069 51%);
            opacity: 0.96;
            box-shadow: 0px 75px 99px rgba(0, 0, 0, 0.9);
            position: absolute;
            left: 0px;
            top: 0px;
            bottom: 0px;
            right: 0px;
            z-index: -1;
            max-height: 0%;
            transition: 0.3s ease all;
        }
        
        .headerSearch .closeMenu {
            position: absolute;
            right: 30px;
            top: 30px;
            width: 60px;
            height: 60px;
            border-radius: 60px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .headerSearch .closeMenu .icon {
            width: 30px;
            height: 30px;
            fill: #fff;
            transition: 0.3s ease all;
        }
        
        .headerSearch .closeMenu:hover .icon {
            fill: #8ACA38;
        }
        
        .headerSearch.active:before {
            max-height: 100%;
        }
        
        .headerSearch.active {
            opacity: 1;
            pointer-events: auto;
        }
        
        .headerSearch .logoArea {
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            -webkit-mask-image: url(../img/svg/logoShape.svg);
            -webkit-mask-position: top center;
            -webkit-mask-size: 100% 100%;
            -webkit-mask-repeat: no-repeat;
            width: 282.8px;
            height: 145.63px;
            top: -6px;
            transition: 0.5s 0.2s ease top, 0.3s 0.1s ease opacity;
            top: -20px;
        }
        
        .headerSearch .logoArea img {
            width: 90px;
            position: absolute;
            left: 50%;
            top: 40%;
            transform: translate(-50%, -50%);
            margin-top: 12px;
        }
        
        .headerSearch.active .logoArea {
            top: -6px;
        }
        
        .headerSearch .content {
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
            min-height: 600px;
            padding: 75px 0px;
        }
        
        .headerSearch .content .searchFormArea {
            max-width: 850px;
            width: 100%;
            margin-bottom: 85px;
            position: relative;
            top: -20px;
            transition: 0.5s 0.2s ease top, 0.3s 0.2s ease opacity;
            opacity: 0;
        }
        
        .headerSearch.active .content .searchFormArea {
            top: 0;
            opacity: 1;
        }
        
        .headerSearch .content .searchFormArea .form-group {
            position: relative;
        }
        
        .headerSearch .content .searchFormArea .form-group input::-webkit-input-placeholder {
            font-weight: 300;
            font-size: 18px;
            text-align: left;
            color: #fff;
        }
        
        .headerSearch .content .searchFormArea .form-group input:-ms-input-placeholder {
            font-weight: 300;
            font-size: 18px;
            text-align: left;
            color: #fff;
        }
        
        .headerSearch .content .searchFormArea .form-group input::placeholder {
            font-weight: 300;
            font-size: 18px;
            text-align: left;
            color: #fff;
        }
        
        .headerSearch .content .searchFormArea .form-group input {
            width: 100%;
            height: 68px;
            border: 0px;
            background: transparent;
            /* Note: currently only Safari supports backdrop-filter */
            backdrop-filter: blur(30px);
            --webkit-backdrop-filter: blur(30px);
            background-color: rgba(255, 255, 255, 0.15);
            padding: 18px;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            font-weight: 300;
            font-size: 18px;
            text-align: left;
            color: #fff;
        }
        
        .headerSearch .content .searchFormArea .form-group button {
            position: absolute;
            background: transparent;
            border: 0px;
            width: 33.59px;
            height: 34.53px;
            right: 18px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            padding: 0px;
        }
        
        .headerSearch .content .searchFormArea .form-group button .icon {
            width: 33.59px;
            height: 34.53px;
            fill: #fff;
        }
        
        .headerSearch .content .searchFormArea .buttons {
            background: #6ab453;
            filter: drop-shadow(0px 20px 20px rgba(0, 0, 0, 0.38));
            display: flex;
            justify-content: space-evenly;
        }
        
        .headerSearch .content .searchFormArea .buttons .btn {
            background: transparent;
            border: 0px;
            font-weight: 300;
            font-size: 15px;
            letter-spacing: 0.02em;
            line-height: 22px;
            text-align: left;
            color: #fff;
            cursor: pointer;
            padding: 11px 0px;
            position: relative;
            flex-grow: 1;
            flex-shrink: 1;
            flex-basis: 0;
            text-align: center;
        }
        
        .headerSearch .content .searchFormArea .buttons .btn.text {
            text-transform: uppercase;
            color: #066069;
            cursor: default;
        }
        
        .headerSearch .content .searchFormArea .buttons .btn > span {
            display: block;
            position: relative;
        }
        
        .headerSearch .content .searchFormArea .buttons .btn:not(:last-child) > span:Before {
            content: '';
            width: 1px;
            background: #000;
            position: absolute;
            right: 0px;
            top: 50%;
            height: 90%;
            transform: translateY(-50%);
            opacity: 0.1;
        }
        
        .headerSearch .content .searchFormArea .buttons .btn:hover {
            color: #066069;
        }
        
        .headerSearch .content .searchFormArea .buttons .btn:not(.text):before {
            content: '';
            height: 23px;
            background: #066069;
            position: absolute;
            left: 0px;
            right: 0px;
            top: 100%;
            opacity: 0;
            pointer-events: none;
        }
        
        .headerSearch .content .searchFormArea .buttons .btn:not(.text):after {
            content: '';
            -webkit-mask-image: url(../img/svg/caret-right.svg);
            -webkit-mask-position: top center;
            -webkit-mask-size: 100% 100%;
            -webkit-mask-repeat: no-repeat;
            position: absolute;
            left: 50%;
            bottom: -22px;
            background: #fff;
            width: 15.97px;
            height: 9.03px;
            transform: translateX(-50%) rotate(-90deg);
            transition: 0.3s ease bottom;
            opacity: 0;
            pointer-events: none;
        }
        
        .headerSearch .content .searchFormArea .buttons .btn:hover:before {
            content: '';
            opacity: 1;
            pointer-events: auto;
        }
        
        .headerSearch .content .searchFormArea .buttons .btn:hover:after {
            content: '';
            bottom: -17px;
            opacity: 1;
            pointer-events: auto;
        }
        
        .headerSearch .content .mostUsed {
            width: 100%;
            max-width: 1100px;
            position: relative;
            top: -20px;
            transition: 0.5s 0.2s ease top, 0.3s 0.2s ease opacity;
            opacity: 0;
        }
        
        .headerSearch.active .content .mostUsed {
            top: 0;
            opacity: 1;
        }
        
        .headerSearch .content .mostUsed .title {
            text-align: center;
            font-weight: 500;
            font-size: 16px;
            letter-spacing: 0.02em;
            line-height: 22px;
            color: #8aca38;
            margin-bottom: 20px;
        }
        
        .headerSearch .content .mostUsed .list {
            display: flex;
            justify-content: space-between;
        }
        
        .headerSearch .content .mostUsed .list a {
            font-weight: 500;
            font-size: 16px;
            letter-spacing: 0.02em;
            line-height: 22px;
            text-align: left;
            color: #fff;
        }
        
        .headerSearch .content .mostUsed .list a:hover {
            color: #8aca38;
        }
        
        .headerSearchBackdrop {
            position: fixed;
            right: 0px;
            top: 0px;
            left: 0px;
            bottom: 0px;
            background: #00000033;
            opacity: 0;
            pointer-events: none;
            z-index: 2;
        }
        
        .headerSearchBackdrop.active {
            opacity: 0.1;
            pointer-events: auto;
        }
        
        .fastMenu {
            position: fixed;
            left: 0px;
            top: 0px;
            right: 0px;
            min-height: 0px;
            z-index: 3;
            background: linear-gradient(294deg, #cac038 -130%, #c6d58a -17.28%, #066069 50%);
            box-shadow: 0px 75px 99px rgba(0, 0, 0, 0.9);
            pointer-events: none;
            max-height: 0%;
            overflow: hidden;
            transition: 0.3s ease all;
        }
        
        .fastMenu.active {
            pointer-events: auto;
            max-height: 100%;
            min-height: 600px;
        }
        
        .fastMenu .closeMenu {
            position: absolute;
            right: 30px;
            top: 30px;
            width: 60px;
            height: 60px;
            border-radius: 60px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .fastMenu .closeMenu .icon {
            width: 30px;
            height: 30px;
            fill: #fff;
            transition: 0.3s ease all;
        }
        
        .fastMenu .closeMenu:hover .icon {
            fill: #8ACA38;
        }
        
        .fastMenu > .content {
            padding: 125px 185px 90px;
            display: flex;
            align-items: center;
            flex-direction: column;
        }
        
        .fastMenu .content .fastButtons {
            display: block;
            width: 100%;
            margin-bottom: 90px;
        }
        
        .fastMenu .content .fastButtons > .row {
            margin-right: -6px;
            margin-left: -6px;
        }
        
        .fastMenu .content .fastButtons > .row > div {
            padding-left: 6px;
            padding-right: 6px;
            width: 20%;
            flex: unset;
        }
        
        .fastMenu .content .fastButtons .btn {
            display: block;
            background: #fff;
            border-radius: 6px;
            position: relative;
            overflow: hidden;
            margin-bottom: 12px;
        }
        
        .fastMenu .content .fastButtons .btn .iconarea {
            width: 40px;
            height: 50px;
            position: relative;
            margin-right: 20px;
        }
        
        .fastMenu .content .fastButtons .btn .iconarea svg.icon {
            fill: #066069;
            max-width: 100%;
            max-height: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            transition: 0.3s ease all;
        }
        
        .fastMenu .content .fastButtons .btn .iconarea div.icon {
            background: #066069;
            max-width: 100%;
            max-height: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            transition: 0.3s ease all;
            width: 100%;
            height: 100%;
            -webkit-mask-repeat: no-repeat;
            -webkit-mask-size: 100% 100%;
        }
        
        .fastMenu .content .fastButtons .btn .content {
            height: 76px;
            display: flex;
            align-items: center;
            padding: 17px;
        }
        
        .fastMenu .content .fastButtons .btn .content:before {
            content: '';
            position: absolute;
            right: 21px;
            bottom: -10px;
            width: 5px;
            height: 5px;
            border-radius: 5px;
            background: #066069;
            transition: 0.3s ease all;
        }
        
        .fastMenu .content .fastButtons .btn .content:after {
            content: '';
            position: absolute;
            right: 14px;
            bottom: -10px;
            width: 5px;
            height: 5px;
            border-radius: 5px;
            background: #1e7d62;
            transition: 0.3s ease all;
        }
        
        .fastMenu .content .fastButtons .btn:after {
            content: '';
            position: absolute;
            right: 7px;
            bottom: -10px;
            width: 5px;
            height: 5px;
            background: #8aca38;
            border-radius: 5px;
            transition: 0.3s ease all;
        }
        
        .fastMenu .content .fastButtons .btn .text {
            font-size: 18px;
            text-align: left;
            color: #727272;
            position: absolute;
            left: 80px;
            top: 50%;
            transform: translateY(-50%);
            transition: 0.3s ease all;
        }
        
        .fastMenu .content .fastButtons .btn .subTitle {
            position: absolute;
            left: 80px;
            top: 80%;
            transform: translateY(-50%);
            opacity: 0;
            font-weight: 300;
            font-size: 16px;
            text-align: left;
            color: #8aca38;
            transition: 0.3s ease all;
        }
        
        .fastMenu .content .fastButtons .btn:hover {
            background: #0f413c;
            filter: drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.3));
        }
        
        .fastMenu .content .fastButtons .btn:hover .iconarea svg.icon {
            fill: #8aca38;
        }
        
        .fastMenu .content .fastButtons .btn:hover .iconarea div.icon {
            background: #8aca38;
        }
        
        .fastMenu .content .fastButtons .btn:hover .text {
            color: #fff;
            top: 35%;
        }
        
        .fastMenu .content .fastButtons .btn:hover .subTitle {
            opacity: 1;
            top: 65%;
        }
        
        .fastMenu .content .fastButtons .btn:hover .content:before {
            bottom: 7px;
            transition: 0.3s 0.2s ease all;
        }
        
        .fastMenu .content .fastButtons .btn:hover .content:after {
            bottom: 7px;
            transition: 0.3s 0.1s ease all;
        }
        
        .fastMenu .content .fastButtons .btn:hover:after {
            bottom: 7px;
            transition: 0.3s ease all;
        }
        
        .fastMenu .content .fastLinks {
            display: flex;
            width: 100%;
            justify-content: space-between;
        }
        
        .fastMenu .content .fastLinks a {
            display: flex;
            position: relative;
            text-align: center;
            width: 100%;
            align-items: center;
            justify-content: center;
        }
        
        .fastMenu .content .fastLinks a:not(:last-child):before {
            content: '';
            height: 70%;
            width: 1px;
            background: #0F413C;
            opacity: 0.27;
            position: absolute;
            right: 0px;
            top: 50%;
            transform: translateY(-50%);
        }
        
        .fastMenu .content .fastLinks a img {
            max-height: 95px;
        }
        
        .fastMenuBackdrop {
            position: fixed;
            right: 0px;
            top: 0px;
            left: 0px;
            bottom: 0px;
            background: #00000033;
            opacity: 0;
            pointer-events: none;
            z-index: 2;
        }
        
        .fastMenuBackdrop.active {
            opacity: 0.1;
            pointer-events: auto;
        }
        
        section.firstSection {
            position: relative;
            height: 100vh;
        }
        
        section.firstSection .navbottom {
            position: absolute;
            left: 105px;
            right: 105px;
            bottom: 35px;
            background: linear-gradient(270deg, rgb(138 202 56 / 80%) -30%, rgb(30 125 98 / 80%) 31.01%, rgb(6 96 105 / 80%) 100%);
            display: flex;
            justify-content: space-between;
            height: 88px;
            border-radius: 60px;
            padding: 0px 25px;
        }
        
        section.firstSection .navbottom .navItem {
            display: flex;
            position: relative;
            align-items: center;
            width: 100%;
            margin-right: 12px;
        }
        
        section.firstSection .navbottom .navItem:last-child {
            margin-right: 0px;
        }
        
        section.firstSection .navbottom .navItem:not(:last-child):before {
            content: '';
            height: 70%;
            top: 50%;
            position: absolute;
            right: 0px;
            transform: translateY(-50%);
            background: #fff;
            width: 1px;
            opacity: 0.25;
        }
        
        section.firstSection .navbottom .navItem:after {
            content: '';
            position: absolute;
            left: 50%;
            bottom: -30px;
            -webkit-mask-image: url(../img/svg/caret-right.svg);
            -webkit-mask-position: top center;
            -webkit-mask-size: 100% 100%;
            -webkit-mask-repeat: no-repeat;
            transform: translateX(-50%) rotate(-90deg);
            background: #8aca38;
            width: 18.09px;
            height: 10.22px;
            opacity: 0;
            transition: 0.3s ease bottom, 0.2s ease opacity;
        }
        
        section.firstSection .navbottom .navItem:hover:after {
            bottom: -17px;
            opacity: 1;
        }
        
        section.firstSection .navbottom .navItem .iconarea {
            width: 27px;
            margin-right: 7px;
            position: absolute;
            left: 0px;
            top: 50%;
            transform: translateY(-50%);
            transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1) all;
            pointer-events: none;
        }
        
        section.firstSection .navbottom .navItem .iconarea svg.icon {
            width: 27px;
            height: 37px;
            fill: #fff;
            transition: 0.3s ease all;
        }
        
        section.firstSection .navbottom .navItem .iconarea div.icon {
            width: 27px;
            height: 37px;
            background: #fff;
            transition: 0.3s ease all;
            -webkit-mask-size: contain;
            -webkit-mask-position: center;
            -webkit-mask-repeat: no-repeat;
        }
        
        section.firstSection .navbottom .navItem:hover .iconarea {
            top: 0%;
            width: 60px;
            left: 100%;
            transform: translateY(-50%) translateX(-100%);
            pointer-events: none;
        }
        
        section.firstSection .navbottom .navItem:hover .iconarea svg.icon {
            width: 60px;
            height: 65px;
            fill: #8aca38;
            filter: drop-shadow(0px 20px 20px #0f413c);
        }
        
        section.firstSection .navbottom .navItem:hover .iconarea div.icon {
            width: 60px;
            height: 65px;
            background: #8aca38;
            filter: drop-shadow(0px 20px 20px #0f413c);
        }
        
        section.firstSection .navbottom .navItem .text {
            font-weight: 600;
            font-size: 18px;
            text-align: left;
            color: #8aca38;
            transition: 0.3s ease all;
            display: block;
            line-height: 18px;
            left: 34px;
            position: relative;
            transition: 0.3s ease all;
        }
        
        section.firstSection .navbottom .navItem .text:before {
            content: '';
            height: 1px;
            width: 0px;
            background: #8ACA38;
            position: absolute;
            left: 0px;
            bottom: -7px;
            opacity: 0;
            pointer-events: none;
            transition: 0.3s ease all;
        }
        
        section.firstSection .navbottom .navItem:hover .text:before {
            opacity: 1;
            width: 29px;
        }
        
        section.firstSection .navbottom .navItem:hover .text {
            left: 0px;
        }
        
        section.firstSection .navbottom .navItem .text .subTitle {
            display: block;
            font-weight: 300;
            font-size: 14px;
            color: #fff;
        }
        
        section.firstSection .storythumbs {
            position: absolute;
            right: 110px;
            bottom: 160px;
        }
        
        section.firstSection .storythumbs .title {
            font-weight: 600;
            font-size: 18px;
            line-height: 18px;
            text-align: right;
            color: #fff;
            margin-right: 5px;
            margin-bottom: 15px;
        }
        
        section.firstSection .storythumbs .list {
        }
        
        section.firstSection .storythumbs .list .item {
            width: 60px;
            height: 60px;
            border-radius: 60px;
            display: inline-block;
            position: relative;
            margin-right: 8px;
        }
        
        section.firstSection .storythumbs .list .item:before {
            content: '';
            position: absolute;
            left: 0px;
            right: 0px;
            top: 0px;
            bottom: 0px;
            background: #8aca38;
            border: 2px solid #066069;
            filter: drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.84));
            transition: 0.3s ease all, 0.1s ease opacity;
            opacity: 0;
            border-radius: 60px;
        }
        
        section.firstSection .storythumbs .list .item img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            height: 100%;
            width: 100%;
            border: 3px solid #fff;
            border-radius: 60px;
        }
        
        section.firstSection .storythumbs .list .item:hover:before {
            opacity: 0.3;
            left: -8px;
            right: -8px;
            top: -8px;
            bottom: -8px;
        }
        
        section.firstSection .swiper-pagination {
            position: absolute;
            right: 65px;
            top: 43%;
            transform: translateY(-50%);
            z-index: 1;
        }
        
        section.firstSection .swiper-pagination .swiper-pagination-bullet {
            width: 21.91px;
            height: 21.91px;
            background: #fff;
            opacity: 1;
            margin-left: 6px;
            transition: 0.3s ease all;
        }
        
        section.firstSection .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
            background: #066069;
        }
        
        section.firstSection .right-widget {
            position: absolute;
            right: 65px;
            top: 58%;
            transform: translateY(-50%);
            text-align: center;
            display: flex;
        }
        
        section.firstSection .right-widget .request {
            width: 70px;
            display: block;
            margin-bottom: 20px;
            margin-left: 12px;
        }
        
        section.firstSection .right-widget .request .icon-container {
            height: 70px;
            width: 100%;
            border-radius: 8px;
            background: #066069;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 6px;
        }
        
        section.firstSection .right-widget .request .icon-container .icon {
            width: 38.2px;
            height: 38.35px;
            fill: #8aca38;
        }
        
        section.firstSection .right-widget .request:hover .icon-container {
            background-color: #8aca38;
        }
        
        section.firstSection .right-widget .request:hover .icon-container .icon {
            fill: #fff;
        }
        
        section.firstSection .right-widget .request .text {
            font-family: proxima-nova, sans-serif;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            text-align: center;
            color: #fff;
        }
        
        /*section.firstSection .request {
             position: absolute;
             right: 65px;
             display: inline-block;
             top: 57%;
             transform: translateY(-50%);
             text-align: right;
         }
        section.firstSection .request:before {
            content: '';
            position: absolute;
            left: -30px;
            top: -20px;
            right: -20px;
            bottom: -30px;
            z-index: -1;
            background: #6ab453;
            opacity: 0;
            transition: 0.3s ease all;
            pointer-events: none;
        }
        section.firstSection .request:hover:before {
            opacity: 0.42;
        }
        section.firstSection .request:after {
            content: '';
            position: absolute;
            left: -30px;
            right: -20px;
            bottom: -30px;
            height: 0px;
            background: #1e7d62;
            filter: drop-shadow(0px 10px 2px rgba(0, 0, 0, 0.53));
            transition: 0.3s ease height;
            pointer-events: none;
        }
        section.firstSection .request:hover:after {
            opacity: 1;
            height: 12px;
        }
        section.firstSection .request .text {
            font-weight: 600;
            font-size: 18px;
            line-height: 18px;
            text-align: right;
            color: #fff;
            display: block;
            margin-bottom: 10px;
        }
        section.firstSection .request img {
        }*/
        section.firstSection .mayor {
            position: absolute;
            left: 120px;
            bottom: 160px;
        }
        
        section.firstSection .mayor img {
            position: relative;
            left: -90px;
            pointer-events: none;
        }
        
        section.firstSection .mayor .name {
            font-size: 20px;
            font-weight: bold;
            color: #fff;
            line-height: 16px;
        }
        
        section.firstSection .mayor .title {
            color: #fff;
            font-size: 15px;
            line-height: 16px;
        }
        
        section.firstSection .mayor .social {
            display: flex;
            margin-top: 10px;
        }
        
        section.firstSection .mayor .social a {
            margin-right: 5px;
            display: inline-block;
        }
        
        section.firstSection .mayor .social a .icon {
            width: 30.66px;
            height: 30.61px;
            fill: #fff;
            transition: 0.3s ease all;
        }
        
        section.firstSection .mayor .social a:hover .icon {
            fill: #8aca38;
        }
        
        section.firstSection .searchForm {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            max-width: 850px;
            width: 100%;
            z-index: 2;
        }
        
        section.firstSection .searchForm .slogan {
            font-size: 75px;
            letter-spacing: -0.04em;
            text-align: left;
            color: #fff;
            margin-bottom: 40px;
        }
        
        section.firstSection .searchForm .slogan b {
            font-weight: bold;
        }
        
        section.firstSection .searchForm .slogan span {
            border-bottom: 1.5px solid #fff;
            line-height: 67px;
            display: inline-block;
        }
        
        section.firstSection .searchForm .searchFormArea {
            margin-bottom: 85px;
            position: relative;
            top: 0px;
        }
        
        section.firstSection .searchForm .searchFormArea .form-group {
            position: relative;
        }
        
        section.firstSection .searchForm .searchFormArea .form-group input::-webkit-input-placeholder {
            font-weight: 300;
            font-size: 18px;
            text-align: left;
            color: #fff;
        }
        
        section.firstSection .searchForm .searchFormArea .form-group input:-ms-input-placeholder {
            font-weight: 300;
            font-size: 18px;
            text-align: left;
            color: #fff;
        }
        
        section.firstSection .searchForm .searchFormArea .form-group input::placeholder {
            font-weight: 300;
            font-size: 18px;
            text-align: left;
            color: #fff;
        }
        
        section.firstSection .searchForm .searchFormArea .form-group input {
            width: 100%;
            height: 68px;
            border: 0px;
            /* Note: currently only Safari supports backdrop-filter */
            padding: 18px;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            font-weight: 300;
            font-size: 18px;
            text-align: left;
            color: #fff;
            background: transparent;
            /* Note: currently only Safari supports backdrop-filter */
            backdrop-filter: blur(30px);
            --webkit-backdrop-filter: blur(30px);
            background-color: rgba(255, 255, 255, 0.15);
        }
        
        section.firstSection .searchForm .searchFormArea .form-group button {
            position: absolute;
            background: transparent;
            border: 0px;
            width: 33.59px;
            height: 34.53px;
            right: 18px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            padding: 0px;
        }
        
        section.firstSection .searchForm .searchFormArea .form-group button .icon {
            width: 33.59px;
            height: 34.53px;
            fill: #fff;
        }
        
        section.firstSection .searchForm .searchFormArea .buttons {
            background: #6ab453;
            filter: drop-shadow(0px 20px 20px rgba(0, 0, 0, 0.38));
            display: flex;
            justify-content: space-evenly;
            margin-top: -1px;
        }
        
        section.firstSection .searchForm .searchFormArea .buttons .btn {
            background: transparent;
            border: 0px;
            font-weight: 300;
            font-size: 15px;
            letter-spacing: 0.02em;
            line-height: 22px;
            text-align: left;
            color: #fff;
            cursor: pointer;
            padding: 11px 0px;
            position: relative;
            flex-grow: 1;
            flex-shrink: 1;
            flex-basis: 0;
            text-align: center;
        }
        
        section.firstSection .searchForm .searchFormArea .buttons .btn.text {
            text-transform: uppercase;
            color: #066069;
            cursor: default;
        }
        
        section.firstSection .searchForm .searchFormArea .buttons .btn > span {
            display: block;
            position: relative;
        }
        
        section.firstSection .searchForm .searchFormArea .buttons .btn:not(:last-child) > span:Before {
            content: '';
            width: 1px;
            background: #000;
            position: absolute;
            right: 0px;
            top: 50%;
            height: 90%;
            transform: translateY(-50%);
            opacity: 0.1;
        }
        
        section.firstSection .searchForm .searchFormArea .buttons .btn:hover {
            color: #066069;
        }
        
        section.firstSection .searchForm .searchFormArea .buttons .btn:not(.text):before {
            content: '';
            height: 23px;
            background: #066069;
            position: absolute;
            left: 0px;
            right: 0px;
            top: 100%;
            opacity: 0;
            pointer-events: none;
        }
        
        section.firstSection .searchForm .searchFormArea .buttons .btn:not(.text):after {
            content: '';
            -webkit-mask-image: url(../img/svg/caret-right.svg);
            -webkit-mask-position: top center;
            -webkit-mask-size: 100% 100%;
            -webkit-mask-repeat: no-repeat;
            position: absolute;
            left: 50%;
            bottom: -22px;
            background: #fff;
            width: 15.97px;
            height: 9.03px;
            transform: translateX(-50%) rotate(-90deg);
            transition: 0.3s ease bottom;
            opacity: 0;
            pointer-events: none;
        }
        
        section.firstSection .searchForm .searchFormArea .buttons .btn:hover:before {
            content: '';
            opacity: 1;
            pointer-events: auto;
        }
        
        section.firstSection .searchForm .searchFormArea .buttons .btn:hover:after {
            content: '';
            bottom: -17px;
            opacity: 1;
            pointer-events: auto;
        }
        
        section.firstSection .searchForm .searchFormArea {
        }
        
        section.firstSection .searchForm .searchFormArea .searchAjax {
            position: absolute;
            width: 100%;
            left: 0px;
            right: 0px;
            top: 67px;
            z-index: 2;
            background: linear-gradient(
                    270deg, rgb(138, 202, 56) -30%, rgb(30 125 98) 31.01%, rgb(6 96 105) 100%);
            opacity: 0;
            pointer-events: none;
        }
        
        section.firstSection .searchForm .searchFormArea .searchAjax.active {
            opacity: 1;
            pointer-events: auto;
        }
        
        section.firstSection .searchForm .searchFormArea .searchAjax .list {
            max-height: 200px;
            overflow: hidden;
            overflow-y: auto;
            padding: 10px 0px 10px 0px;
        }
        
        section.firstSection .searchForm .searchFormArea .searchAjax .list a {
            display: block;
            color: #fff;
            padding: 15px 20px;
            border-bottom: 1px solid #ffffff40;
            font-size: 15px;
            max-width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        
        section.firstSection .searchForm .searchFormArea .searchAjax .list a b {
            font-weight: 600;
            display: inline-block;
            margin-right: 5px;
        }
        
        section.firstSection .searchForm .searchFormArea .searchAjax .list a span {
        }
        
        section.firstSection .searchForm .searchFormArea .searchAjax .list a:hover {
            background: #00000017;
        }
        
        section.firstSection .searchForm .searchFormArea .searchAjax .list a:last-child {
            border: 0px;
        }
        
        section.firstSection .weather {
            position: absolute;
            right: 65px;
            top: 25%;
            transform: translateY(-50%);
            z-index: 1;
            text-align: right;
        }
        
        section.firstSection .weather .date {
            font-weight: 600;
            font-size: 18px;
            line-height: 18px;
            color: #8aca38;
            transition: 0.1s 0.1s ease all;
        }
        
        section.firstSection .weather .locate {
            font-weight: 600;
            font-size: 18px;
            line-height: 18px;
            color: #fff;
            transition: 0.1s 0.1s ease all;
        }
        
        section.firstSection .weather .text {
            font-size: 18px;
            line-height: 18px;
            color: #fff;
            transition: 0.1s 0.1s ease all;
        }
        
        section.firstSection .weather .wther {
            margin-top: 10px;
        }
        
        section.firstSection .weather .wther .wi {
            font-size: 30px;
            color: #fff;
            position: absolute;
            right: 0px;
            bottom: -35px;
            transition: 0.5s ease all;
        }
        
        section.firstSection .weather .wther .deg {
            font-weight: normal;
            font-size: 24px;
            text-align: right;
            color: #fff;
            position: absolute;
            bottom: -60px;
            right: 0px;
            transition: 0.5s ease all;
        }
        
        section.firstSection .weather .wther .weathertext {
            opacity: 0;
            pointer-events: none;
            font-size: 18px;
            text-align: right;
            color: #fff;
            position: absolute;
            text-align: center;
            width: 120px;
            left: 50%;
            transform: translateX(-50%);
            bottom: -5px;
            transition: 0.1s ease all;
        }
        
        section.firstSection .weather .wther:before {
            content: '';
        }
        
        section.firstSection .weather:hover .wther:before {
            content: '';
        }
        
        section.firstSection .weather:hover .date {
            opacity: 0;
            transition: 0.1s ease all;
        }
        
        section.firstSection .weather:hover .locate {
            opacity: 0;
            transition: 0.1s ease all;
        }
        
        section.firstSection .weather:hover .text {
            opacity: 0;
            transition: 0.1s ease all;
        }
        
        section.firstSection .weather:hover .wther {
        }
        
        section.firstSection .weather:hover .wther .wi {
            font-size: 50px;
            right: 50px;
            transform: translateX(50%);
            bottom: 15px;
        }
        
        section.firstSection .weather:hover .wther .deg {
            font-size: 50px;
            transform: translateX(50%);
            bottom: 125%;
            right: 50px;
        }
        
        section.firstSection .weather:hover .wther .weathertext {
            opacity: 1;
            transition: 0.5s 0.2s ease all;
        }
        
        section.firstSection .weather .circular {
            -webkit-transform-origin: center center;
            -ms-transform-origin: center center;
            transform-origin: center center;
            position: absolute;
            margin: auto;
            width: 200px;
            height: 200px;
            -webkit-transform: translate(-50%, -50%) rotate(360deg);
            left: 50%;
            transform: translate(-50%, -50%) rotate(360deg);
            top: 50%;
            opacity: 0;
            transition: 0.5s ease all;
        }
        
        section.firstSection .weather .path {
            stroke: #fff;
            stroke-dasharray: 100, 100;
            stroke-dashoffset: 0;
            stroke-linecap: round;
        }
        
        section.firstSection .weather:hover .circular {
            opacity: 1;
            -webkit-transform: translate(-50%, -50%) rotate(308deg);
            transform: translate(-50%, -50%) rotate(
                    308deg
            );
        }
        
        section.firstSection .stories {
            background: linear-gradient(316deg, rgb(202 192 56 / 98%) 0%, rgb(198 213 138 / 98%) -27.28%, rgb(6 96 105 / 98%) 70%);
            filter: drop-shadow(0px 75px 99px rgba(0, 0, 0, 0.9));
            position: fixed;
            left: 0px;
            top: 0px;
            bottom: 0px;
            right: 0px;
            z-index: 4;
            opacity: 0;
            pointer-events: none;
            transition: 0.3s ease all;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            padding-top: 80px;
        }
        
        section.firstSection .stories.active {
            pointer-events: auto;
            opacity: 1;
        }
        
        section.firstSection .stories:before {
            content: '';
            position: absolute;
            left: 90px;
            top: -190px;
            bottom: 0px;
            right: 0px;
            -webkit-mask-image: url(../img/svg/meramBel.svg);
            -webkit-mask-repeat: no-repeat;
            -webkit-mask-size: 70% auto;
            opacity: 0.25;
            background: #066069;
            mix-blend-mode: multiply;
        }
        
        section.firstSection .stories .content {
            position: relative;
            z-index: 1;
            display: block;
            height: calc(100vh - 260px);
        }
        
        section.firstSection .stories .close:hover .icon {
            fill: #8ACA38;
        }
        
        section.firstSection .stories .close {
            position: absolute;
            right: 30px;
            top: 30px;
            width: 60px;
            height: 60px;
            border-radius: 60px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        section.firstSection .stories .close .icon {
            width: 30px;
            height: 30px;
            fill: #fff;
            transition: 0.3s ease all;
        }
        
        section.firstSection .stories .story {
            min-height: 100%;
            position: relative;
            text-align: center;
            height: 100%;
            /*padding-bottom: 157%;*/
        }
        
        section.firstSection .stories .swiper-story .swiper-slide.swiper-slide-active .img img {
            opacity: 1;
        }
        
        section.firstSection .stories .story .img img {
        /*    position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            min-width: 100%;
            opacity: 0.3;
            min-height: 100%;*/
            transition: 0.3s ease all;
        }
        
        section.firstSection .stories .swiper-story .swiper-slide.swiper-slide-active .img {
            box-shadow: 0px 32px 99px rgba(0, 0, 0, 0.86);
            background: #fff0;
        }
        
        section.firstSection .stories .story .img {
        /*    background: #fff;
            position: absolute;
            left: 0px;
            right: 0px;
            top: 0px;*/
            height: 100%;
            transition: 0.3s ease all;
            background: #fff;
            overflow: hidden;
            box-shadow: 0px 32px 99px #000;
            border-radius: 20px;
            width: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        section.firstSection .stories .story .text {
            opacity: 0;
            pointer-events: none;
            position: relative;
        }
        
        section.firstSection .stories .story .text2 {
            color: #fff;
            font-size: 45px;
            left: 50%;
            transform: scale(0) translateX(-50%);
            text-align: center;
            white-space: nowrap;
            position: absolute;
            transition: 0.3s ease all;
            opacity: 0;
            bottom: -100px;
        }
        
        section.firstSection .stories .swiper-story .swiper-slide.swiper-slide-active .text2 {
            transform: scale(1) translateX(-50%);
            top: unset;
            bottom: -100px;
            opacity: 1;
        }
        
        section.firstSection .stories .swiper-story .swiper-slide {
            opacity: 0;
        }
        
        section.firstSection .stories .swiper-story .swiper-slide.slide-show {
            opacity: 1;
        }
        
        section.firstSection .stories .swiper-story .swiper-slide {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        section.firstSection .stories .swiper-story {
            overflow: unset;
        }
        
        section.firstSection .stories .swiper-story .swiper-slide.swiper-slide-active {
        }
        
        section .gotoAfterSection {
            width: 54px;
            height: 54px;
            border-radius: 27px;
            background: linear-gradient(#8aca38 0%, #1e7d62 41.01%, #066069 100%);
            position: absolute;
            right: 27px;
            bottom: 52px;
            cursor: pointer;
            overflow: hidden;
            z-index: 2;
        }
        
        section .gotoAfterSection > .icon {
            height: 15.97px;
            width: 9.03px;
            fill: #fff;
            transform: translate(-50%, -50%) rotate(90deg);
            position: absolute;
            left: 50%;
            top: 50%;
            opacity: 1;
            transition: 0.3s ease all;
        }
        
        section .gotoAfterSection:hover > .icon {
            opacity: 0;
            top: 100%;
        }
        
        section .gotoAfterSection .hover {
            /* display: none; */
            position: absolute;
            transform: translate(-50%, -50%) rotate(90deg);
            left: 50%;
            top: 0%;
            display: flex;
            opacity: 0;
            transition: 0.3s ease all;
        }
        
        section .gotoAfterSection:hover .hover {
            opacity: 1;
            top: 50%;
        }
        
        section .gotoAfterSection .hover > .icon {
            height: 21.42px;
            width: 12.11px;
            fill: #fff;
            display: block;
        }
        
        section .gotoBeforeSection {
            width: 54px;
            height: 54px;
            border-radius: 27px;
            background: linear-gradient(#8aca38 0%, #1e7d62 41.01%, #066069 100%);
            position: absolute;
            right: 27px;
            bottom: 102px;
            cursor: pointer;
            overflow: hidden;
            z-index: 2;
            transform: scale(0.5) rotate(180deg);
            transition: 0.3s ease all;
        }
        
        section .gotoBeforeSection:hover {
            transform: scale(1) rotate(180deg);
            bottom: 112px;
        }
        
        section .gotoBeforeSection > .icon {
            height: 15.97px;
            width: 9.03px;
            fill: #fff;
            transform: translate(-50%, -50%) rotate(90deg);
            position: absolute;
            left: 50%;
            top: 50%;
            opacity: 1;
            transition: 0.3s ease all;
        }
        
        section .gotoBeforeSection:hover > .icon {
            opacity: 0;
            top: 100%;
        }
        
        section .gotoBeforeSection .hover {
            /* display: none; */
            position: absolute;
            transform: translate(-50%, -50%) rotate(90deg);
            left: 50%;
            top: 0%;
            display: flex;
            opacity: 0;
            transition: 0.3s ease all;
        }
        
        section .gotoBeforeSection:hover .hover {
            opacity: 1;
            top: 50%;
        }
        
        section .gotoBeforeSection .hover > .icon {
            height: 21.42px;
            width: 12.11px;
            fill: #fff;
            display: block;
        }
        
        section.mayorMain {
            min-height: 100vh;
            position: relative;
        }
        
        section.mayorMain .background {
            position: absolute;
            left: 0px;
            right: 0px;
            top: 0px;
            bottom: 0px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            z-index: -1;
        }
        
        section.mayorMain .slogan {
            font-size: 75px;
            letter-spacing: -0.04em;
            line-height: 68px;
            text-align: left;
            color: #fff;
            max-width: 320px;
            left: 70px;
            position: absolute;
            top: 210px;
        }
        
        section.mayorMain .text {
            font-weight: 300;
            font-size: 22px;
            line-height: 32px;
            text-align: left;
            color: #fff;
            max-width: 450px;
            position: absolute;
            left: 70px;
            top: 50%;
        }
        
        section.mayorMain .buttons {
            position: absolute;
            bottom: 52px;
            right: 120px;
            display: flex;
        }
        
        section.mayorMain .buttons .btn {
            font-size: 22px;
            letter-spacing: 0.01em;
            text-align: left;
            color: #066069;
            background: #fff;
            border-radius: 26px;
            padding: 15px 35px;
            margin-left: 10px;
            display: block;
            transition: 0.3s ease all;
        }
        
        section.mayorMain .buttons .btn:hover {
            background: #066069;
            color: #fff;
        }
        
        .tab-content > .tab-pane {
            opacity: 0;
            pointer-events: none;
            display: block;
        }
        
        .tab-content > .active {
            opacity: 1;
            pointer-events: auto;
        }
        
        .fade {
            opacity: 0;
            transition: opacity .15s linear;
        }
        
        .fade.show {
            opacity: 1;
        }
        
        section.projectMain {
            min-height: 100vh;
            position: relative;
            overflow: hidden;
            z-index: 1;
        }
        
        section.projectMain .bigMap {
            position: absolute;
            left: 0px;
            right: 0px;
            top: 0px;
            bottom: 0px;
            z-index: 1;
            height: calc(100vh - 350px);
        }
        
        section.projectMain .bigMap:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 2;
            left: 0px;
            background: url(../img/gradient1.png);
            pointer-events: none;
            background-repeat: no-repeat;
            background-position: left bottom;
            opacity: 0.5;
        }
        
        section.projectMain .bigMap #projectMap {
            width: 100%;
            height: 100%;
            z-index: 1;
        }
        
        section.projectMain .bigMap #projectMap2 {
            width: 100%;
            height: 100%;
            z-index: 1;
        }
        
        section.projectMain .bigMap #projectMap .gm-style-iw-c {
            padding: 20px !important;
            width: 300px;
            display: block;
        }
        
        section.projectMain .bigMap #projectMap .gm-style-iw-c .gm-style-iw-d {
            padding: 0px;
            margin: 0px;
            height: unset !important;
            width: 100% !important;
            display: block !important;
            overflow: unset !important;
        }
        
        section.projectMain .bigMap #projectMap .gm-style-iw-c #hook {
            text-align: center;
        }
        
        section.projectMain .bigMap #projectMap .gm-style-iw-c #hook .title {
            display: block;
            color: #065961;
            font-weight: 600;
            text-align: center;
            font-size: 16px;
            margin-bottom: 10px;
        }
        
        section.projectMain .bigMap #projectMap .gm-style-iw-c #hook .btn {
            border: 0px;
            background: linear-gradient(#8aca38 0%, #1e7d62 41.01%, #066069 100%);
            width: calc(50% - 3px);
            margin: 0px 1px;
            color: #fff;
            font-size: 17px;
            padding: 5px 10px;
            border-radius: 3px;
            cursor: pointer;
        }
        
        section.projectMain .bigMap #projectMap .gm-style-iw-c #hook .btn.detay {
        }
        
        section.projectMain .bigMap #projectMap .gm-style-iw-c #hook .btn.yolTarifi {
        }
        
        section.projectMain .content {
            position: absolute;
            left: 0px;
            right: 0px;
            bottom: 0px;
            z-index: 2;
        }
        
        section.projectMain .content > .title {
            font-size: 50px;
            text-align: left;
            color: #fff;
            font-weight: 600;
            padding: 24px;
        }
        
        section.projectMain .content .tabArea {
        }
        
        section.projectMain .content .tabArea .nav {
            padding: 0px 24px;
            display: inline-flex;
        }
        
        section.projectMain .content .tabArea .nav-item {
            font-weight: 600;
            font-size: 20px;
            text-align: left;
            color: #fff;
            border-radius: 6px 6px 0px 0px;
            background: #066069;
            position: relative;
            z-index: 1;
            padding: 21px 30px 33px;
            display: block;
            margin-right: 10px;
            bottom: -14px;
            transition: 0.3s ease padding, 0.3s ease bottom;
        }
        
        section.projectMain .content .tabArea .nav-item:not(.active):hover {
            bottom: 0px;
            padding: 27px 30px 27px;
        }
        
        section.projectMain .content .tabArea .nav-item.active {
            color: #066069;
            background: #fff;
            z-index: 6;
            transition: 0.3s ease background, 0.3s ease color, 0.1s 0.2s z-index, 0.3s ease padding, 0.3s ease bottom;
        }
        
        section.projectMain .content .tabArea .tab-content {
            position: relative;
            height: 350px;
        }
        
        section.projectMain .content .tabArea .tab-content .tab-pane {
            position: absolute;
            z-index: 4;
            box-shadow: 0px 3px 47px rgba(0, 0, 0, 0.3);
            background: #fff;
            padding: 40px 40px;
            height: 100%;
            left: 0px;
            right: 0px;
            top: 0px;
            bottom: 0px;
        }
        
        section.corporate .tabArea {
        }
        
        section.corporate .tabArea .nav {
            padding: 0px 24px;
            display: inline-flex;
        }
        
        section.corporate .tabArea .nav-item {
            font-weight: 600;
            font-size: 20px;
            text-align: left;
            color: #fff;
            border-radius: 6px 6px 0px 0px;
            background: #066069;
            position: relative;
            z-index: 1;
            padding: 21px 30px 33px;
            display: block;
            margin-right: 10px;
            bottom: -14px;
            transition: 0.3s ease padding, 0.3s ease bottom;
        }
        
        section.corporate .tabArea .nav-item:not(.active):hover {
            bottom: 0px;
            padding: 27px 30px 27px;
        }
        
        section.corporate .tabArea .nav-item.active {
            color: #066069;
            background: #fff;
            z-index: 6;
            transition: 0.3s ease background, 0.3s ease color, 0.1s 0.2s z-index, 0.3s ease padding, 0.3s ease bottom;
        }
        
        section.corporate .tabArea .tab-content {
            position: relative;
            height: 350px;
        }
        
        section.corporate .tabArea .tab-content .tab-pane {
            position: absolute;
            z-index: 4;
            box-shadow: 0px 3px 47px rgba(0, 0, 0, 0.3);
            background: #fff;
            padding: 40px 40px;
            height: 100%;
            left: 0px;
            right: 0px;
            top: 0px;
            bottom: 0px;
        }
        
        section.projectMain .project-list {
        }
        
        section.projectMain .project-list .project-item {
            display: block;
            position: relative;
        }
        
        section.projectMain .project-list .project-item.active {
            opacity: 1;
        }
        
        section.projectMain .project-list .project-item.inactive {
            opacity: 0.3;
        }
        
        section.projectMain .project-list .project-item .img:before {
            content: '';
            position: absolute;
            left: 0px;
            right: 0px;
            top: 0px;
            bottom: 0px;
            background: #000;
            opacity: 0;
            z-index: 1;
            transition: 0.3s ease all;
        }
        
        section.projectMain .project-list .project-item .img:after {
            content: '';
            -webkit-mask-image: url(../img/svg/caret-right.svg);
            -webkit-mask-position: top center;
            -webkit-mask-size: 100% 100%;
            -webkit-mask-repeat: no-repeat;
            background: #8aca38;
            position: absolute;
            bottom: 10px;
            right: 100%;
            z-index: 2;
            width: 26.03px;
            height: 14.71px;
            transition: 0.3s ease all;
            opacity: 0;
        }
        
        section.projectMain .project-list .project-item .img {
            height: 150px;
            position: relative;
            overflow: hidden;
            border-radius: 7px;
            margin-bottom: 10px;
        }
        
        section.projectMain .project-list .project-item:hover .img:before {
            opacity: 0.5;
        }
        
        section.projectMain .project-list .project-item:hover .img:after {
            right: 10px;
            opacity: 1;
        }
        
        section.projectMain .project-list .project-item .img img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            min-width: 100%;
            min-height: 100%;
            max-width: 100%;
        }
        
        section.projectMain .project-list .project-item .text {
            font-size: 18px;
            text-align: left;
            color: #727272;
        }
        
        section.projectMain .project-list .project-item:hover .text {
            color: #8aca38;
        }
        
        section.projectMain .projectScroll {
            height: 11px;
            max-width: 783px;
            border-radius: 5.5px;
            background: rgb(153 153 153 / 50%);
            position: relative;
            margin: 0 auto;
            display: flex;
            align-items: center;
            margin-top: -40px;
            margin-bottom: 50px;
            z-index: 4;
        }
        
        section.projectMain .projectScroll .swiper-scrollbar-drag {
            height: 19px;
            border-radius: 20px;
            background: #8aca38;
            opacity: 1;
            cursor: pointer;
        }
        
        section.projectMain .quickProjectDetail {
            position: absolute;
            bottom: 100%;
            z-index: 3;
            background: #fff;
            opacity: 0;
            pointer-events: none;
            width: 100%;
        }
        
        section.projectMain .quickProjectDetail.active {
            opacity: 1;
            pointer-events: auto;
        }
        
        section.projectMain .quickProjectDetail .close {
            position: absolute;
            top: 35px;
            right: 40px;
            cursor: pointer;
        }
        
        section.projectMain .quickProjectDetail .close .icon {
            width: 29.9px;
            height: 29.89px;
            fill: #066069;
            transition: 0.3s ease all;
        }
        
        section.projectMain .quickProjectDetail .close:hover .icon {
            fill: #8aca38;
        }
        
        section.projectMain .quickProjectDetail .content-flex {
            display: flex;
        }
        
        section.projectMain .quickProjectDetail .img {
            width: 50%;
            position: relative;
            overflow: hidden;
            height: 350px;
        }
        
        section.projectMain .quickProjectDetail .img img {
            min-width: 100%;
            min-height: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            max-width: unset;
        }
        
        section.projectMain .quickProjectDetail .img .status {
            background: #066069;
            position: absolute;
            right: 0px;
            top: 0px;
            border-radius: 5px;
            padding: 21px 23px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        section.projectMain .quickProjectDetail .img .status .text {
            font-weight: 600;
            font-size: 18px;
            letter-spacing: 0.02em;
            line-height: 22px;
            text-align: left;
            color: #fff;
        }
        
        section.projectMain .quickProjectDetail .img .status .text span {
            font-size: 18px;
            letter-spacing: 0.02em;
            line-height: 22px;
            text-align: left;
            color: #8aca38;
            display: block;
            font-weight: 300;
        }
        
        section.projectMain .quickProjectDetail .img .status .icon {
            width: 40.32px;
            height: 47px;
            fill: #8aca38;
            margin-left: 10px;
        }
        
        section.projectMain .quickProjectDetail .detail {
            width: 50%;
            padding: 35px 40px;
        }
        
        section.projectMain .quickProjectDetail .detail .title {
            font-weight: 600;
            font-size: 24px;
            line-height: 24px;
            text-align: left;
            color: #066069;
            margin-bottom: 20px;
        }
        
        section.projectMain .quickProjectDetail .detail .text {
            font-weight: 300;
            font-size: 16px;
            letter-spacing: 0.02em;
            line-height: 24px;
            text-align: left;
            color: #999;
            margin-bottom: 40px;
        }
        
        section.projectMain .quickProjectDetail .text-center {
            text-align: center;
        }
        
        section.projectMain .quickProjectDetail .detail .btn {
            font-weight: 600;
            font-size: 16px;
            letter-spacing: 0.01em;
            text-align: left;
            color: #fff;
            border-radius: 17.5px;
            background: rgba(153, 153, 153, 0.5);
            padding: 8px 29px;
        }
        
        section.projectMain .quickProjectDetail .detail .btn:hover {
            background: #8aca38;
        }
        
        section.newsMain {
            min-height: 100vh;
            position: relative;
            overflow: hidden;
        }
        
        section.newsMain .titlebar {
            background: #fff;
            height: 250px;
            padding: 90px 90px;
            display: flex;
            justify-content: end;
            flex-direction: column-reverse;
            margin-bottom: -70px;
        }
        
        section.newsMain .titlebar .title {
            font-weight: 600;
            font-size: 32px;
            letter-spacing: -0.04em;
            color: #066069;
        }
        
        section.newsMain .news-container {
            padding: 0px 90px;
        }
        
        section.newsMain .newsSliderTop {
        }
        
        section.newsMain .newsSliderTop .newsArrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 2;
            right: 20px;
            cursor: pointer;
        }
        
        section.newsMain .newsSliderTop .newsArrow .icon {
            height: 43.02px;
            width: 24.32px;
            fill: #fff;
            filter: drop-shadow(1px 29px 43px rgba(0, 0, 0, 0.48));
        }
        
        section.newsMain .newsSliderTop .newsArrow.prev {
            right: unset;
            left: 20px;
        }
        
        section.newsMain .newsSliderTop .newsArrow.prev .icon {
            transform: rotate(180deg);
        }
        
        section.newsMain .newsSliderTop .newsArrow.next {
        }
        
        section.newsMain .newsSliderTop .swiper-wrapper {
            height: unset;
        }
        
        section.newsMain .newsSliderTop .swiper-wrapper .swiper-slide {
            height: unset;
        }
        
        section.newsMain .newsSliderTop .news-item {
            display: block;
            position: relative;
        }
        
        section.newsMain .newsSliderTop .news-item .img {
            position: relative;
            padding-bottom: 62%;
            overflow: hidden;
            border-radius: 6px;
            width: 100%;
            z-index: 1;
            background: #000;
        }
        
        section.newsMain .newsSliderTop .news-item .img img {
            max-width: fit-content;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            min-height: 100%;
            min-width: 100%;
            width: 100%;
        }
        
        section.newsMain .newsSliderTop .news-item .img:before {
            content: '';
            background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.09) 33.71%, #000 100%);
            opacity: 0.9;
            position: absolute;
            left: 0px;
            right: 0px;
            top: 0px;
            bottom: 0px;
            z-index: 1;
        }
        
        section.newsMain .newsSliderTop .news-item .content {
            position: absolute;
            left: 20px;
            bottom: 60px;
            z-index: 2;
        }
        
        section.newsMain .newsSliderTop .news-item .content .title {
            font-weight: 600;
            font-size: 24px;
            letter-spacing: -0.02em;
            line-height: 24px;
            color: #fff;
            position: relative;
            left: -100vw;
            transition: 0.3s ease all;
        }
        
        section.newsMain .newsSliderTop .swiper-slide-active .news-item .content .title {
            left: 0px;
        }
        
        section.newsMain .newsSliderTop .news-item .content .text {
            font-size: 16px;
            font-weight: 300;
            color: #fff;
            line-height: 24px;
            transition: 0.3s 0.1s ease all;
            left: -100vw;
            position: relative;
        }
        
        section.newsMain .newsSliderTop .swiper-slide-active .news-item .content .text {
            left: 0px;
        }
        
        section.newsMain .newsSliderTop .news-item .content .date {
            font-weight: 300;
            font-size: 12px;
            letter-spacing: -0.02em;
            line-height: 28px;
            color: #fff;
            transition: 0.3s 0.3s ease all;
            left: -100vw;
            position: relative;
        }
        
        section.newsMain .newsSliderTop .swiper-slide-active .news-item .content .date {
            left: 0px;
        }
        
        section.newsMain .newsSliderThumb {
            padding: 0px 11px;
            margin-top: -45px;
            height: 66px;
        }
        
        section.newsMain .newsSliderThumb .swiper-slide {
            opacity: 1;
            cursor: pointer;
            border-radius: 7px;
            background: #fff;
            overflow: hidden;
        }
        
        section.newsMain .newsSliderThumb .swiper-slide .img {
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            height: 66px;
            opacity: 0.5;
            transition: 0.3s ease all;
        }
        
        section.newsMain .newsSliderThumb .swiper-slide.swiper-slide-thumb-active .img {
            opacity: 1;
        }
        
        section.newsMain .twitterContent {
            background: #fff;
            border: 1px solid rgba(153, 153, 153, 0.3);
            filter: drop-shadow(0px 30px 30px rgba(0, 0, 0, 0.1));
            border-radius: 6px;
            padding: 48px 78px 48px 42px;
            min-height: 480px;
            position: relative;
            margin-bottom: 12px;
        }
        
        section.newsMain .twitterContent .twitterprofile {
            position: relative;
            padding-left: 55px;
            margin-bottom: 75px;
        }
        
        section.newsMain .twitterContent .twitterprofile:before {
            content: '';
            background-image: url(../img/twitter.png);
            width: 47px;
            height: 47px;
            position: absolute;
            left: 0px;
            top: 50%;
            transform: translateY(-50%);
        }
        
        section.newsMain .twitterContent .twitterprofile .title {
            font-weight: 600;
            font-size: 22px;
            letter-spacing: 0.02em;
            line-height: 19px;
            text-align: left;
            color: #999;
        }
        
        section.newsMain .twitterContent .twitterprofile .name {
            font-size: 16px;
            letter-spacing: 0.02em;
            line-height: 19px;
            text-align: left;
            color: #999;
        }
        
        section.newsMain .twitterContent .twitterfeedsOwlDots {
            position: absolute;
            left: 48px;
            bottom: 35px;
        }
        
        section.newsMain .twitterContent .twitterfeedsOwlDots .owl-dot {
            width: 24px;
            height: 24px;
            background: rgba(153, 153, 153, 0.36);
            border-radius: 24px;
            margin-right: 8px;
            border: 0px;
            transition: 0.3s ease all;
            cursor: pointer;
        }
        
        section.newsMain .twitterContent .twitterfeedsOwlDots .owl-dot.active {
            background: #066069;
        }
        
        section.newsMain .twitterContent .owl-twitterfeed .tweet {
            font-weight: 300;
            font-size: 18px;
            line-height: 24px;
            text-align: left;
            color: #999;
            white-space: normal;
        }
        
        section.newsMain .twitterContent .twitterFallowBtn {
            font-size: 16px;
            letter-spacing: 0.01em;
            text-align: left;
            color: #fff;
            border-radius: 17.5px;
            background: #066069;
            padding: 8px 21px;
            position: absolute;
            right: 32px;
            bottom: 28px;
        }
        
        section.newsMain .newsBtns {
            display: flex;
            justify-content: space-between;
        }
        
        section.newsMain .newsBtns .btn {
            display: flex;
            align-items: center;
            width: calc(100% - 3px);
            border-radius: 6px;
            background: #fff;
            border: 1px solid rgba(153, 153, 153, 0.3);
            box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.1);
            height: 130px;
            margin-right: 9px;
            position: relative;
            padding: 0px 36px;
        }
        
        section.newsMain .newsBtns .btn:last-child {
            margin-right: 0px;
        }
        
        section.newsMain .newsBtns .btn .icon {
            width: 77.61px;
            height: 58.23px;
            margin-right: 20px;
            background: #dadada;
            -webkit-mask-position: top center;
            -webkit-mask-size: 100% 100%;
            -webkit-mask-repeat: no-repeat;
        }
        
        section.newsMain .newsBtns .btn span {
            display: block;
            max-width: 100px;
            font-weight: 600;
            font-size: 24px;
            letter-spacing: -0.04em;
            line-height: 28px;
            text-align: left;
            color: #066069;
        }
        
        section.newsMain .allNews {
            text-align: center;
            margin-top: 50px;
        }
        
        section.newsMain .allNews .btn {
            font-size: 16px;
            letter-spacing: 0.01em;
            color: #fff;
            border-radius: 17.5px;
            background: #999;
            padding: 10px 14px;
            display: inline-block;
            position: relative;
            width: 180px;
            text-align: left;
        }
        
        section.newsMain .allNews .btn .icon {
            height: 16.68px;
            width: 9.92px;
            fill: #fff;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 14px;
        }
        
        section.events {
            position: relative;
            z-index: 1;
            min-height: 100vh;
            overflow: hidden;
        }
        
        section.events:before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(
                    45deg, rgba(255, 255, 255, 0) 40%, rgba(166, 215, 103, 0.76) 56.36%, #8aca38 63.05%, #1e7d62 82.42%, #066069 100%);
            opacity: 0.75;
            z-index: -2;
        }
        
        section.events:after {
            content: '';
            -webkit-mask-image: url(../img/svg/meramBel.svg);
            -webkit-mask-position: top center;
            -webkit-mask-size: 100% 100%;
            -webkit-mask-repeat: no-repeat;
            width: calc(100vh + 200px);
            height: calc(100vh + 200px);
            background: #d8d8d8;
            filter: drop-shadow(0px 24px 78px rgba(0, 0, 0, 0.16));
            position: absolute;
            left: -20%;
            top: -200px;
            z-index: -1;
            opacity: 0.2;
        }
        
        section.events .eventsContainer {
            padding: 120px 50px;
            height: 100vh;
        }
        
        section.events .eventsContainer h1 {
            font-weight: 600;
            font-size: 32px;
            letter-spacing: -0.04em;
            color: #066069;
        }
        
        section.counters {
            position: relative;
            z-index: 1;
            min-height: 100vh;
            background-image: url(../img/counterbg.png);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        section.counters .row {
        }
        
        section.counters .row > .col {
            width: 25%;
            flex: unset;
        }
        
        section.counters .row > .last-col {
            width: 50%;
            flex: unset;
        }
        
        section.counters .counters-container {
            padding: 0px 180px;
            width: 100%;
        }
        
        section.counters .counters-container > .title {
            font-weight: 600;
            font-size: 32px;
            letter-spacing: -0.04em;
            line-height: 28px;
            text-align: left;
            color: #fff;
            margin-bottom: 10px;
        }
        
        section.counters .counters-container > .title span {
            color: #8aca38;
        }
        
        section.counters .counters-container > .text {
            font-weight: normal;
            font-size: 18px;
            text-align: left;
            color: #8aca38;
            margin-bottom: 40px;
        }
        
        section.counters .counter {
            border-radius: 6px;
            background: #fff;
            padding: 32px 50px 32px 42px;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            transition: 0.3s ease all;
        }
        
        section.counters .counter .icon {
            width: 65px;
            height: 91.3px;
            -webkit-mask-repeat: no-repeat;
            -webkit-mask-position: center;
            background: #006a40;
            margin-right: 20px;
            -webkit-mask-size: contain;
            transition: 0.3s ease all;
        }
        
        section.counters .row > div:nth-child(1) .counter .icon {
            background: #006a40;
        }
        
        section.counters .row > div:nth-child(2) .counter .icon {
            background: #06784b;
        }
        
        section.counters .row > div:nth-child(3) .counter .icon {
            background: #098353;
        }
        
        section.counters .row > div:nth-child(4) .counter .icon {
            background: #318A5D;
        }
        
        section.counters .row > div:nth-child(5) .counter .icon {
            background: #098353;
        }
        
        section.counters .row > div:nth-child(6) .counter .icon {
            background: #19ad5b;
        }
        
        section.counters .row > div:nth-child(7) .counter .icon {
            background: #1ab446;
        }
        
        section.counters .row > div:nth-child(8) .counter .icon {
            background: #5fbc4e;
        }
        
        section.counters .row > div:nth-child(9) .counter .icon {
            background: #7fc971;
        }
        
        section.counters .row > div:nth-child(10) .counter .icon {
            background: #b2dfaa;
        }
        
        section.counters .row > div:nth-child(1) .counter .number {
            color: #006a40;
        }
        
        section.counters .row > div:nth-child(2) .counter .number {
            color: #06784b;
        }
        
        section.counters .row > div:nth-child(3) .counter .number {
            color: #098353;
        }
        
        section.counters .row > div:nth-child(4) .counter .number {
            color: #318A5D;
        }
        
        section.counters .row > div:nth-child(5) .counter .number {
            color: #098353;
        }
        
        section.counters .row > div:nth-child(6) .counter .number {
            color: #19ad5b;
        }
        
        section.counters .row > div:nth-child(7) .counter .number {
            color: #1ab446;
        }
        
        section.counters .row > div:nth-child(8) .counter .number {
            color: #5fbc4e;
        }
        
        section.counters .row > div:nth-child(9) .counter .number {
            color: #7fc971;
        }
        
        section.counters .row > div:nth-child(10) .counter .number {
            color: #b2dfaa;
        }
        
        section.counters .counter .content {
            width: calc(100% - 65px);
        }
        
        section.counters .counter .number {
            font-weight: 600;
            font-size: 32px;
            line-height: 28px;
            text-align: left;
            color: #006a40;
            margin-bottom: 7px;
            transition: 0.3s ease all;
        }
        
        section.counters .counter .number small {
            font-size: 16px;
        }
        
        section.counters .counter .text {
            font-weight: 300;
            font-size: 16px;
            line-height: 19px;
            text-align: left;
            color: #999;
            transition: 0.3s ease all;
        }
        
        section.counters .counter:hover .icon {
            background: #fff !important;
        }
        
        section.counters .counter:hover .text {
            color: #fff !important;
        }
        
        section.counters .counter:hover .number {
            color: #fff !important;
        }
        
        section.counters .counter:hover {
            background: #8aca38 !important;
        }
        
        section.counters .slogan {
            display: flex;
            align-items: flex-end;
            height: calc(100% - 20px);
            flex-direction: column;
            justify-content: center;
        }
        
        section.counters .slogan .text {
            font-size: 75px;
            letter-spacing: -0.04em;
            line-height: 68px;
            text-align: right;
            color: #fff;
            margin-bottom: 15px;
            font-weight: 600;
        }
        
        section.counters .slogan .name {
            letter-spacing: -0.04em;
            line-height: 22px;
            text-align: right;
            color: #8aca38;
            font-size: 34px;
            margin-bottom: 5px;
        }
        
        section.counters .slogan .tag {
            font-size: 15px;
            color: #fff;
        }
        
        section.footer {
            min-height: 100px;
            position: relative;
            background: rgb(251 251 251 / 85%);
            padding: 60px 0px 0px;
        }
        
        section.footer .logoArea {
            margin-top: 30px;
            display: flex;
            justify-content: flex-end;
            position: relative;
        }
        
        section.footer .logoArea .brand {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        section.footer .logoArea .brand span {
            font-weight: 300;
            font-size: 15px;
            letter-spacing: 0.02em;
            line-height: 15px;
            text-align: left;
            color: #999;
        }
        
        section.footer .logoArea .brand a {
            display: inline-flex;
            width: 108px;
            height: 32px;
            background: #999;
            align-items: center;
            justify-content: center;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            margin-left: 5px;
        }
        
        section.footer .logoArea .brand a:hover {
            background: #76489D;
        }
        
        section.footer .logoArea .brand a .icon {
            fill: #fff;
            width: 85.74px;
            height: 21.23px;
        }
        
        section.footer .footer-container {
            display: flex;
            justify-content: space-between;
        }
        
        section.footer .rightinfo {
        }
        
        section.footer a.logo {
            display: block;
        }
        
        section.footer a.logo img {
        }
        
        section.footer .social {
            text-align: center;
            max-width: 170px;
        }
        
        section.footer .checkboxes {
            margin-bottom: 10px;
        }
        
        section.footer .social a {
            display: inline-block;
            margin: 0px 3px;
            margin-top: 20px;
        }
        
        section.footer .social a .icon {
            width: 45px;
            height: 45px;
            fill: rgba(153, 153, 153, 0.3);
            transition: 0.3s ease all;
        }
        
        section.footer .social a.facebook:hover .icon {
            fill: #3b5998;
        }
        
        section.footer .social a.twitter:hover .icon {
            fill: #1da1f2;
        }
        
        section.footer .social a.instagram:hover .icon {
            fill: #e1306c;
        }
        
        section.footer .social .text {
            font-size: 15px;
            letter-spacing: 0.02em;
            line-height: 20px;
            text-align: center;
            color: #999;
            margin-top: 10px;
        }
        
        section.footer .solutioncall {
            display: flex;
            align-items: center;
            margin-left: auto;
            justify-content: flex-end;
            margin-bottom: 20px;
        }
        
        section.footer .solutioncall .icon {
            width: 50.73px;
            height: 50.64px;
            fill: #066069;
            margin-right: 15px;
        }
        
        section.footer .solutioncall .text {
            font-weight: bold;
            font-size: 51px;
            letter-spacing: 0.04em;
            text-align: left;
            color: rgba(153, 153, 153, 0.5);
        }
        
        section.footer .solutioncall .text small {
            font-size: 14px;
            letter-spacing: 0.02em;
            text-align: left;
            color: #ccc;
            display: block;
        }
        
        section.footer .envelope {
            font-weight: 300;
            font-size: 27px;
            letter-spacing: 0.02em;
            line-height: 34px;
            color: #999;
            text-align: right;
            display: block;
            margin-bottom: 10px;
        }
        
        section.footer .envelope span {
            color: #066069;
        }
        
        section.footer .address {
            font-weight: 300;
            font-size: 15px;
            letter-spacing: 0.02em;
            line-height: 20px;
            text-align: right;
            color: #999;
            max-width: 340px;
            margin-left: auto;
        }
        
        section.footer .address span {
            color: #066069;
        }
        
        section.footer .line {
            height: 0px;
            background: transparent;
            border: 1px solid #707070;
            opacity: 0.22;
            margin: 40px 0px 50px;
        }
        
        section.footer .newsletter {
        }
        
        section.footer .newsletter .title {
            font-size: 18px;
            letter-spacing: 0.02em;
            line-height: 28px;
            text-align: left;
            color: #999;
            font-weight: 300;
            margin-bottom: 20px;
        }
        
        section.footer .newsletter .title span {
            font-weight: bold;
            color: #066069;
        }
        
        section.footer .newsletter form {
        }
        
        section.footer .newsletter .form-control {
            border-radius: 6px;
            height: 60px;
            background: #fff;
            border: 1px solid #d5d5d5;
            display: block;
            width: 100%;
            padding: 20px;
            font-size: 16px;
            letter-spacing: 0.02em;
            line-height: 28px;
            text-align: left;
            color: #999;
        }
        
        section.footer .newsletter .btn {
            height: 60px;
            background: #066069;
            display: block;
            width: 100%;
            border: 0px;
            font-weight: bold;
            font-size: 18px;
            letter-spacing: 0.02em;
            line-height: 28px;
            color: #fff;
            text-align: center;
            border-radius: 6px;
            cursor: pointer;
        }
        
        section.footer .newsletter .btn:hover {
            background: #7bc03e;
        }
        
        section.footer .checkboxes .customCheckbox {
            position: relative;
            padding-left: 25px;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            font-size: 14px;
            letter-spacing: 0.02em;
            line-height: 28px;
            text-align: left;
            color: #999;
            display: inline-block;
            margin-right: 20px;
        }
        
        section.footer .checkboxes .customCheckbox input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }
        
        section.footer .checkboxes .customCheckbox .checkmark {
            position: absolute;
            top: 2px;
            left: 0;
            width: 20px;
            height: 20px;
            border-radius: 4px;
            background: transparent;
            border: 1px solid #d5d5d5;
        }
        
        section.footer .checkboxes .customCheckbox:hover input ~ .checkmark {
            background-color: #cccccc69;
        }
        
        section.footer .checkboxes .customCheckbox input:checked ~ .checkmark {
            background: #066069;
            border-color: #066069;
        }
        
        section.footer .checkboxes .customCheckbox .checkmark:after {
            content: "";
            position: absolute;
            display: none;
            -webkit-mask-image: url(../img/svg/check.svg);
            -webkit-mask-position: top center;
            -webkit-mask-size: 100% 100%;
            -webkit-mask-repeat: no-repeat;
            width: 12.21px;
            height: 8.89px;
            background: #6ab453;
            left: 50%;
            transform: translate(-50%, -50%);
            top: 50%;
        }
        
        section.footer .checkboxes .customCheckbox input:checked ~ .checkmark:after {
            display: block;
        }
        
        section.footer .menulist {
            padding: 70px 0px 0px;
        }
        
        section.footer .menulist .menu {
            margin-bottom: 35px;
        }
        
        section.footer .menulist .menu .title {
            font-weight: 600;
            font-size: 17px;
            text-align: left;
            color: #066069;
            margin-bottom: 10px;
        }
        
        section.footer .menulist .menu ul {
        }
        
        section.footer .menulist .menu ul > li {
        }
        
        section.footer .menulist .menu ul > li > a {
            font-weight: 300;
            font-size: 15px;
            letter-spacing: 0.02em;
            line-height: 28px;
            text-align: left;
            color: #999;
            display: block;
        }
        
        section.footer .menulist .menu ul > li > a:hover {
            color: #066069;
        }
        
        section.footer .links {
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: flex-end;
        }
        
        section.footer .links a {
            font-size: 15px;
            color: #066069;
            margin-top: 5px;
        }
        
        section.footer .links a:hover {
        }
        
        section.footer .apps {
            text-align: right;
        }
        
        section.footer .apps a {
            vertical-align: middle;
            display: inline-block;
        }
        
        section.footer .apps a img {
        }
        
        section.footer .apps .text {
            font-weight: 300;
            font-size: 13px;
            letter-spacing: 0.02em;
            line-height: 20px;
            color: #999;
            text-align: right;
            margin-top: 10px;
        }
        
        section.banner {
            min-height: 275px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            margin-bottom: 30px;
            padding-top: 150px;
        }
        
        section.banner.banner1 h1 {
            font-size: 42px;
            letter-spacing: -0.02em;
            line-height: 42px;
            text-align: center;
            color: #8aca38;
            font-weight: bold;
        }
        
        section.banner.banner3 h1 {
            font-size: 42px;
            letter-spacing: -0.02em;
            line-height: 42px;
            text-align: center;
            color: #8aca38;
            font-weight: bold;
        }
        
        section.banner .breadcrumb {
            border-radius: 6px;
            background: #fff;
            box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0px 20px;
            margin-top: 17px;
            min-height: 40px;
        }
        
        section.banner .breadcrumb a {
            font-size: 14px;
            letter-spacing: -0.02em;
            line-height: 24px;
            text-align: left;
            color: #999;
            position: relative;
            display: inline-block;
            padding: 0px 10px;
        }
        
        section.banner .breadcrumb a:before {
            content: '';
            height: 9.53px;
            width: 5.67px;
            background: #6ab453;
            position: absolute;
            right: -5px;
            top: 50%;
            transform: translateY(-50%);
            -webkit-mask-image: url(../img/svg/caret-right.svg);
            -webkit-mask-position: top center;
            -webkit-mask-size: 100% 100%;
            -webkit-mask-repeat: no-repeat;
            transition: 0.5s ease all;
        }
        
        section.banner .breadcrumb a:last-child:before {
            content: '';
            display: none;
        }
        
        section.banner.banner2 h1 {
            font-weight: 600;
            font-size: 42px;
            letter-spacing: -0.02em;
            line-height: 42px;
            text-align: center;
            color: #4a4a4a;
            max-width: 550px;
        }
        
        section.banner.banner3 {
            position: relative;
            margin-bottom: 70px;
            min-height: 240px;
        }
        
        section.banner.banner3 .img {
            position: absolute;
            left: 0px;
            top: 0px;
            right: 0px;
            height: 480px;
            z-index: -1;
        }
        
        section.newsList .newsSliderTop {
        }
        
        section.newsList .newsSliderTop .newsArrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 2;
            right: 20px;
            cursor: pointer;
        }
        
        section.newsList .newsSliderTop .newsArrow .icon {
            height: 43.02px;
            width: 24.32px;
            fill: #fff;
            filter: drop-shadow(1px 29px 43px rgba(0, 0, 0, 0.48));
        }
        
        section.newsList .newsSliderTop .newsArrow.prev {
            right: unset;
            left: 20px;
        }
        
        section.newsList .newsSliderTop .newsArrow.prev .icon {
            transform: rotate(180deg);
        }
        
        section.newsList .newsSliderTop .newsArrow.next {
        }
        
        section.newsList .newsSliderTop .swiper-wrapper {
            height: unset;
        }
        
        section.newsList .newsSliderTop .swiper-wrapper .swiper-slide {
            height: unset;
        }
        
        section.newsList .newsSliderTop .news-item {
            display: block;
            position: relative;
        }
        
        section.newsList .newsSliderTop .news-item .img {
            position: relative;
            padding-bottom: 62%;
            overflow: hidden;
            border-radius: 6px;
            width: 100%;
            z-index: 1;
            background: #000;
        }
        
        section.newsList .newsSliderTop .news-item .img img {
            max-width: fit-content;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            min-height: 100%;
            min-width: 100%;
            width: 100%;
        }
        
        section.newsList .newsSliderTop .news-item .img:before {
            content: '';
            background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.09) 33.71%, #000 100%);
            opacity: 0.9;
            position: absolute;
            left: 0px;
            right: 0px;
            top: 0px;
            bottom: 0px;
            z-index: 1;
        }
        
        section.newsList .newsSliderTop .news-item .content {
            position: absolute;
            left: 20px;
            bottom: 60px;
            z-index: 2;
        }
        
        section.newsList .newsSliderTop .news-item .content .title {
            font-weight: 600;
            font-size: 24px;
            letter-spacing: -0.02em;
            line-height: 24px;
            color: #fff;
            position: relative;
            left: -100vw;
            transition: 0.3s ease all;
        }
        
        section.newsList .newsSliderTop .swiper-slide-active .news-item .content .title {
            left: 0px;
        }
        
        section.newsList .newsSliderTop .news-item .content .text {
            font-size: 16px;
            font-weight: 300;
            color: #fff;
            line-height: 24px;
            transition: 0.3s 0.1s ease all;
            left: -100vw;
            position: relative;
        }
        
        section.newsList .newsSliderTop .swiper-slide-active .news-item .content .text {
            left: 0px;
        }
        
        section.newsList .newsSliderTop .news-item .content .date {
            font-weight: 300;
            font-size: 12px;
            letter-spacing: -0.02em;
            line-height: 28px;
            color: #fff;
            transition: 0.3s 0.3s ease all;
            left: -100vw;
            position: relative;
        }
        
        section.newsList .newsSliderTop .swiper-slide-active .news-item .content .date {
            left: 0px;
        }
        
        section.newsList .newsSliderThumb {
            padding: 0px 11px;
            margin-top: -45px;
            height: 66px;
        }
        
        section.newsList .newsSliderThumb .swiper-slide {
            opacity: 1;
            cursor: pointer;
            border-radius: 7px;
            background: #fff;
            overflow: hidden;
        }
        
        section.newsList .newsSliderThumb .swiper-slide .img {
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            height: 66px;
            opacity: 0.5;
            transition: 0.3s ease all;
        }
        
        section.newsList .newsSliderThumb .swiper-slide.swiper-slide-thumb-active .img {
            opacity: 1;
        }
        
        section.newsList .newsBtnList {
            display: flex;
            justify-content: space-between;
            margin: 25px -7.5px;
        }
        
        section.newsList .moreNews {
            text-align: center;
            margin-bottom: 30px;
            margin: 20px 0px 30px;
        }
        
        section.newsList .moreNews .btn {
            display: inline-block;
            border-radius: 26px;
            background: #066069;
            font-size: 22px;
            letter-spacing: 0.01em;
            color: #fff;
            padding: 12px 35px;
            font-weight: 600;
            text-align: center;
        }
        
        section.newsList .moreNews .btn:hover {
            background: #8aca38;
        }
        
        section.newsList .newsBtnList .btn {
            transition: 0.3s ease all;
            border-radius: 6px;
            background: #fff;
            border: 1px solid rgba(153, 153, 153, 0.3);
            display: block;
            width: fit-content;
            font-weight: 600;
            font-size: 18px;
            letter-spacing: -0.04em;
            line-height: 28px;
            color: #066069;
            padding: 22px 0px;
            text-align: center;
            margin: 0 7.5px;
            width: 100%;
        }
        
        section.newsList .newsBtnList .btn:hover {
            background: #8aca38;
        }
        
        .newsPosts {
        }
        
        .newsPosts .newspost1 {
            display: block;
            position: relative;
            z-index: 1;
            margin-bottom: 20px;
        }
        
        .newsPosts .newspost1 .category {
            position: absolute;
            top: 12px;
            right: 12px;
            font-weight: 600;
            font-size: 12px;
            line-height: 24px;
            text-align: left;
            color: #fff;
            display: block;
            background: #8aca38;
            border-radius: 4px;
            padding: 0px 9px;
            z-index: 2;
        }
        
        .newsPosts .newspost1 .img {
            padding-bottom: 62.12%;
            position: relative;
            overflow: hidden;
            z-index: 1;
            border-radius: 6px;
        }
        
        .newsPosts .newspost1 .img:before {
            content: '';
            position: absolute;
            left: 0px;
            right: 0px;
            top: 0px;
            bottom: 0px;
            background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.09) 33.71%, #000 100%);
            opacity: 0.9;
            z-index: 2;
        }
        
        .newsPosts .newspost1 .img img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
            max-width: unset;
            min-width: 100%;
            min-height: 100%;
            width: 100%;
        }
        
        .newsPosts .newspost1 .content {
            position: absolute;
            left: 20px;
            bottom: 15px;
            z-index: 1;
            max-width: 400px;
        }
        
        .newsPosts .newspost1 .content .title {
            font-weight: 600;
            font-size: 20px;
            line-height: 20px;
            text-align: left;
            color: #fff;
            margin-bottom: 10px;
        }
        
        .newsPosts .newspost1 .content .date {
            font-weight: 300;
            font-size: 15px;
            letter-spacing: -0.02em;
            color: #fff;
        }
        
        .newsPosts .newspost2 {
            position: relative;
            z-index: 1;
            margin-bottom: 15px;
            padding: 6px;
            border-radius: 6px;
            background: #fff;
            border: 1px solid rgba(153, 153, 153, 0.3);
            display: flex;
        }
        
        .newsPosts .newspost2 .category {
            font-weight: 600;
            font-size: 12px;
            line-height: 24px;
            text-align: left;
            color: #fff;
            display: inline-block;
            background: #8aca38;
            border-radius: 4px;
            padding: 0px 9px;
            z-index: 2;
        }
        
        .newsPosts .newspost2 .img {
            position: relative;
            overflow: hidden;
            z-index: 1;
            border-radius: 6px;
            width: 140px;
            margin-right: 20px;
            height: 130px;
            background-position: revert;
            background-repeat: no-repeat;
            background-size: cover;
            min-width: 140px;
        }
        
        .newsPosts .newspost2 .img.iconArea {
            background: #066069;
        }
        
        .newsPosts .newspost2 .img .icon {
            height: 100%;
            width: 100%;
            background: #8aca38;
            -webkit-mask-position: center;
            -webkit-mask-repeat: no-repeat;
        
        }
        
        .newsPosts .newspost2 .img:before {
            content: '';
            position: absolute;
            left: 0px;
            right: 0px;
            top: 0px;
            bottom: 0px;
            background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.09) 33.71%, #000 100%);
            opacity: 0.9;
            z-index: 2;
        }
        
        .newsPosts .newspost2 .img img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
            max-width: unset;
            min-width: 100%;
            min-height: 100%;
            width: 100%;
        }
        
        .newsPosts .newspost2 .content {
            display: flex;
            flex-direction: column;
            align-items: baseline;
            justify-content: center;
            width: calc(100% - 140px);
        }
        
        .newsPosts .newspost2 .content .title {
            margin-bottom: 20px;
            font-weight: 600;
            font-size: 16px;
            letter-spacing: -0.04em;
            line-height: 18px;
            text-align: left;
            color: #4a4a4a;
            width: 100%;
        }
        
        .newsPosts .newspost2 .content .date {
            font-weight: 300;
            letter-spacing: -0.02em;
            text-align: left;
            color: #999;
            font-size: 14px;
            margin-bottom: 10px;
        }
        
        .ms-select {
            position: relative;
        }
        
        .ms-select select {
            display: none;
        }
        
        .select-selected {
            background-color: #ffffff;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        .select-selected:after {
            position: absolute;
            content: "";
            top: 20px;
            right: 21px;
            -webkit-mask: url('../img/svg/caret-right.svg');
            -webkit-mask-position: center;
            -webkit-mask-size: 100% auto;
            -webkit-mask-repeat: no-repeat;
            transition: 0.3s ease all;
            transform: rotate(
                    90deg
            );
            background: #1e7d62;
            height: 15.97px;
            width: 9.03px;
        }
        
        /*point the arrow upwards when the select box is open (active):*/
        .select-selected.select-arrow-active:after {
            transform: rotate(270deg);
        }
        
        .select-selected.select-arrow-active {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
        
        .ms-select .select-items {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
        
        .select-items div:last-child {
            border: 0px;
        }
        
        .select-items div {
            cursor: pointer;
            user-select: none;
            padding: 8px 17px;
            font-size: 13px;
            line-height: 24px;
            font-weight: 500;
            border-bottom: 1px solid #d6d7d8;
            color: #999;
        }
        
        .select-selected {
            cursor: pointer;
            user-select: none;
            padding: 16px 17px;
            border-radius: 6px;
            background: #fff;
            border: 0.2px solid #7070706b;
            font-size: 18px;
            letter-spacing: -0.02em;
            color: #999;
            font-weight: 400;
        }
        
        .select-items {
            position: absolute;
            background-color: #ffffff;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 99;
            border-radius: 6px;
            max-height: 150px;
            overflow: hidden;
            overflow-y: auto;
            border: 0.2px solid #707070;
            border-top: 0px;
        }
        
        .select-hide {
            display: none;
        }
        
        .select-items div:hover, .same-as-selected {
            background-color: rgba(0, 0, 0, 0.1);
        }
        
        section.archiveList {
        }
        
        .filtreContent {
            margin-bottom: 60px;
        }
        
        .filtreContent form {
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .filtreContent .form-group {
            max-width: 320px;
            width: 100%;
            margin-right: 20px;
        }
        
        .filtreContent .form-group .form-control {
            width: 100%;
            font-size: 18px;
            letter-spacing: -0.02em;
            line-height: 68px;
            text-align: left;
            color: #999;
            border: 0.2px solid #7070706b;
            padding: 16px 17px;
            border-radius: 6px;
            background: #fff;
            height: 52px;
        }
        
        .filtreContent .ms-select {
            margin-right: 1;
            width: 100%;
            max-width: 250px;
            margin-right: 10px;
        }
        
        .filtreContent .btn {
            min-width: 180px;
            border-radius: 31px;
            background: #066069;
            font-weight: 600;
            font-size: 22px;
            letter-spacing: 0.01em;
            color: #fff;
            text-align: center;
            border: 0px;
            margin-left: 5px;
            height: 52px;
            cursor: pointer;
            transition: 0.3s ease all;
        }
        
        .filtreContent .btn:hover {
            background: #8aca38;
        }
        
        section.archiveList .moreArchive {
            text-align: center;
            margin-bottom: 30px;
            margin: 20px 0px 30px;
        }
        
        section.archiveList .moreArchive .btn {
            display: inline-block;
            border-radius: 26px;
            background: #066069;
            font-size: 22px;
            letter-spacing: 0.01em;
            color: #fff;
            padding: 12px 35px;
            font-weight: 600;
            text-align: center;
        }
        
        section.archiveList .moreArchive .btn:hover {
            background: #8aca38;
        }
        
        section.archiveList .archiveTitle {
            font-weight: 600;
            font-size: 32px;
            letter-spacing: -0.04em;
            line-height: 36px;
            text-align: left;
            color: #066069;
            margin-bottom: 45px;
            margin-top: 50px;
        }
        
        section.newsDetail {
        }
        
        section.newsDetail .newsDetail-container {
            max-width: 680px;
            margin: 0 auto;
        }
        
        section.newsDetail .content .firstParagraph {
            font-weight: 600;
            font-size: 22px;
            letter-spacing: -0.02em;
            line-height: 34px;
            text-align: left;
            color: #4a4a4a;
            margin-bottom: 20px;
        }
        
        section.newsDetail .content p {
            font-size: 18px;
            letter-spacing: -0.02em;
            line-height: 30px;
            text-align: left;
            color: #999;
        }
        
        section.newsDetail .content img {
            margin: 40px 0px;
        }
        
        section.newsDetail .content h2 {
            font-weight: 600;
            font-size: 32px;
            letter-spacing: -0.02em;
            line-height: 36px;
            text-align: left;
            color: #474747;
            margin: 25px 0px 20px;
        }
        
        section.newsDetail .newsImages {
            margin-bottom: 40px;
        }
        
        section.newsDetail .newsImages h3 {
            font-weight: 600;
            font-size: 32px;
            letter-spacing: -0.02em;
            line-height: 36px;
            color: #474747;
            margin-top: 10px;
            margin-bottom: 20px;
        }
        
        section.newsDetail .newsImages .images {
        }
        
        section.newsDetail .newsImages .images .image {
            margin-bottom: 7;
            display: block;
            position: relative;
            margin-bottom: 7px;
            z-index: 1;
        }
        
        section.newsDetail .newsImages .images .image:before {
            content: '';
            background: rgba(0, 0, 0, 0.48);
            position: absolute;
            left: 0px;
            right: 0px;
            top: 0px;
            bottom: 0px;
            z-index: 2;
            transition: 0.3s ease all;
        }
        
        section.newsDetail .newsImages .images .image:after {
            content: '';
            -webkit-mask-image: url(../img/svg/photo.svg);
            -webkit-mask-position: top center;
            -webkit-mask-size: 100% 100%;
            -webkit-mask-repeat: no-repeat;
            z-index: 3;
            background: #fff;
            position: absolute;
            right: 15px;
            bottom: 15px;
            width: 20.21px;
            height: 17.8px;
            transition: 0.3s ease all;
        }
        
        section.newsDetail .newsImages .images .image .img {
            padding-bottom: 66%;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            z-index: 1;
        }
        
        section.newsDetail .newsImages .images .image:hover:before {
            opacity: 0;
        }
        
        section.newsDetail .newsImages .images .image:hover:after {
            background: #066069;
        }
        
        
        section.corporate .newsImages {
            margin-bottom: 40px;
        }
        
        section.corporate .newsImages .images {
        }
        
        section.corporate .newsImages .images .image {
            margin-bottom: 7;
            display: block;
            position: relative;
            margin-bottom: 7px;
            z-index: 1;
        }
        
        section.corporate .newsImages .images .image:before {
            content: '';
            background: rgba(0, 0, 0, 0.48);
            position: absolute;
            left: 0px;
            right: 0px;
            top: 0px;
            bottom: 0px;
            z-index: 2;
            transition: 0.3s ease all;
        }
        
        section.corporate .newsImages .images .image:after {
            content: '';
            -webkit-mask-image: url(../img/svg/photo.svg);
            -webkit-mask-position: top center;
            -webkit-mask-size: 100% 100%;
            -webkit-mask-repeat: no-repeat;
            z-index: 3;
            background: #fff;
            position: absolute;
            right: 15px;
            bottom: 15px;
            width: 20.21px;
            height: 17.8px;
            transition: 0.3s ease all;
        }
        
        section.corporate .newsImages .images .image.videotemp:after {
            content: '';
            -webkit-mask-image: url(../img/svg/playvideo.svg);
            width: 32px;
            height: 30px;
        }
        
        section.corporate .newsImages .images .image .img {
            padding-bottom: 66%;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            z-index: 1;
        }
        
        section.corporate .newsImages .images .image:hover:before {
            opacity: 0;
        }
        
        section.corporate .newsImages .images .image:hover:after {
            background: #066069;
        }
        
        
        section.newsDetail .tags {
            margin-bottom: 25px;
        }
        
        section.newsDetail .tags .tag {
            font-weight: 300;
            font-size: 12px;
            color: #fff;
            border-radius: 3px;
            background: #999;
            display: inline-block;
            padding: 4px 16px;
            text-align: center;
        }
        
        section.newsDetail .tags .tag:hover {
            background: #8aca38;
        }
        
        section.newsDetail .share {
            margin-bottom: 40px;
        }
        
        section.newsDetail .share .title {
            font-weight: 600;
            font-size: 32px;
            letter-spacing: -0.02em;
            line-height: 36px;
            text-align: left;
            color: #474747;
            margin-bottom: 20px;
        }
        
        section.newsDetail .share a {
            display: inline-block;
            margin-right: 7px;
        }
        
        section.newsDetail .share a .icon {
            width: 45px;
            height: 45px;
            fill: #999;
            transition: 0.3s ease all;
        }
        
        section.newsDetail .share a:hover .icon {
            fill: #8aca38;
        }
        
        section.otherNews {
            position: absolute;
            left: 0px;
            top: 0px;
            width: 460px;
            z-index: 1;
            padding-top: 100px;
            padding-left: 30px;
        }
        
        section.otherNews:before {
            content: '';
            left: 0px;
            top: 0px;
            bottom: -80px;
            width: 70%;
            position: absolute;
            z-index: -1;
            background: #f5f5f5;
        }
        
        section.otherNews .title {
            font-weight: 600;
            font-size: 32px;
            letter-spacing: -0.04em;
            line-height: 36px;
            text-align: left;
            color: #066069;
            width: 160px;
            margin-bottom: 20px;
        }
        
        section.otherNews .owl-otherNews {
        }
        
        section.otherNews .owl-otherNews .owl-dots {
            display: block;
            position: absolute;
            right: 0px;
            top: -25px;
        }
        
        section.otherNews .owl-otherNews .owl-dots .owl-dot span {
            width: 12px;
            height: 12px;
            display: block;
            background: #999;
            opacity: 0.27;
            transition: 0.3s ease all;
            margin-left: 5px;
            border-radius: 12px;
        }
        
        section.otherNews .owl-otherNews .owl-dots .owl-dot.active span {
            background: #066069;
            opacity: 1;
        }
        
        section.otherNews .owl-otherNews .owl-stage-outer {
            width: calc(100% + 30px);
            margin-right: -30px;
            padding-right: 30px;
            padding-bottom: 40px;
        }
        
        section.otherNews .owl-otherNews .owl-item {
            opacity: 0;
            pointer-events: none;
        }
        
        section.otherNews .owl-otherNews .owl-item.active {
            opacity: 1;
            pointer-events: auto;
            transition: 0.3s ease opacity;
        }
        
        section.otherNews .newsPosts .newspost2 {
            box-shadow: 0px 10px 13px rgba(0, 0, 0, 0.1);
            margin-bottom: 10px;
        }
        
        section.otherNews .allNews {
            text-align: center;
            margin-top: -10px;
        }
        
        section.otherNews .allNews .btn {
            font-size: 16px;
            letter-spacing: 0.01em;
            color: #fff;
            border-radius: 17.5px;
            background: #999;
            padding: 10px 14px;
            display: inline-block;
            position: relative;
            width: 180px;
            text-align: left;
        }
        
        section.otherNews .allNews .btn .icon {
            height: 16.68px;
            width: 9.92px;
            fill: #fff;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 14px;
        }
        
        section.project {
            position: relative;
            z-index: 1;
        }
        
        section.project .mapArea {
            position: relative;
            z-index: 1;
        }
        
        section.project .mapArea #projectMap {
            height: 610px;
        }
        
        section.project .project-wrapper {
            margin-top: -10px;
            background: #fff;
            filter: drop-shadow(0px -8px 70px rgba(0, 0, 0, 0.15));
            position: relative;
            z-index: 2;
            padding: 60px 35px;
        }
        
        section.project .project-wrapper .back {
            border-radius: 27px;
            background: linear-gradient(#8aca38 0%, #1e7d62 41.01%, #066069 100%);
            width: 54px;
            height: 54px;
            position: absolute;
            left: 48px;
            top: -20px;
            overflow: hidden;
        }
        
        section.project .project-wrapper .back > .icon {
            height: 15.97px;
            width: 9.03px;
            fill: #fff;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) rotate(180deg);
            transition: 0.3s ease all;
            opacity: 1;
        }
        
        section.project .project-wrapper .back:hover > .icon {
            left: -50%;
            opacity: 0;
        }
        
        section.project .project-wrapper .back .hover {
            position: absolute;
            left: 100%;
            top: 48%;
            transform: translate(-50%, -50%) rotate(
                    180deg
            );
            white-space: nowrap;
            transition: 0.3s ease all;
            opacity: 0;
        }
        
        section.project .project-wrapper .back .hover .icon {
            fill: #fff;
            height: 21.42px;
            width: 12.11px;
            margin-left: -5px;
        }
        
        section.project .project-wrapper .back:hover .hover {
            opacity: 1;
            left: 42%;
        }
        
        section.project .projectTitle {
            font-weight: 600;
            font-size: 38px;
            letter-spacing: -0.04em;
            line-height: 28px;
            text-align: left;
            color: #066069;
            margin-bottom: 30px;
            max-width: 1180px;
        }
        
        section.project .desc {
            font-weight: 300;
            font-size: 19px;
            line-height: 26px;
            text-align: left;
            color: #999;
            max-width: 1180px;
            margin-bottom: 100px;
        }
        
        section.project .socialShare {
        }
        
        section.project .socialShare a {
            display: inline-block;
        }
        
        section.project .socialShare a .icon {
            width: 30.66px;
            height: 30.61px;
            fill: rgba(153, 153, 153, 0.3);
        }
        
        section.project .socialShare a:hover .icon {
        }
        
        section.project .socialShare span {
            font-size: 14px;
            letter-spacing: 0.02em;
            line-height: 24px;
            text-align: left;
            color: #999;
            display: block;
        }
        
        section.project .projectInfo1 {
            text-align: right;
            margin-right: -35px;
        }
        
        section.project .projectInfo1 .status {
            background: #066069;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            max-width: 240px;
            margin-left: auto;
            border-radius: 6px 0px 0px 6px;
            height: 90px;
            margin-bottom: 20px;
        }
        
        section.project .projectInfo1 .status .text {
            font-weight: 600;
            font-size: 18px;
            letter-spacing: 0.02em;
            line-height: 22px;
            text-align: right;
            color: #fff;
        }
        
        section.project .projectInfo1 .status .text span {
            color: #8aca38;
            display: block;
            font-weight: 300;
        }
        
        section.project .projectInfo1 .status .icon {
            width: 40.32px;
            height: 47px;
            margin-left: 20px;
            margin-right: 10px;
            fill: #8aca38;
        }
        
        section.project .projectInfo1 .list {
            padding-right: 14px;
        }
        
        section.project .projectInfo1 .list .item {
            margin-bottom: 17px;
        }
        
        section.project .projectInfo1 .list .item span {
            font-weight: 600;
            font-size: 18px;
            letter-spacing: 0.02em;
            line-height: 22px;
            text-align: right;
            color: #999;
        }
        
        section.project .projectInfo1 .list .item .text {
            font-size: 18px;
            letter-spacing: 0.02em;
            line-height: 22px;
            text-align: right;
            color: #8aca38;
            font-weight: 300;
        }
        
        section.project .line {
            height: 0px;
            background: transparent;
            border: 1px solid #707070;
            opacity: 0.22;
            margin-top: 50px;
            margin-bottom: 50px;
        }
        
        section.project .projectDetails {
            display: flex;
            justify-content: space-between;
            margin-bottom: 70px;
        }
        
        section.project .projectDetailstitle {
            font-weight: 600;
            font-size: 38px;
            letter-spacing: -0.04em;
            line-height: 28px;
            text-align: left;
            color: #066069;
            margin-bottom: 60px;
        }
        
        section.project .projectDetails .item {
            text-align: center;
            width: 100%;
            position: relative;
            min-height: 92px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
        
        section.project .projectDetails .item:not(:last-child):before {
            content: '';
            position: absolute;
            right: 0px;
            top: 0px;
            bottom: 0px;
            width: 1px;
            background: #dcdcdc;
        }
        
        section.project .projectDetails .item span {
            font-weight: 300;
            font-size: 20px;
            letter-spacing: 0.02em;
            line-height: 26px;
            text-align: center;
            color: #999;
        }
        
        section.project .projectDetails .item b {
            display: block;
            font-weight: 600;
            color: #999;
        }
        
        section.project .projectImagesTitle {
            font-weight: 600;
            font-size: 38px;
            letter-spacing: -0.04em;
            line-height: 28px;
            text-align: left;
            color: #066069;
            margin-bottom: 50px;
        }
        
        section.project .projectImages {
            margin-bottom: 70px;
        }
        
        section.project .projectImages .image {
            display: block;
            position: relative;
            padding-bottom: 100%;
        }
        
        section.project .projectImages .image:before {
            content: '';
            background: #0f413c;
            position: absolute;
            inset: 0;
            z-index: 1;
            opacity: 0;
            transition: 0.3s ease all;
        }
        
        section.project .projectImages .image:after {
            content: '';
            -webkit-mask-image: url(../img/svg/plus.svg);
            -webkit-mask-position: top center;
            -webkit-mask-size: 100% 100%;
            -webkit-mask-repeat: no-repeat;
            position: absolute;
            bottom: 25px;
            right: 40px;
            width: 26px;
            height: 24.47px;
            background: #8aca38;
            opacity: 0;
            transition: 0.3s ease all;
            z-index: 1;
        }
        
        section.project .projectImages .image:hover:before {
            opacity: 0.7;
        }
        
        section.project .projectImages .image:hover:after {
            transition: 0.3s 0.1s ease all;
            opacity: 1;
        }
        
        section.project .projectImages .image .img {
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            position: absolute;
            inset: 0;
        }
        
        section.project .project-list .project-item {
            display: block;
            position: relative;
        }
        
        section.project .project-list .project-item.active {
            opacity: 1;
        }
        
        section.project .project-list .project-item.inactive {
            opacity: 0.3;
        }
        
        section.project .project-list .project-item .img:before {
            content: '';
            position: absolute;
            left: 0px;
            right: 0px;
            top: 0px;
            bottom: 0px;
            background: #000;
            opacity: 0;
            z-index: 1;
            transition: 0.3s ease all;
        }
        
        section.project .project-list .project-item .img:after {
            content: '';
            -webkit-mask-image: url(../img/svg/caret-right.svg);
            -webkit-mask-position: top center;
            -webkit-mask-size: 100% 100%;
            -webkit-mask-repeat: no-repeat;
            background: #8aca38;
            position: absolute;
            bottom: 10px;
            right: 100%;
            z-index: 2;
            width: 26.03px;
            height: 14.71px;
            transition: 0.3s ease all;
            opacity: 0;
        }
        
        section.project .project-list .project-item .img {
            height: 150px;
            position: relative;
            overflow: hidden;
            border-radius: 7px;
            margin-bottom: 10px;
        }
        
        section.project .project-list .project-item:hover .img:before {
            opacity: 0.5;
        }
        
        section.project .project-list .project-item:hover .img:after {
            right: 10px;
            opacity: 1;
        }
        
        section.project .project-list .project-item .img img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            min-width: 100%;
            min-height: 100%;
            max-width: 100%;
        }
        
        section.project .project-list .project-item .text {
            font-size: 18px;
            text-align: left;
            color: #727272;
        }
        
        section.project .project-list .project-item:hover .text {
            color: #8aca38;
        }
        
        section.project .projectScroll {
            height: 11px;
            max-width: 783px;
            border-radius: 5.5px;
            background: rgb(153 153 153 / 50%);
            position: relative;
            margin: 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: 50px;
            z-index: 4;
        }
        
        section.project .projectScroll .swiper-scrollbar-drag {
            height: 19px;
            border-radius: 20px;
            background: #8aca38;
            opacity: 1;
            cursor: pointer;
        }
        
        section.project .otherProject .title {
            font-weight: 600;
            font-size: 38px;
            letter-spacing: -0.04em;
            line-height: 28px;
            text-align: left;
            color: #066069;
            margin-bottom: 30px;
        }
        
        section.project .other-project .swiper-wrapper {
            height: unset;
            margin-bottom: 40px;
        }
        
        section.project .allProject {
            text-align: center;
            margin: 20px 0px;
        }
        
        section.project .allProject .btn {
            font-weight: 600;
            font-size: 22px;
            letter-spacing: 0.01em;
            text-align: left;
            color: #fff;
            height: 52px;
            background: #066069;
            padding: 10px 31px;
            border-radius: 20px;
        }
        
        section.project .allProject .btn:hover {
            background: #8aca38;
        }
        
        section.mayor {
        }
        
        section.mayor .mayor-container {
            padding: 0px 100px 0px;
        }
        
        section.mayor .desc {
            font-weight: 300;
            font-size: 16px;
            line-height: 24px;
            text-align: left;
            color: #999;
            margin-top: 140px;
            margin-bottom: 40px;
        }
        
        section.mayor .slogan {
            font-size: 60px;
            letter-spacing: -0.04em;
            line-height: 68px;
            color: #999;
            font-weight: 600;
        }
        
        section.mayor .name {
            font-size: 34px;
            letter-spacing: -0.04em;
            line-height: 24px;
            text-align: left;
            color: #999;
            font-weight: 600;
        }
        
        section.mayor .name small {
            font-size: 15px;
            font-weight: 400;
            display: block;
        }
        
        section.mayor .image {
            height: 720px;
            position: relative;
            right: -100px;
            background-position: center right;
        }
        
        section.mayor .social {
            text-align: right;
        }
        
        section.mayor .social a {
            display: inline-block;
        }
        
        section.mayor .social a .icon {
            width: 42.63px;
            height: 42.57px;
            fill: #dadada;
        }
        
        section.mayor .social a:hover .icon {
            fill: #83c53b;
        }
        
        section.mayor .buttons {
            margin: 50px 0px 100px;
            text-align: center;
        }
        
        section.mayor .buttons .btn {
            font-size: 20px;
            letter-spacing: -0.04em;
            line-height: 13px;
            text-align: center;
            border-radius: 6px;
            background: #f8f8f8;
            display: inline-block;
            padding: 30px 76px;
            color: #999;
            margin-right: 10px;
        }
        
        section.mayor .buttons .btn:hover {
            background: #8aca38;
            color: #fff;
        }
        
        section.mayorGallery {
            padding: 30px 60px;
        }
        
        section.mayorGallery .galleryItem:not(.with-title) {
            position: relative;
            overflow: hidden;
            display: block;
            padding-bottom: 100%;
            margin-bottom: 7px;
            border-radius: 6px;
            z-index: 1;
            height: 100%;
        }
        
        section.mayorGallery .galleryItem .img {
            position: absolute;
            inset: 0;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
        
        section.mayorGallery .galleryItem > span {
            /*    position: absolute;
                z-index: 0;
                display: block;
                bottom: 0;
                color: #fff;
                font-size: 18px;
                font-weight: 500;
                width: 100%;
                text-shadow: 1px 1px #000000;
                text-align: center;
                padding: 15px 0;
                letter-spacing: 0.6px;
                background-color: rgba(0, 0, 0, 0.4);*/
        }
        
        section.mayorGallery .galleryItem.with-title {
            position: relative;
            overflow: hidden;
            display: block;
            border-radius: 6px;
            z-index: 1;
            height: 100%;
            margin-bottom: 7px;
        }
        
        section.mayorGallery .galleryItem.with-title .img {
            padding-bottom: 100%;
            position: relative;
            overflow: hidden;
            z-index: 1;
            border-radius: 6px;
        }
        
        section.mayorGallery .galleryItem.with-title .img img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
            width: 100%;
            max-width: unset;
            min-height: 100%;
            object-fit: cover;
        }
        
        section.mayorGallery .galleryItem.with-title .img:before {
            content: '';
            position: absolute;
            left: 0px;
            right: 0px;
            top: 0px;
            bottom: 0px;
            background: linear-gradient(#0000 0%, #00000017 33.71%, #000 100%);
            opacity: 0.9;
            z-index: 2;
        }
        
        section.mayorGallery .galleryItem.with-title:before {
        }
        
        section.mayorGallery .galleryItem.with-title .content {
            position: absolute;
            left: 20px;
            right: 20px;
            bottom: 20px;
            z-index: 2;
        }
        
        section.mayorGallery .galleryItem.with-title .content .title {
            font-weight: 600;
            font-size: 20px;
            line-height: 20px;
            text-align: left;
            color: #fff;
        }
        
        section.mayorGallery .galleryItem:before {
            content: '';
            position: absolute;
            z-index: 2;
            background: #066069;
            opacity: 0;
            transition: 0.3s ease all;
            left: 0px;
            right: 0px;
            top: 0;
            bottom: 10px;
        }
        
        section.mayorGallery .galleryItem:after {
            content: '';
            -webkit-mask-image: url(../img/svg/plus.svg);
            -webkit-mask-position: top center;
            -webkit-mask-size: 100% 100%;
            -webkit-mask-repeat: no-repeat;
            position: absolute;
            background: #fff;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) scale(0);
            z-index: 3;
            width: 22px;
            height: 22px;
            transition: 0.3s ease all;
        }
        
        section.mayorGallery .galleryItem:hover:before {
            opacity: 0.63;
        }
        
        section.mayorGallery .galleryItem:hover:after {
            transform: translate(-50%, -50%) scale(1);
        }
        
        section.mayorGallery .galleryMore {
            text-align: center;
            margin-bottom: 30px;
            margin: 50px 0px 30px;
        }
        
        section.mayorGallery .galleryMore .btn {
            display: inline-block;
            border-radius: 26px;
            background: #066069;
            font-size: 22px;
            letter-spacing: 0.01em;
            color: #fff;
            padding: 12px 35px;
            font-weight: 600;
            text-align: center;
        }
        
        section.mayorGallery .galleryMore .btn:hover {
            background: #8aca38;
        }
        
        section.mayorGalleryDetail {
            max-width: 100vw;
            overflow: hidden;
        }
        
        section.mayorGalleryDetail .mayorGallerySlider .swiper-wrapper {
            height: unset;
        }
        
        section.mayorGalleryDetail .mayorGallerySlider {
            max-width: 850px;
            overflow: unset;
        }
        
        section.mayorGalleryDetail .mayorGallerySlider .swiper-slide .galleryItem {
            opacity: 0;
            transition: 0.3s ease opacity;
        }
        
        section.mayorGalleryDetail .mayorGallerySlider .galleryItem {
            background: #fff;
        }
        
        section.mayorGalleryDetail .mayorGallerySlider .galleryItem .img {
            height: 600px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            position: relative;
            border-radius: 5px;
            box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.38);
            top: 0;
            transition: 0.3s ease all;
        }
        
        section.mayorGalleryDetail .mayorGallerySlider .swiper-slide.swiper-slide-active .galleryItem {
            opacity: 1;
        }
        
        section.mayorGalleryDetail .mayorGallerySlider .swiper-slide.swiper-slide-prev .galleryItem {
            opacity: 1;
        }
        
        section.mayorGalleryDetail .mayorGallerySlider .swiper-slide.swiper-slide-prev .galleryItem .img {
            opacity: 0.5;
        }
        
        section.mayorGalleryDetail .mayorGallerySlider .swiper-slide.swiper-slide-active .galleryItem .img {
        }
        
        section.mayorGalleryDetail .mayorGallerySlider .swiper-slide.swiper-slide-next .galleryItem {
            opacity: 1;
        }
        
        section.mayorGalleryDetail .mayorGallerySlider .swiper-slide.swiper-slide-next .galleryItem .img {
            opacity: 0.5;
        }
        
        section.mayorGalleryDetail .mayorGallerySlider-nav {
            position: absolute;
            bottom: -20px;
            z-index: 2;
            left: 50%;
            transform: translateX(-50%);
        }
        
        section.mayorGalleryDetail .mayorGallerySlider-nav .swiper-btn-next {
            border-radius: 17.5px;
            background: #999;
            width: 66px;
            height: 35px;
            position: relative;
            display: inline-block;
        }
        
        section.mayorGalleryDetail .mayorGallerySlider-nav .swiper-btn-next:hover {
            background: #066069;
        }
        
        section.mayorGalleryDetail .mayorGallerySlider-nav .swiper-btn-next .icon {
            height: 16.68px;
            width: 9.92px;
            fill: #fff;
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
        }
        
        section.mayorGalleryDetail .mayorGallerySlider-nav .swiper-btn-prev {
            border-radius: 17.5px;
            background: #999;
            width: 66px;
            height: 35px;
            position: relative;
            display: inline-block;
        }
        
        section.mayorGalleryDetail .mayorGallerySlider-nav .swiper-btn-prev:hover {
            background: #066069;
        }
        
        section.mayorGalleryDetail .mayorGallerySlider-nav .swiper-btn-prev .icon {
            height: 16.68px;
            width: 9.92px;
            fill: #fff;
            position: absolute;
            left: 12px;
            top: 50%;
            transform: translateY(-50%) rotate(180deg);
        }
        
        section.mayorGalleryDetail .galleryThumbList {
            padding: 23px 60px 30px;
            background: #fff;
            filter: drop-shadow(0px -15px 20px rgba(0, 0, 0, 0.16));
            margin-top: 50px;
        }
        
        section.mayorGalleryDetail .galleryThumbList .mayorGalleryThumb {
        }
        
        section.mayorGalleryDetail .galleryThumbList .mayorGalleryThumb .img {
            padding-bottom: 100%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 6px;
            cursor: pointer;
            overflow: hidden;
        }
        
        section.mayorGalleryDetail .galleryThumbList .mayorGalleryThumb .img:before {
            content: '';
            opacity: 0;
            position: absolute;
            background: #066069;
            transition: 0.3s ease all;
            inset: 0;
            border-radius: 6px;
        }
        
        section.mayorGalleryDetail .galleryThumbList .mayorGalleryThumb .swiper-wrapper {
            height: unset;
        }
        
        section.mayorGalleryDetail .galleryThumbList .mayorGalleryThumb .img:hover:before {
            opacity: 0.6;
        }
        
        section.blankpage {
            position: relative;
            z-index: 1;
            padding: 20px 0px;
        }
        
        .form-area {
            opacity: 0;
            overflow: hidden;
            visibility: hidden;
            max-height: 0;
            transition: all ease .3s;
        }
        
        .form-area .select2.select2-container .select2-selection {
            border: 1px solid #eee;
            border-radius: 6px;
        }
        
        .form-area.show {
            margin-bottom: 30px;
            margin-top: 45px;
            opacity: 1;
            overflow: visible;
            visibility: visible;
            max-height: 1000vh;
        }
        
        .form-area .formTitle {
            font-weight: 600;
            font-size: 24px;
            letter-spacing: -0.02em;
            line-height: 28px;
            text-align: center;
            color: #4a4a4a;
            margin-bottom: 30px;
        }
        
        .form-area .formTitle > span {
            font-size: 18px;
            letter-spacing: -0.02em;
            min-height: 22px;
            display: block;
            color: #999;
            text-align: center;
        }
        
        .form-area .formTitle p {
            font-size: 18px;
            letter-spacing: -0.02em;
            line-height: 24px;
            text-align: center;
            color: #999;
        }
        
        .form-area .form-group {
            margin-bottom: 20px;
        }
        
        .form-area .form-group.inline {
        }
        
        .form-area .form-group label {
            font-size: 18px;
            letter-spacing: -0.02em;
            text-align: left;
            min-height: 22px;
            display: block;
            color: #999;
        }
        
        .form-area .form-group.inline label {
            line-height: 60px;
        }
        
        .form-area .form-group .form-control {
            border-radius: 6px;
            background: #fff;
            border: 1px solid #EEEEEE;
            padding: 21px 20px;
            width: 100%;
            display: block;
        }
        
        .form-area .form-group.inline .form-control {
        }
        
        .form-area .form-group .note {
            margin-top: 5px;
            display: block;
            font-size: 14px;
            color: #b7b7b7;
        }
        
        .form-area .form-group .selectFile {
            margin-right: 30px;
            display: inline-flex;
            align-items: flex-end;
            cursor: pointer;
        }
        
        .form-area .form-group .selectFile .icon {
            width: 28.66px;
            height: 26.06px;
            fill: #066069;
            margin-right: 10px;
        }
        
        .form-area .form-group .selectFile span {
            font-size: 18px;
            letter-spacing: -0.02em;
            text-align: left;
            color: #999;
        }
        
        .form-area .form-group .selectFile input {
            display: none;
        }
        
        .form-area .form-submit {
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 30px 0px;
        }
        
        .form-area .form-submit .btn-back {
            width: 48px;
            height: 48px;
            border-radius: 27px;
            background: #f3f2f2;
            display: inline-block;
            position: relative;
            transition: 0.3s ease all;
            align-items: center;
            margin: 0px 6px;
        }
        
        .form-area .form-submit .btn-back .icon {
            height: 15.97px;
            width: 9.03px;
            fill: #1e7d62;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) rotate(180deg);
        }
        
        .form-area .form-submit .btn-back:hover {
            background: #066069;
        }
        
        .form-area .form-submit .btn-back:hover .icon {
            fill: #fff;
        }
        
        .form-area .form-submit .btn-submit {
            border-radius: 26px;
            background: #066069;
            font-weight: 600;
            font-size: 22px;
            letter-spacing: 0.01em;
            text-align: left;
            color: #fff;
            padding: 11px 57px;
            border: 0px;
            margin: 0px 6px;
            cursor: pointer;
            transition: 0.3s ease all;
        }
        .form-area .form-submit .btn-submit:disabled {
            background: #cbcbcb;
            color: #fff;
        }
        
        .form-area .form-submit .btn-submit:disabled:hover {
            opacity: .9;
            background: #cbcbcb;
        }
        
        .form-area .form-submit .btn-submit:hover {
            background: #81c43b;
        }
        
        .form-area .resultText {
            position: relative;
            font-size: 18px;
            letter-spacing: -0.02em;
            line-height: 30px;
            text-align: left;
            color: #999;
            margin-bottom: 70px;
        }
        
        .form-area .requestNumber {
            font-size: 18px;
            letter-spacing: -0.02em;
            line-height: 30px;
            text-align: left;
            color: #999;
        }
        
        .form-area .btn-copy {
            border-radius: 26px;
            background: #066069;
            font-weight: 600;
            font-size: 22px;
            letter-spacing: 0.01em;
            color: #fff;
            padding: 13px 54px;
            transition: 0.3s ease all;
        }
        
        .form-area .btn-copy:hover {
            background: #8aca38;
        }
        
        .form-area .requestResult {
            position: absolute;
            right: calc(100% + 60px);
        }
        
        .form-area .requestResult img {
            width: 383.37px;
            position: absolute;
            bottom: 70%;
        }
        
        .form-area .requestResult .icon1 {
            width: 259.73px;
            height: 228.68px;
            fill: #ebebeb;
        }
        
        .form-area .requestResult .icon2 {
            width: 55.81px;
            height: 55.79px;
            fill: #8aca38;
            position: absolute;
            right: 0px;
            bottom: 0px;
        }
        
        section.requestBtnList {
            left: 80px;
            position: absolute;
            display: flex;
            flex-direction: column;
            top: 200px;
            z-index: 2;
        }
        
        section.requestBtnList a {
            display: block;
            margin-bottom: 20px;
            cursor: default;
        }
        
        section.requestBtnList a .icon {
            fill: #ebe8e8;
            width: 67.58px;
            height: 58.55px;
        }
        
        section.requestBtnList .slogan {
            font-weight: 300;
            font-size: 30px;
            letter-spacing: -0.02em;
            line-height: 28px;
            text-align: left;
            color: #ebe8e8;
            max-width: 100px;
        }
        
        section.prevMayors {
            padding: 40px 0px;
        }
        
        section.prevMayors .prevmayors-container {
            max-width: 1300px;
            margin: 0 auto;
        }
        
        section.prevMayors .mayors {
        }
        
        section.prevMayors .mayors .prevmayor {
            background: linear-gradient(0deg, #7d7d7d 0%, #1a1a1a 100%);
            margin-bottom: 30px;
            position: relative;
            height: 540px;
        }
        
        section.prevMayors .mayors .prevmayor:nth-child(even) {
            flex-direction: row-reverse;
        }
        
        section.prevMayors .mayors .prevmayor:nth-child(even) .content {
            align-items: flex-start;
        }
        
        section.prevMayors .mayors .prevmayor .img {
            background-repeat: no-repeat;
            background-position: center bottom;
            background-size: contain;
            width: 90%;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 0px;
            padding-bottom: 80%;
        }
        
        section.prevMayors .mayors .prevmayor .content {
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 75px;
        }
        
        section.prevMayors .mayors .prevmayor .content .date {
            font-size: 56px;
            letter-spacing: -0.04em;
            color: #8aca38;
            font-weight: 600;
            text-align: center;
            white-space: nowrap;
        }
        
        section.prevMayors .prevmayor .content .name {
            font-weight: 300;
            font-size: 32px;
            letter-spacing: -0.04em;
            color: #fff;
            margin-bottom: 30px;
            text-align: center;
        }
        
        section.prevMayors .prevmayor .content .text {
            font-weight: 300;
            font-size: 16px;
            line-height: 24px;
            color: #fff;
            max-width: 490px;
            text-align: right;
            margin-bottom: 20px;
        }
        
        section.prevMayors .mayors .prevmayor:nth-child(even) .text {
            text-align: left;
        }
        
        section.prevMayors .prevmayor .content .btn-detail {
            font-weight: 600;
            font-size: 22px;
            letter-spacing: 0.01em;
            text-align: left;
            color: #fff;
            background: #066069;
            padding: 15px 64px;
            border-radius: 30px;
        }
        
        section.prevMayors .prevmayor .content .btn-detail:hover {
        }
        
        section.prevMayorDetail {
        }
        
        section.prevMayorDetail .prevMayorDetail-container {
            max-width: 1300px;
            margin: 0 auto;
        }
        
        section.prevMayorDetail .wrapper {
            background: linear-gradient(318deg, #7d7d7d 0%, #1a1a1a 100%);
            display: flex;
            border-bottom-right-radius: 90px;
        }
        
        section.prevMayorDetail .wrapper .img {
            height: 450px;
            min-width: 555px;
            background-repeat: no-repeat;
            background-position: center bottom;
            border-radius: 200px;
            position: relative;
            top: -100px;
        }
        
        section.prevMayorDetail .wrapper .content {
            padding: 70px 150px 70px 90px;
        }
        
        section.prevMayorDetail .wrapper .content .date {
            font-size: 70px;
            letter-spacing: -0.04em;
            color: #8aca38;
            font-weight: 600;
        }
        
        section.prevMayorDetail .wrapper .content .name {
            font-weight: 300;
            font-size: 32px;
            letter-spacing: -0.04em;
            color: #fff;
            margin-bottom: 20px;
        }
        
        section.prevMayorDetail .wrapper .content .text {
            font-weight: 300;
            font-size: 16px;
            line-height: 24px;
            text-align: left;
            color: #fff;
        }
        
        section.corporate {
            min-height: 100vh;
        }
        
        section.corporate .corporate-contrainer1 {
            max-width: 1300px;
            margin: 0 auto;
        }
        
        section.corporate .corporate-contrainer5 {
            max-width: 1300px;
            margin: 0 auto;
        }
        
        section.corporate .corporate-contrainer2 {
            max-width: 1100px;
            margin: 0 auto;
        }
        
        section.corporate .corporate-contrainer4 {
            max-width: 1100px;
            margin: 0 auto;
            padding: 0px 15px;
        }
        
        section.corporate .corporate-contrainer3 {
            margin: 0 auto;
            margin-left: 300px;
            margin-right: 40px;
        }
        
        section.corporate .buttonList {
        }
        
        section.corporate .buttonList .btn {
            border-radius: 6px;
            background: #f8f8f8;
            display: block;
            font-size: 20px;
            letter-spacing: -0.04em;
            line-height: 13px;
            text-align: center;
            color: #999;
            height: 102px;
            display: flex;
            align-items: center;
            padding: 0px 32px;
            margin-bottom: 24px;
            position: relative;
        }
        
        section.corporate .buttonList .btn:before {
            content: '';
            background: #8aca38;
            transition: 0.3s ease all;
            position: absolute;
            left: 30px;
            bottom: 25px;
            width: 70px;
            height: 1px;
        }
        
        section.corporate .buttonList .btn:hover:before {
            background: #066069;
        }
        
        section.corporate .buttonList .btn:hover {
            background: #8aca38;
            color: #fff;
        }
        
        section.corporate .buttonList2 {
            margin-bottom: 50px;
        }
        
        section.corporate .buttonList2 .btn {
            border-radius: 6px;
            background: #f8f8f8;
            margin-bottom: 4px;
            position: relative;
            border: 1px solid #f1f1f1;
            padding: 0px 24px;
            height: 140px;
            display: flex;
            align-items: center;
        }
        
        section.corporate .buttonList2 .btn span {
            font-size: 18px;
            letter-spacing: -0.02em;
            line-height: 22px;
            text-align: left;
            color: #999;
            transition: 0.3s ease all;
        }
        
        section.corporate .buttonList2 .btn .icon {
            min-width: 60px;
            height: 60px;
            background: #8aca38;
            margin-right: 12px;
            -webkit-mask-repeat: no-repeat;
            -webkit-mask-position: center;
        }
        
        section.corporate .buttonList2 .btn:before {
            content: '';
            background: #f8f8f8;
            transition: 0.3s ease all;
            position: absolute;
            left: 25px;
            bottom: 25px;
            width: 0px;
            height: 1px;
        }
        
        section.corporate .buttonList2 .btn:hover:before {
            background: #8aca38;
            width: 70px;
        }
        
        section.corporate .buttonList2 .btn:hover {
            box-shadow: 0px 10px 23px rgba(6, 96, 105, 0.1);
            background: #066069;
        }
        
        section.corporate .buttonList2 .btn:hover span {
            color: #fff;
        }
        
        section.corporate .editortext {
        }
        
        section.corporate .editortext h2 {
            font-size: 26px;
            line-height: 68px;
            color: #066069;
            font-weight: 600;
        }
        
        section.corporate .editortext h3 {
            font-weight: 300;
            font-size: 35px;
            line-height: 40px;
            color: #999;
            margin-bottom: 20px;
        }
        
        section.corporate .editortext h4 {
            font-size: 16px;
            font-weight: bold;
            line-height: 24px;
            color: #999;
            margin-bottom: 10px;
        }
        
        section.corporate .editortext p {
            font-size: 16px;
            line-height: 24px;
            color: #999;
            font-weight: 300;
            margin-bottom: 10px;
        }
        
        section.corporate .editortext p b {
            font-weight: bold;
        }
        
        section.corporate .editortext table {
            width: 100%;
        }
        
        section.corporate .editortext table th {
        }
        
        section.corporate .editortext table tr {
        }
        
        section.corporate .editortext table td {
            vertical-align: middle;
            border-bottom: 1px solid #dadada;
            border-top: 1px solid #dadada;
            font-size: 15px;
            padding: 5px;
        }
        
        section.corporate .editortext table td p {
            margin-bottom: 0px;
            font-size: 14px;
        }
        
        section.corporate .editortext table td a {
        
            color: #2c787f;
        }
        
        section.corporate .editortext table tr:nth-child(odd) td {
            vertical-align: middle;
        }
        
        section.corporate .editortext table tr:nth-child(even) td {
            background: #f9f9f9;
        }
        
        section.corporate .editortext ol, section.corporate .editortext ul {
        }
        
        section.corporate .editortext ol > li, section.corporate .editortext ul > li {
        
            position: relative;
        
            padding-left: 15px;
        
            font-size: 15px;
        
            line-height: 15px;
        
            color: #999;
        
            font-weight: 300;
        
            margin-bottom: 10px;
        }
        
        section.corporate .editortext ol > li:before, section.corporate .editortext ul > li:before {
            content: '';
            position: absolute;
            left: 0px;
            top: 5px;
            width: 6px;
            height: 6px;
            background: #096468;
            border-radius: 3px;
        }
        
        section.corporateSidebar {
            position: absolute;
            left: 16px;
            z-index: 2;
            top: 210px;
        }
        
        section.corporateSidebar .btn {
            width: 250px;
            font-size: 16px;
            letter-spacing: -0.04em;
            line-height: 13px;
            color: #999;
            height: 60px;
            display: flex;
            border-radius: 6px;
            background: #f8f8f8;
            align-items: center;
            padding: 0px 30px;
            margin-bottom: 7px;
            position: relative;
        }
        
        section.corporateSidebar .btn:hover, section.corporateSidebar .btn.active {
            width: 258px;
        }
        
        section.corporateSidebar .btn:hover:before, section.corporateSidebar .btn.active:before {
            width: 5px;
            border-radius: 2.5px;
        }
        
        section.corporateSidebar .btn:before {
            content: '';
            height: 34px;
            border-radius: 0px;
            background: #6ab453;
            position: absolute;
            left: 13px;
            width: 0px;
            transition: 0.3s ease all;
        }
        
        section.corporate .municipalityMembers {
            margin-bottom: 100px;
        }
        
        section.corporate .municipalityMembers .member {
            display: block;
            position: relative;
            margin-bottom: 24px;
            overflow: hidden;
        }
        
        section.corporate .municipalityMembers .member .img {
            padding-bottom: 134%;
            background-repeat: no-repeat;
            background-position: center bottom;
            background-size: cover;
            background-color: #dadada;
            filter: grayscale(1);
            position: relative;
        }
        
        section.corporate .municipalityMembers .member:before {
            content: '';
            background: linear-gradient(181deg, rgba(218, 218, 218, 0) 70%, #8aca38 100%);
            position: absolute;
            left: 0px;
            right: 0px;
            bottom: -130px;
            top: 0px;
            z-index: 1;
            opacity: 0;
            transition: 0.3s ease all;
        }
        
        section.corporate .municipalityMembers .member:hover:before {
            bottom: 0px;
            opacity: 1;
        }
        
        section.corporate .municipalityMembers .member .name {
            position: absolute;
            color: #fff;
            font-size: 17px;
            font-weight: 300;
            z-index: 2;
            left: 13px;
            bottom: 34px;
            text-shadow: 2px 0 3px #000000;
        }
        
        section.corporate .municipalityMembers .member .tag {
            position: absolute;
            font-size: 16px;
            letter-spacing: -1px;
            color: #fff;
            z-index: 2;
            left: 13px;
            bottom: 15px;
            text-shadow: 2px 0 3px #000000;
        }
        
        section.corporate .mayorAssistants {
            margin-bottom: 100px;
        }
        
        section.corporate .mayorAssistants .assistant {
            display: block;
            position: relative;
            margin-bottom: 24px;
            overflow: hidden;
        }
        
        section.corporate .mayorAssistants .assistant .img {
            padding-bottom: 160%;
            background-repeat: no-repeat;
            background-position: center bottom;
            background-size: cover;
            background-color: #dadada;
            filter: grayscale(1);
            position: relative;
        }
        
        section.corporate .mayorAssistants .assistant:before {
            content: '';
            background: linear-gradient(181deg, rgba(218, 218, 218, 0) 70%, #8aca38 100%);
            position: absolute;
            left: 0px;
            right: 0px;
            bottom: -130px;
            top: 0px;
            z-index: 1;
            opacity: 0;
            transition: 0.3s ease all;
        }
        
        section.corporate .mayorAssistants .assistant:hover:before {
            bottom: 0px;
            opacity: 1;
        }
        
        section.corporate .mayorAssistants .assistant .name {
            position: absolute;
            color: #fff;
            font-size: 17px;
            font-weight: 300;
            z-index: 2;
            left: 13px;
            bottom: 34px;
        }
        
        section.corporate .mayorAssistants .assistant .tag {
            position: absolute;
            font-size: 16px;
            letter-spacing: -1px;
            color: #fff;
            z-index: 2;
            left: 13px;
            bottom: 15px;
        }
        
        section.mayorAssistantDetail {
            display: flex;
        }
        
        section.mayorAssistantDetail .name {
            font-weight: 300;
            font-size: 35px;
            line-height: 31px;
            text-align: left;
            color: #999;
            margin-bottom: 30px;
        }
        
        section.mayorAssistantDetail .content {
            padding-top: 200px;
            padding-left: 70px;
            padding-bottom: 100px;
            padding-right: 200px;
        }
        
        section.mayorAssistantDetail .img {
            min-width: 760px;
            background-repeat: no-repeat;
            background-position: center top;
            background-size: cover;
            height: 100vh;
        }
        
        section.mayorAssistantDetail .name span {
            font-size: 24px;
            font-weight: 300;
            display: block;
        }
        
        section.mayorAssistantDetail .text {
            font-weight: 300;
            font-size: 16px;
            line-height: 24px;
            text-align: left;
            color: #999;
        }
        
        section.mayorAssistantDetail .text h2 {
            font-weight: bold;
            font-size: 16px;
            display: block;
            margin-bottom: 20px;
        }
        
        section.mayorAssistantDetail .text ol {
            list-style: decimal;
            padding-left: 15px;
        }
        
        section.mayorAssistantDetail .text ol > li {
            font-size: 16px;
            font-weight: 300;
            color: #999;
            line-height: 24px;
        }
        
        section.mayorAssistantDetail .text ol > li a {
            font-size: 16px;
            font-weight: 300;
            line-height: 24px;
            color: #999;
        }
        
        section.mayorAssistantDetail .line {
            margin: 30px 0px;
            margin-left: -70px;
            width: 260px;
            height: 1px;
            background: #8aca38;
        }
        
        section.mayorAssistantDetail .text hr {
            margin: 30px 0px;
            margin-left: -70px;
            width: 260px;
            height: 0px;
            border-color: #8aca38;
        }
        
        section.mayorAssistantDetail .btn-contactAssistant {
            height: 102px;
            background: #f8f8f8;
            display: inline-flex;
            align-items: center;
            padding: 0px 130px 0px 30px;
            border-radius: 7px;
            margin-top: 30px;
            position: relative;
            font-size: 20px;
            letter-spacing: -0.04em;
            line-height: 13px;
            text-align: center;
            color: #999;
            font-weight: 600;
        }
        
        section.mayorAssistantDetail .btn-contactAssistant:before {
            content: '';
            position: absolute;
            height: 1px;
            width: 70px;
            background: #8aca38;
            bottom: 30px;
            left: 30px;
        }
        
        section.mayorAssistantDetail .btn-contactAssistant .icon {
            width: 48.7px;
            height: 40.55px;
            fill: #8aca38;
            position: absolute;
            right: 30px;
        }
        
        section.requestandcomplaint {
        }
        
        section.requestandcomplaint .text {
            font-weight: 600;
            font-size: 24px;
            letter-spacing: -0.02em;
            line-height: 28px;
            text-align: center;
            color: #fff;
            max-width: 490px;
            margin: 0 auto;
        }
        
        section.requestandcomplaint .buttonList {
            padding: 70px 0px 0px;
        }
        
        section.requestandcomplaint .buttonList .btn {
            height: 139px;
            position: relative;
            display: block;
            margin-bottom: 60px;
            padding: 60px 20px 45px;
        }
        
        section.requestandcomplaint .buttonList .btn b {
            font-weight: 600;
            font-size: 28px;
            text-align: left;
            color: #999;
            position: relative;
            z-index: 1;
            transition: 0.3s ease all;
        }
        
        section.requestandcomplaint .buttonList .btn:hover b {
            color: #8aca38;
        }
        
        section.requestandcomplaint .buttonList .btn:hover {
        }
        
        section.requestandcomplaint .buttonList .btn:before {
            content: '';
            border-radius: 6px;
            background: #f8f8f8;
            position: absolute;
            inset: 0;
            z-index: 1;
            transition: 0.3s ease all;
        }
        
        section.requestandcomplaint .buttonList .btn:hover:before {
            content: '';
            border-radius: 6px;
            background: #066069;
            box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.21);
            bottom: -30px;
        }
        
        section.requestandcomplaint .buttonList .btn .icon {
            width: 56.86px;
            height: 56.87px;
            position: absolute;
            fill: #066069;
            z-index: 1;
            right: 24px;
            top: 50%;
            transform: translateY(-50%);
            transition: 0.3s ease all;
        }
        
        section.requestandcomplaint .buttonList .btn:hover .icon {
            fill: #fff;
        }
        
        section.requestandcomplaint .buttonList .btn span {
            position: absolute;
            opacity: 0;
            transition: 0.3s ease all;
            font-size: 18px;
            letter-spacing: -0.04em;
            line-height: 68px;
            text-align: left;
            color: #fff;
            z-index: 2;
            left: 0px;
            right: 0px;
            text-align: center;
            bottom: 0px;
        }
        
        section.requestandcomplaint .buttonList .btn:hover span {
            opacity: 1;
            bottom: -30px;
        }
        
        section.requestandcomplaint .askRequest {
            text-align: center;
            margin-bottom: 100px;
        }
        
        section.requestandcomplaint .askRequest .btn {
            font-weight: 600;
            font-size: 28px;
            line-height: 68px;
            text-align: left;
            color: #999;
            background: #f8f8f8;
            padding: 16px 80px;
        }
        
        .organization-tree {
            padding-bottom: 100px;
        }
        
        .organization-tree .tree0 {
            display: flex;
            justify-content: center;
            padding-bottom: 50px;
            position: relative;
        }
        
        .organization-tree .tree0:after {
            content: '';
            width: 1px;
            height: 50px;
            position: absolute;
            left: 50%;
            transform: translatex(-50%);
            background: #ececec;
            bottom: 0px;
        }
        
        .organization-tree .tree0 .item.size1 {
            font-weight: 600;
            font-size: 20px;
            line-height: 18px;
            text-align: center;
            color: #fff;
            background: #066069;
            height: 76px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0px 44px;
            border-radius: 6px;
            flex-direction: column;
            margin: 0 25px;
        }
        
        .organization-tree .tree0 .item.size1 span {
            display: block;
            font-size: 16px;
            font-weight: 300;
        }
        
        .organization-tree .tree0 > li {
            position: relative;
        }
        
        .organization-tree .tree {
            display: flex;
            justify-content: center;
            padding-bottom: 50px;
            position: relative;
        }
        
        .organization-tree .tree:after {
            content: '';
            width: 1px;
            height: 50px;
            position: absolute;
            left: 50%;
            transform: translatex(-50%);
            background: #ececec;
            bottom: 0px;
        }
        
        .organization-tree .tree .item.size1 {
            font-weight: 600;
            font-size: 20px;
            line-height: 18px;
            text-align: center;
            color: #fff;
            background: #066069;
            height: 76px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0px 44px;
            border-radius: 6px;
            flex-direction: column;
            margin: 0 25px;
        }
        
        .organization-tree .tree .item.size1 span {
            display: block;
            font-size: 16px;
            font-weight: 300;
        }
        
        .organization-tree .tree .item.size1 a {
            color: #fff;
        }
        
        .organization-tree .tree2 .item.size2 a {
            color: #fff;
        }
        
        .organization-tree .tree2 .item.size3 a {
            color: #066069;
        }
        
        .organization-tree .tree > li {
            position: relative;
        }
        
        .organization-tree .tree > li:before {
            content: '';
            background: #dadada;
            height: 1px;
            left: 0px;
            width: 25px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: -1;
        }
        
        .organization-tree .tree > li:first-child:before {
            content: '';
            display: none;
        }
        
        .organization-tree .tree > li:last-child:after {
            content: '';
            display: none;
        }
        
        .organization-tree .tree > li:after {
            content: '';
            background: #dadada;
            height: 1px;
            right: 0px;
            width: 25px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: -1;
        }
        
        .organization-tree .tree2 {
            display: flex;
            justify-content: space-between;
            padding-top: 50px;
        }
        
        .organization-tree .tree2:after {
            content: '';
        }
        
        .organization-tree .tree2:before {
            content: '';
        }
        
        .organization-tree .tree2 > li {
            position: relative;
            padding: 0 25px;
            flex: 1 1 0px;
        }
        
        .organization-tree .tree2 > li > .item > :before {
            content: '';
            width: 1px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            background: whitesmoke;
            bottom: 0px;
            z-index: -1;
            top: -50px;
        }
        
        .organization-tree .tree2 > li:after {
            content: '';
            height: 1px;
            position: absolute;
            top: 0px;
            background: #ededed;
            width: 100%;
            top: -50px;
            left: 0px;
        }
        
        .organization-tree .tree2 > li:first-child:after {
            left: 50%;
        }
        
        .organization-tree .tree2 > li:last-child:after {
            right: 50%;
            left: unset;
        }
        
        .organization-tree .tree2 .item.size2 {
            font-weight: 600;
            font-size: 16px;
            line-height: 18px;
            text-align: center;
            color: #fff;
            background: #8ACA38;
            height: 56px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0px 28px;
            border-radius: 6px;
            flex-direction: column;
            white-space: nowrap;
            position: relative;
        }
        
        .organization-tree .tree2 .item.size2 span {
            display: block;
            font-size: 16px;
            font-weight: 300;
        }
        
        .organization-tree .tree2 .item.empty {
            height: 56px;
            position: relative;
        }
        
        .organization-tree .tree2 .item.empty:before {
            content: '';
            width: 1px;
            position: absolute;
            background: #ededed;
            bottom: 0px;
            top: -50px;
            left: 50%;
            transform: translateX(-50%);
        }
        
        .organization-tree .tree2 .item.size3 {
            font-weight: 600;
            font-size: 16px;
            border-radius: 8px;
            background: #fff;
            border: 1px solid #dadada;
            line-height: 18px;
            text-align: center;
            color: #066069;
            height: 77px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0px 18px;
            flex-direction: column;
            /* white-space: nowrap; */
            min-width: 180px;
        }
        
        .organization-tree .tree2 .item.size3 span {
            display: block;
            font-size: 16px;
            font-weight: 300;
            color: #999999;
        }
        
        .organization-tree .tree3 {
            margin-top: 50px;
        }
        
        .organization-tree .tree3:before {
            content: '';
        }
        
        .organization-tree .tree3 > li {
            padding-bottom: 20px;
            position: relative;
        }
        
        .organization-tree .tree3 > li:before {
            content: '';
            left: 50%;
            transform: translateX(-50%);
            width: 1px;
            height: 50px;
            background: #ededed;
            position: absolute;
            z-index: -1;
            bottom: 100%;
        }
        
        .organization-tree .tree3 > li:after {
            content: '';
        }
        
        section.mainFacilities {
            min-height: 100vh;
            position: relative;
            z-index: 1;
        }
        
        section.mainFacilities .mainFacilities-slider1 {
        }
        
        section.mainFacilities .mainFacilitiesNavs1 {
            z-index: 2;
            position: absolute;
            bottom: 140px;
            left: 50%;
            transform: translateX(-50%);
        }
        
        section.mainFacilities .mainFacilitiesArrows1 {
            height: 35px;
            border-radius: 17.5px;
            background: #fff;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            position: relative;
            padding: 0px 45px;
            cursor: pointer;
            margin: 0px 5px;
            transition: 0.3s ease all;
            font-size: 16px;
            letter-spacing: 0.01em;
            text-align: left;
            color: #999;
        }
        
        section.mainFacilities .mainFacilitiesArrows1 span {
        }
        
        section.mainFacilities .mainFacilitiesArrows1.prev {
        }
        
        section.mainFacilities .mainFacilitiesArrows1 .icon {
            height: 16.68px;
            width: 9.92px;
            fill: #066069;
            position: absolute;
            right: 12px;
            transition: 0.3s ease all;
        }
        
        section.mainFacilities .mainFacilitiesArrows1.prev .icon {
            right: unset;
            left: 12px;
            transform: rotate(180deg);
        }
        
        section.mainFacilities .mainFacilitiesArrows1:hover {
            color: #fff;
            background: #066069;
        }
        
        section.mainFacilities .mainFacilitiesArrows1:hover .icon {
            fill: #8ACA39;
        }
        
        section.mainFacilities .mainFacilities-slider1 .swiper-slide {
            height: 100vh;
            position: relative;
        }
        
        section.mainFacilities .mainFacilities-slider1 .swiper-slide .content {
            position: absolute;
            top: 230px;
            left: 70px;
            z-index: 2;
        }
        
        section.mainFacilities .mainFacilities-slider1 .swiper-slide .content h1 {
            font-weight: 600;
            font-size: 50px;
            color: #fff;
            margin-bottom: 10px;
        }
        
        section.mainFacilities .mainFacilities-slider1 .swiper-slide .content .title {
            font-size: 28px;
            color: #fff;
            margin-bottom: 25px;
        }
        
        section.mainFacilities .mainFacilities-slider1 .swiper-slide .content .text {
            font-weight: 300;
            font-size: 18px;
            text-align: left;
            color: #fff;
            margin-bottom: 35px;
        }
        
        section.mainFacilities .mainFacilities-slider1 .swiper-slide .content .btn {
            font-weight: 600;
            font-size: 22px;
            letter-spacing: 0.01em;
            color: #fff;
            border-radius: 26px;
            background: #066069;
            padding: 12px 33px;
        }
        
        section.mainFacilities .mainFacilities-slider1 .swiper-slide .content .btn:hover {
            background: #8aca38;
        }
        
        section.mainFacilities .mainFacilities-slider1 .swiper-slide .facilitieLogo {
            position: absolute;
            left: 50px;
            bottom: 45px;
            z-index: 2;
        }
        
        section.mainFacilities .mainFacilities-slider1 .swiper-slide .facilitieLogo img {
            transform: scale(0.5);
            transition: 0.3s ease all;
        }
        
        section.mainFacilities .mainFacilities-slider1 .swiper-slide.swiper-slide-active .facilitieLogo img {
            transform: scale(1);
        }
        
        section.mainFacilities .facilitiesImagesWrapper {
            position: relative;
            z-index: 1;
        }
        
        section.mainFacilities .facilitiesImagesWrapper .facilitiesImages:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 2;
            left: 0;
            background: url(../img/gradient1.png);
            pointer-events: none;
            background-repeat: no-repeat;
            background-position: left bottom;
            pointer-events: none;
            opacity: .8;
        }
        
        section.mainFacilities .facilitiesImagesWrapper .facilitiesImages {
            position: relative;
            height: 100vh;
        }
        
        section.mainFacilities .facilitiesImagesWrapper .facilitiesImages .item {
            position: absolute;
            inset: 0;
            opacity: 0;
            transition: 0.3s ease all;
        }
        
        section.mainFacilities .facilitiesImagesWrapper .facilitiesImages .item.active {
            opacity: 1;
        }
        
        section.mainFacilities .facilitiesImagesWrapper .facilitiesImages .item .img {
            height: 100vh;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
        
        section.mainFacilities .facilitiesImagesWrapper .facilitiesImages .item .img:before {
            content: '';
            position: absolute;
            left: 0px;
            right: 0px;
            top: 0px;
            bottom: 0px;
            background: #000;
            opacity: 0.40;
        }
        
        section.mainFacilities .facilitiesImagesWrapper .facilitiesImagesThumb {
            position: absolute;
            left: 50%;
            max-width: 1100px;
            transform: translateX(-50%);
            z-index: 22;
            bottom: 25px;
            height: 92px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        section.mainFacilities .facilitiesImagesWrapper .facilitiesImagesThumb .item {
            width: 20%;
            border-radius: 8px;
            margin: 0 8.5px;
            cursor: pointer;
            border: 2px solid transparent;
            transition: 0.3s ease all;
        }
        
        section.mainFacilities .facilitiesImagesWrapper .facilitiesImagesThumb .item.active {
            border: 2px solid #fff;
        }
        
        section.mainFacilities .facilitiesImagesWrapper .facilitiesImagesThumb .item .img {
            height: 90px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            border-radius: 8px;
            background-color: #fff;
        }
        
        section.mainMeramTv {
            height: 100vh;
            position: relative;
            z-index: 1;
        }
        
        section.mainMeramTv .buttons .btn {
            font-size: 22px;
            letter-spacing: 0.01em;
            text-align: left;
            background: #066069;
            color: #fff;
            border-radius: 26px;
            padding: 15px 35px;
            display: inline-block;
            transition: 0.3s ease all;
            margin: 0 auto;
        }
        
        section.mainMeramTv .buttons {
            display: flex;
            margin-top: 20px;
        }
        
        section.mainMeramTv .buttons .btn:hover {
            color: #066069;
            background: #fff;
        }
        
        section.mainMeramTv:before {
            content: '';
            position: absolute;
            height: 100%;
            width: 100%;
            z-index: -3;
            left: 0px;
            background: url(../img/gradient1.png);
            background-repeat: no-repeat;
            background-position: left bottom;
            pointer-events: none;
            right: 0px;
            bottom: 0px;
        }
        
        section.mainMeramTv .meramtv-container {
            padding: 160px 65px 100px;
            position: relative;
            z-index: 1;
        }
        
        section.mainMeramTv .meramtv-container h2 {
            font-weight: 600;
            font-size: 50px;
            text-align: left;
            color: #fff;
            margin-bottom: 10px;
        }
        
        section.mainMeramTv .meramtv-container h2 + p {
            font-size: 18px;
            color: #fff;
            margin-bottom: 20px;
        }
        
        section.mainMeramTv .meramTvSlider {
            height: 520px;
        }
        
        section.mainMeramTv .meramTvItem {
            display: block;
            position: relative;
            overflow: hidden;
            border-radius: 15px;
            padding-bottom: 56%;
            margin-bottom: 22px;
        }
        
        section.mainMeramTv .meramTvItem .img {
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            position: absolute;
            inset: 0;
        }
        
        section.mainMeramTv .meramTvItem .img:before {
            content: '';
            position: absolute;
            inset: 0;
            background: #000;
            opacity: 0.4;
        }
        
        section.mainMeramTv .meramTvSlider .swiper-wrapper {
            height: unset;
        }
        
        section.mainMeramTv .meramTvSlider .swiper-slide {
            height: unset;
        }
        
        section.mainMeramTv .meramTvItem span {
            position: absolute;
            left: 35px;
            right: 35px;
            bottom: 25px;
            color: #fff;
            font-size: 18px;
            z-index: 1;
            padding-right: 110px;
        }
        
        section.mainMeramTv .meramTvItem span small {
            color: #ffffff;
            font-weight: 300;
            font-size: 15px;
            letter-spacing: -0.02em;
            position: absolute;
            right: 0px;
            bottom: 0px;
        }
        
        section.events .warapper {
            display: flex;
            justify-content: space-between;
        }
        
        section.events .warapper .calendarArea {
            width: 540px;
            margin-top: 35px;
        }
        
        section.events .warapper .eventsArea {
            width: 760px;
            margin-right: 80px;
        }
        
        section.events .warapper .calendarArea .mini-cal {
            background: transparent;
            font-family: proxima-nova, sans-serif;
        }
        
        section.events .warapper .calendarArea #calThead {
        }
        
        section.events .warapper .calendarArea #calThead > div {
            font-weight: 600;
            font-size: 14px;
            letter-spacing: 0.01em;
            text-align: left;
            color: #8aca38;
            margin: 0px 3px;
            display: flex;
            align-items: flex-end;
            max-width: unset;
        }
        
        section.events .warapper .calendarArea #calThead > div:nth-last-child(-n+2) {
            color: #999;
            opacity: 0.34;
        }
        
        section.events .warapper .calendarArea #calTbody {
            margin: 0 -3px;
        }
        
        section.events .warapper .calendarArea #calTbody .a-date {
            background: #fff;
            border: unset;
            margin: 3px;
            padding: unset;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            padding: 6px;
            border: 1px solid rgba(112, 112, 112, 0.07);
            box-shadow: 0px 3px 6px rgba(58, 58, 58, 0.09);
            cursor: pointer;
            border-radius: 5px;
            height: 70px;
        }
        
        section.events .warapper .calendarArea #calTbody .a-date > span {
            font-weight: 600;
            font-size: 21px;
            letter-spacing: 0.01em;
            text-align: left;
            color: #066069;
            display: inline-block;
        }
        
        section.events .warapper .calendarArea #calTbody .a-date.blurred {
        }
        
        section.events .warapper .calendarArea #calTbody .a-date.event {
        }
        
        section.events .warapper .calendarArea #calTbody .a-date.event:before {
            width: 9px;
            height: 9px;
            background: #e8e005;
            right: 6px;
            top: 6px;
            position: absolute;
            left: unset;
        }
        
        section.events .warapper .calendarArea #calTbody .a-date, section.events .warapper .calendarArea #calThead > div {
            width: 70px;
            min-width: 70px;
            max-width: 70px;
        }
        
        section.events .warapper .calendarArea #calTbody .a-date:hover {
            background: #8aca38;
        }
        
        section.events .warapper .calendarArea #calTbody .a-date:hover span {
        }
        
        section.events .warapper .calendarArea #calTitle {
            display: block;
            position: relative;
            padding: 10px 10px;
        }
        
        section.events .warapper .calendarArea #calTitle navi {
        }
        
        section.events .warapper .calendarArea #calTitle button {
            width: 66px;
            height: 35px;
            border-radius: 17.5px;
            background: #999;
            opacity: 0.5;
            padding: 9px 40px 9px 12px;
            display: inline-block;
            cursor: pointer;
            transition: 0.3s ease all;
        }
        
        section.events .warapper .calendarArea #calTitle button .icon {
            height: 16.68px;
            width: 9.92px;
            fill: #fff;
        }
        
        section.events .warapper .calendarArea #calTitle button.prev {
        }
        
        section.events .warapper .calendarArea #calTitle button.prev .icon {
            transform: rotate(180deg);
        }
        
        section.events .warapper .calendarArea #calTitle button.next {
            padding: 9px 12px 9px 40px;
        }
        
        section.events .warapper .calendarArea #calTitle .navi {
            text-align: right;
        }
        
        section.events .warapper .calendarArea #calTitle button:hover {
            background: #066069;
            opacity: 1;
        }
        
        section.events .warapper .calendarArea #calTitle #month {
            font-size: 130px;
            letter-spacing: 0.01em;
            color: #fff;
            text-shadow: 0px 23px 99px rgba(0, 0, 0, 0.16);
            font-weight: bold;
            position: absolute;
            top: 40px;
            pointer-events: none;
        }
        
        section.events .warapper .calendarArea #calTitle #year {
            position: absolute;
            font-weight: 600;
            font-size: 32px;
            letter-spacing: -0.04em;
            line-height: 28px;
            text-align: left;
            color: #066069;
            top: 150px;
            pointer-events: none;
        }
        
        .scroll-list {
            width: 100%;
        }
        
        @media screen and (max-width: 768px) {
            .scroll-list {
                margin-top: 20px;
            }
        }
        
        .scroll-list__wrp {
            width: 100%;
            height: 700px;
            overflow: auto;
            margin-bottom: 15px;
            border-radius: 8px;
            overflow-x: unset !important;
            padding: 0px 50px;
        }
        
        .scroll-list__wrp .scrollbar-track {
            display: none !important;
        }
        
        @media screen and (max-width: 768px) {
            .scroll-list__wrp {
                padding: 25px;
            }
        }
        
        .scroll-list__item {
            width: 100%;
            height: 280px;
            display: block;
            margin-bottom: 15px;
            border-radius: 8px;
            transition: all 0.35s ease-in-out;
            opacity: 0;
            transform: scale(0.7);
            box-shadow: 0px 0px 60px rgb(0 0 0 / 15%);
            border-radius: 6px;
            background: #fff;
            overflow: hidden;
        }
        
        .scroll-list__item .calendar-wrapper {
            padding: 17px;
        }
        
        .scroll-list__item .image {
            max-height: 50%;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .scroll-list__item .image img {
            max-width: 100%;
        }
        
        .scroll-list__item.item-hide {
            opacity: 0;
            transform: scale(0.7);
        }
        
        .scroll-list__item.item-focus {
            opacity: 1;
            transform: scale(1);
        }
        
        .scroll-list__item.item-next {
            opacity: 1;
            transform: scale(1);
        }
        
        .scroll-list__item.item-next-next {
            opacity: 1;
            transform: scale(1);
        }
        
        .scroll-list__item.item-next-next + .scroll-list__item {
            opacity: 1;
            transform: scale(1);
        }
        
        .scroll-list__item:last-child {
            margin-bottom: 155px;
        }
        
        .js-scroll-list-item {
            cursor: pointer;
        }
        
        .js-scroll-list-item .date {
            font-weight: 600;
            font-size: 32px;
            letter-spacing: -0.04em;
            line-height: 28px;
            text-align: left;
            color: #999;
            margin-bottom: 10px;
            margin-top: 20px;
            transition: 0.3s ease all;
            padding-left: 15px;
        }
        
        .js-scroll-list-item .title {
            font-weight: 600;
            font-size: 18px;
            letter-spacing: 0.02em;
            line-height: 19px;
            text-align: left;
            color: #066069;
            margin-bottom: 10px;
            transition: 0.3s ease all;
            padding-left: 15px;
        }
        
        .js-scroll-list-item p {
            font-weight: 300;
            font-size: 16px;
            letter-spacing: 0.02em;
            line-height: 19px;
            text-align: left;
            color: #999;
            transition: 0.3s ease all;
            padding-left: 15px;
        }
        
        .js-scroll-list-item:before {
            content: '';
            -webkit-mask-image: url(../img/svg/arrow-right.svg);
            -webkit-mask-position: top center;
            -webkit-mask-size: 100% 100%;
            -webkit-mask-repeat: no-repeat;
            transition: 0.5s ease all;
            width: 25px;
            height: 16.82px;
            background: #8aca38;
            position: absolute;
            right: 30px;
            bottom: 40px;
        }
        
        .js-scroll-list-item:hover {
            background: #066069;
        }
        
        .js-scroll-list-item:hover .date {
            color: #8aca38;
        }
        
        .js-scroll-list-item:hover .title {
            color: #f8f8f8;
        }
        
        .js-scroll-list-item:hover p {
            color: #f8f8f8;
        }
        
        .js-scroll-list-item:hover:before {
            content: '';
        }
        
        section.corporate .parliamentaryagenda {
        }
        
        section.corporate .parliamentaryagenda .item b {
            font-weight: bold;
        }
        
        section.corporate .parliamentaryagenda .item {
            font-size: 20px;
            line-height: 31px;
            text-align: left;
            color: #999;
            display: block;
            font-weight: 300;
            padding: 20px 20px;
            margin-bottom: 20px;
            border-bottom: 1px solid #dadada;
        }
        
        section.corporate .parliamentaryagenda .year {
            padding: 20px 20px;
            font-weight: 600;
            font-size: 42px;
            letter-spacing: -0.02em;
            line-height: 42px;
            color: #066069;
            margin-top: 30px;
        }
        
        section.corporate .parliamentaryagendaDetail {
            padding-bottom: 20px;
            margin-bottom: 50px;
            border-bottom: 1px solid #dadada;
            margin-top: 40px;
        }
        
        section.corporate .parliamentaryagendaDetail .info {
            font-size: 18px;
            font-weight: 300;
            color: #999999;
            margin-bottom: 10px;
        }
        
        section.corporate .parliamentaryagendaDetail .info b {
            font-weight: bold;
            color: #066069;
        }
        
        section.corporate .parliamentaryagendaDetail p {
            font-weight: 300;
            font-size: 16px;
            line-height: 24px;
            text-align: left;
            color: #999;
        }
        
        section.corporate .parliamentaryagendaDetail2 {
            text-align: center;
            margin-bottom: 30px;
        }
        
        section.corporate .parliamentaryagendaDetail2 img {
            box-shadow: 0px 10px 45px rgba(0, 0, 0, 0.05);
        }
        
        .directorateDetail {
        }
        
        .directorateDetail .name {
            font-size: 35px;
            font-weight: 300;
            color: #999999;
            margin-bottom: 10px;
        }
        
        .directorateDetail .name span {
            display: block;
            font-size: 24px;
            font-weight: 300;
        }
        
        .directorateDetail .info {
            margin-bottom: 30px;
        }
        
        .directorateDetail .info a {
            font-weight: 300;
            font-size: 16px;
            line-height: 22px;
            text-align: left;
            color: #999;
        }
        
        .directorateDetail .editortext {
            font-weight: 300;
            font-size: 16px;
            line-height: 28px;
            text-align: left;
            color: #999;
            margin-bottom: 60px;
        }
        
        .directorateDetail p {
            font-weight: 300;
            font-size: 16px;
            line-height: 28px;
            text-align: left;
            color: #999;
        }
        
        .directorateDetail .files {
        }
        
        .directorateDetail .files .title {
            font-weight: 300;
            font-size: 35px;
            line-height: 31px;
            text-align: left;
            color: #999;
            margin-bottom: 30px;
        }
        
        .directorateDetail .files .file {
            border-radius: 6px;
            background: #f8f8f8;
            border: 1px solid #f1f1f1;
            margin-bottom: 25px;
            display: flex;
            flex-direction: row;
            padding: 48px 32px;
            align-items: center;
            position: relative;
        }
        
        .directorateDetail .files .file:before {
            content: '';
            height: 2px;
            width: 0px;
            position: absolute;
            left: 25px;
            background: #8aca38;
            transition: 0.3s ease all;
            bottom: 21px;
        }
        
        .directorateDetail .files .file .icon {
            width: 40px;
            height: 46px;
            fill: #066069;
            margin-right: 20px;
            transition: 0.3s ease all;
        }
        
        .directorateDetail .files .file span {
            font-size: 18px;
            letter-spacing: -0.02em;
            text-align: left;
            color: #999;
            transition: 0.3s ease all;
        }
        
        .directorateDetail .files .file:hover {
            background: #066069;
            border: 1px solid rgba(6, 96, 105, 0.21);
            filter: drop-shadow(0px 10px 23px rgba(6, 96, 105, 0.1));
        }
        
        .directorateDetail .files .file:hover:before {
            content: '';
            width: 110px;
        }
        
        .directorateDetail .files .file:hover .icon {
            fill: #8aca38;
        }
        
        .directorateDetail .files .file:hover span {
            color: #fff;
        }
        
        .directorateDetail .newTitle {
            font-weight: 300;
            font-size: 35px;
            line-height: 31px;
            text-align: left;
            color: #999;
            margin-bottom: 20px;
        }
        
        .directorateDetail .manager .contact {
            height: 102px;
            display: inline-flex;
            align-items: center;
            padding: 0px 130px 0px 30px;
            border-radius: 7px;
            position: relative;
            font-size: 20px;
            letter-spacing: -0.04em;
            line-height: 13px;
            text-align: center;
            color: #fff;
            font-weight: 600;
            width: 90%;
            margin: 0 auto;
            display: flex;
            margin-top: -30px;
            background: #066069;
        }
        
        .directorateDetail .manager .contact:before {
            content: '';
            position: absolute;
            height: 1px;
            width: 70px;
            background: #8aca38;
            bottom: 30px;
            left: 30px;
        }
        
        .directorateDetail .manager .contact .icon {
            width: 48.7px;
            height: 40.55px;
            fill: #8aca38;
            position: absolute;
            right: 30px;
        }
        
        .directorateDetail .manager .img {
            border-radius: 12px;
            padding-bottom: 125%;
            overflow: hidden;
            position: relative;
        }
        
        .directorateDetail .manager img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            max-width: unset;
            min-width: 100%;
            height: 100%;
            min-width: 100%;
        }
        
        .committee .files {
        }
        
        .committee .title {
            font-weight: 300;
            font-size: 35px;
            line-height: 31px;
            text-align: left;
            color: #999;
            margin-bottom: 30px;
        }
        
        section.corporate .fileList {
            margin-bottom: 30px;
        }
        
        section.corporate .fileList .fileTitle {
            font-weight: 300;
            font-size: 35px;
            line-height: 31px;
            text-align: left;
            color: #999;
            margin-bottom: 30px;
        }
        
        section.corporate .fileList .file {
            border-radius: 6px;
            background: #f8f8f8;
            border: 1px solid #f1f1f1;
            margin-bottom: 25px;
            display: flex;
            flex-direction: row;
            padding: 17px 22px 17px 32px;
            align-items: center;
            position: relative;
            min-height: 100px;
        }
        
        section.corporate .fileList .file:before {
            content: '';
            height: 2px;
            width: 0px;
            position: absolute;
            left: 25px;
            background: #8aca38;
            transition: 0.3s ease all;
            bottom: 11px;
        }
        
        section.corporate .fileList .file .icon {
            min-width: 40px;
            width: 40px;
            height: 46px;
            fill: #066069;
            margin-right: 20px;
            transition: 0.3s ease all;
        }
        
        section.corporate .fileList .file span {
            font-size: 18px;
            letter-spacing: -0.02em;
            text-align: left;
            color: #999;
            transition: 0.3s ease all;
        }
        
        section.corporate .fileList .file:hover {
            background: #066069;
            border: 1px solid rgba(6, 96, 105, 0.21);
            filter: drop-shadow(0px 10px 23px rgba(6, 96, 105, 0.1));
        }
        
        section.corporate .fileList .file:hover:before {
            content: '';
            width: 110px;
        }
        
        section.corporate .fileList .file:hover .icon {
            fill: #8aca38;
        }
        
        section.corporate .fileList .file:hover span {
            color: #fff;
        }
        
        section.corporate .fileList2 {
            margin-bottom: 40px;
        }
        
        section.corporate .fileList2 .fileTitle {
            font-weight: 300;
            font-size: 35px;
            line-height: 31px;
            text-align: left;
            color: #999;
            margin-bottom: 20px;
        }
        
        section.corporate .fileList2 .file {
            display: flex;
            height: 100px;
            background: #f8f8f8;
            border: 1px solid #f1f1f1;
            margin-bottom: 18px;
            border-radius: 6px;
            padding: 20px 10px 20px 18px;
            align-items: center;
        }
        
        section.corporate .fileList2 .file .text {
            font-size: 18px;
            letter-spacing: -0.02em;
            line-height: 22px;
            text-align: left;
            color: #999;
        }
        
        section.corporate .fileList2 .file .imgArea {
            width: 99px;
            height: 99px;
            border-radius: 8px;
            background: #066069;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 10px;
            margin-right: 11px;
            min-width: 99px;
        }
        
        section.corporate .fileList2 .file .imgArea .img {
            display: block;
            width: 100%;
            height: 50px;
            background-repeat: no-repeat;
            background-position: center;
        }
        
        section.corporate .fileList2.with-image .file > img {
            margin-right: 15px;
        }
        
        section.corporate .fileList2.with-image .file:hover {
        }
        
        section.corporate .fileList2 .file .imgArea .ext {
            font-size: 14px;
            letter-spacing: -0.02em;
            line-height: 22px;
            color: #8aca38;
            text-align: center;
        }
        
        section.corporate .fileList2 .file .text span {
            display: block;
        }
        
        section.announcements {
            margin-bottom: 50px;
        }
        
        section.announcements .announcement {
            height: 140px;
            border-radius: 6px;
            background: #fff;
            border: 1px solid rgba(153, 153, 153, 0.3);
            padding: 6px;
            display: flex;
            margin-bottom: 18px;
        }
        
        section.announcements .announcement .iconArea {
            width: 142px;
            border-radius: 5px;
            background: #066069;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 20px;
            min-width: 140px;
        }
        
        section.announcements .announcement .iconArea .icon {
            height: 70px;
            width: 70px;
            background: #8aca38;
            -webkit-mask-position: center;
            -webkit-mask-repeat: no-repeat;
        }
        
        section.announcements .announcement .content {
            display: flex;
            align-items: center;
            position: relative;
            width: 100%;
        }
        
        section.announcements .announcement .content {
        }
        
        section.announcements .announcement .content .text {
            font-size: 16px;
            letter-spacing: -0.04em;
            line-height: 18px;
            color: #4a4a4a;
            font-weight: 600;
        }
        
        section.announcements .announcement .content .date {
            font-size: 14px;
            color: #999;
            font-weight: 300;
            position: absolute;
            left: 0px;
            bottom: 12px;
        }
        
        section.announcements .more {
            text-align: center;
            margin-bottom: 30px;
            margin: 50px 0px 30px;
        }
        
        section.announcements .more .btn {
            display: inline-block;
            border-radius: 26px;
            background: #066069;
            font-size: 22px;
            letter-spacing: 0.01em;
            color: #fff;
            padding: 12px 35px;
            font-weight: 600;
            text-align: center;
        }
        
        section.announcements .more .btn:hover {
            background: #8aca38;
        }
        
        section.projects {
        }
        
        section.projects .wrapper {
            background: #fafafa;
            box-shadow: 0px 3px 47px rgba(0, 0, 0, 0.14);
            padding: 35px 60px;
        }
        
        section.projects .nav {
            text-align: center;
        }
        
        section.projects .nav a {
            font-weight: 600;
            font-size: 20px;
            text-align: left;
            color: #fff;
            background: #066069;
            display: inline-block;
            padding: 20px 30px;
            border-radius: 6px 6px 0px 0px;
        }
        
        section.projects .nav a:hover, section.projects .nav a.active {
            background: #8aca38;
            color: #066069;
        }
        
        section.projects .project {
            height: 270px;
            border-radius: 8px;
            background: #fff;
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.05);
            display: block;
            padding: 6px;
            margin-bottom: 30px;
            position: relative;
            overflow: hidden;
        }
        
        section.projects .project .img {
            height: 150px;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            border-radius: 6px;
            margin-bottom: 13px;
        }
        
        section.projects .project .title {
            font-size: 15px;
            color: #066069;
            display: block;
            padding: 0px 7px;
            margin-bottom: 13px;
        }
        
        section.projects .project .text {
            font-weight: 300;
            font-size: 13px;
            line-height: 18px;
            text-align: left;
            color: #999;
            padding: 0px 7px;
            display: block;
        }
        
        section.projects .project .hover {
            position: absolute;
            inset: 0px;
            background: rgb(138 202 56 / 95%);
            opacity: 0;
            transition: 0.3s ease all;
            padding: 80px 30px 30px 30px;
        }
        
        section.projects .project .hover:before {
            content: '';
            background: #066069;
            height: 2px;
            width: 0px;
            position: absolute;
            right: 30px;
            bottom: 20px;
            transition: 0.3s 0.4s ease all;
        }
        
        section.projects .project .title2 {
            font-weight: 600;
            font-size: 18px;
            color: #066069;
            display: block;
            text-align: center;
            opacity: 0;
            transition: 0.3s 0.2s ease all;
        }
        
        section.projects .project .view {
            font-size: 18px;
            color: #fff;
            position: absolute;
            right: 30px;
            bottom: 30px;
            width: 100px;
            text-align: right;
            opacity: 0;
            transition: 0.3s 0.3s ease all;
        }
        
        section.projects .project:hover .hover {
            opacity: 1;
        }
        
        section.projects .project:hover .hover:before {
            width: 70px;
        }
        
        section.projects .project:hover .hover .title2 {
            opacity: 1;
        }
        
        section.projects .project:hover .hover .view {
            opacity: 1;
        }
        
        section.history {
            max-width: 100%;
            overflow: hidden;
        }
        
        section.history .wrapper {
            max-width: 1200px;
            margin: 0 auto;
            padding: 50px 0;
        }
        
        section.history .wrapper h2 {
            font-weight: 300;
            font-size: 35px;
            line-height: 31px;
            color: #999;
            margin-bottom: 10px;
        }
        
        section.history .wrapper p {
            font-size: 18px;
            letter-spacing: -0.02em;
            line-height: 24px;
            color: #999;
            font-weight: 500;
        }
        
        section.history .wrapper img {
            max-width: unset;
            width: 100vw;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            margin: 40px 0px;
        }
        
        section.mediation {
            min-height: 800px;
            justify-content: start;
            margin-bottom: 0;
        }
        
        section.mediation h1 {
        }
        
        section.mediation .info {
            margin-top: 40px;
            border-bottom: 1px solid rgb(112 112 112 / 30%);
            padding-bottom: 50px;
        }
        
        section.mediation .info .title {
            font-weight: 600;
            font-size: 18px;
            letter-spacing: -0.02em;
            line-height: 24px;
            text-align: left;
            color: #8aca38;
            margin-bottom: 24px;
        }
        
        section.mediation .info .text, section.mediation .info .text a {
            font-size: 18px;
            letter-spacing: -0.02em;
            line-height: 24px;
            text-align: left;
            color: #999;
            margin-bottom: 24px;
        }
        
        section.corporate .officiant {
            display: flex;
        }
        
        section.corporate .officiant .img {
            width: 245px;
            height: 330px;
            margin-bottom: 45px;
            position: relative;
            margin-right: 45px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        }
        
        section.corporate .officiant .img .name {
            position: absolute;
            font-weight: 300;
            font-size: 17px;
            letter-spacing: -0.04em;
            line-height: 18px;
            text-align: left;
            color: #fff;
            bottom: 17px;
            left: 15px;
        }
        
        section.corporate .officiant .content {
        }
        
        section.corporate .officiant .content p {
            font-size: 18px;
            letter-spacing: -0.02em;
            line-height: 30px;
            text-align: left;
            color: #999;
        }
        
        section.corporate .officiant .content p a {
            font-size: 18px;
            letter-spacing: -0.02em;
            line-height: 30px;
            text-align: left;
            color: #999;
        }
        
        section.corporate .wedding-map {
            position: relative;
            margin-top: 30px;
        }
        
        section.corporate .wedding-map #map {
            height: 628px;
        }
        
        .contactList1 {
        }
        
        .contactList1 .contact {
            border-radius: 6px;
            background: #f8f8f8;
            border: 1px solid #f1f1f1;
            margin-bottom: 20px;
            display: flex;
            height: 220px;
        }
        
        .contactList1 .contact .info {
            padding: 30px 35px;
            width: 100%;
        }
        
        .contactList1 .contact .info .title {
            font-size: 28px;
            letter-spacing: -0.02em;
            line-height: 22px;
            color: #066069;
            margin-bottom: 20px;
        }
        
        .contactList1 .contact .info .name {
            font-size: 18px;
            letter-spacing: -0.02em;
            line-height: 22px;
            color: #999;
            display: block;
        }
        
        .contactList1 .contact .info .phone {
            font-size: 18px;
            letter-spacing: -0.02em;
            line-height: 22px;
            color: #999;
            margin-bottom: 20px;
            display: block;
        }
        
        .contactList1 .contact .info .btn {
            font-size: 18px;
            letter-spacing: -0.02em;
            line-height: 22px;
            color: #8aca38;
            border-radius: 4px;
            background: #066069;
            padding: 11px 21px;
            display: inline-block;
        }
        
        .contactList1 .contact .mapArea {
            width: 100%;
            min-width: 60%;
        }
        
        .contactList1 .contact .mapArea > div {
            height: 100%;
        }
        
        .fileList3 {
        }
        
        .fileList3 .head {
            background: #066069;
            border-radius: 6px 6px 0px 0px;
            margin-bottom: 12px;
        }
        
        .fileList3 .head .title {
            height: 65px;
            padding: 20px;
            display: flex;
            align-items: center;
        }
        
        .fileList3 .head .title span {
            font-weight: 600;
            font-size: 16px;
            letter-spacing: -0.02em;
            line-height: 42px;
            text-align: center;
            color: #fff;
        }
        
        .fileList3 .head .title .icon {
            width: 15.81px;
            height: 21.27px;
            fill: #8aca38;
            margin-right: 5px;
        }
        
        .fileList3 .body {
        }
        
        .fileList3 .body .row {
            height: 100%;
        }
        
        .fileList3 .body .file {
            border-radius: 6px;
            background: #fff;
            border: 1px solid #dadada;
            min-height: 65px;
            height: 65px;
            margin-bottom: 12px;
            transition: 0.3s ease all;
            overflow: hidden;
        }
        
        .fileList3 .body .file:nth-child(odd) {
        }
        
        .fileList3 .body .file:nth-child(even) {
            background: #f9f9f9;
        }
        
        .fileList3 .body .file:hover {
            background: #fff;
            border: 1px solid #8aca38;
            filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));
            overflow: hidden;
        }
        
        .fileList3 .body .file .text1 {
            height: 100%;
            font-weight: 600;
            font-size: 14px;
            letter-spacing: -0.04em;
            line-height: 18px;
            text-align: left;
            color: #999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0px 20px;
            position: relative;
            transition: 0.3s ease all;
        }
        
        .fileList3 .body .file:hover .text1 {
            color: #066069;
        }
        
        .fileList3 .body .file .text1:before {
            content: '';
            width: 1px;
            position: absolute;
            right: 0px;
            top: 0px;
            bottom: 0px;
            background: #dadada;
        }
        
        .fileList3 .body .file .text2:before {
            content: '';
            width: 1px;
            position: absolute;
            right: 0px;
            top: 0px;
            bottom: 0px;
            background: #dadada;
        }
        
        .fileList3 .body .file .text3:before {
            content: '';
            width: 1px;
            position: absolute;
            right: 0px;
            top: 0px;
            bottom: 0px;
            background: #dadada;
        }
        
        .fileList3 .body .file .text2 {
            font-size: 14px;
            letter-spacing: -0.04em;
            line-height: 22px;
            text-align: center;
            color: #999;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            position: relative;
            padding: 0px 20px;
        }
        
        .fileList3 .body .file .text3 {
            font-size: 14px;
            letter-spacing: -0.04em;
            line-height: 20px;
            text-align: left;
            color: #999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0px 20px;
            height: 100%;
            position: relative;
        }
        
        .fileList3 .body .file .text1 .textDesc, .fileList3 .body .file .text2 .textDesc, .fileList3 .body .file .text3 .textDesc {
            display: none;
        }
        
        .fileList3 .body .file .process {
            display: flex;
            justify-content: space-between;
            height: 100%;
        }
        
        .fileList3 .body .file .text4 {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60%;
            font-size: 14px;
            letter-spacing: -0.04em;
            line-height: 22px;
            text-align: left;
            color: #999;
        }
        
        .fileList3 .body .file .view {
            background: #f6f6f6;
            display: flex;
            align-items: center;
            padding: 0px 18px;
            font-size: 12px;
            line-height: 22px;
            color: #066069;
            width: 40%;
            justify-content: center;
        }
        
        .fileList3 .body .file .view:hover {
            background: #8aca38;
        }
        
        .fileList3 .body .file .view .icon {
            height: 15.97px;
            width: 9.03px;
            fill: #066069;
            margin-left: 10px;
        }
        
        .fileList3 .body .file .download {
            background: #f6f6f6;
            display: flex;
            align-items: center;
            padding: 0px 18px;
            font-size: 12px;
            line-height: 22px;
            color: #066069;
            width: 40%;
            justify-content: center;
        }
        
        .fileList3 .body .file .download:hover {
            background: #8aca38;
        }
        
        .fileList3 .body .file .download .icon {
            height: 15.97px;
            width: 9.03px;
            fill: #066069;
            margin-left: 10px;
            transform: rotate(90deg);
        }
        
        .fileList3 .more {
            text-align: center;
            margin: 50px 0px 50px;
        }
        
        .fileList3 .more .btn {
            display: inline-block;
            border-radius: 26px;
            background: #066069;
            font-size: 22px;
            letter-spacing: 0.01em;
            color: #fff;
            padding: 12px 35px;
            font-weight: 600;
            text-align: center;
        }
        
        .fileList3 .more .btn:hover {
            background: #8aca38;
        }
        
        .contactList2 {
        }
        
        .contactList2 .head {
        }
        
        .contactList2 .head .title {
            font-size: 20px;
            letter-spacing: -0.02em;
            line-height: 22px;
            text-align: left;
            color: #066069;
            padding: 15px 25px;
        }
        
        .contactList2 .contact {
            border-radius: 6px;
            background: #f8f8f8;
            border: 1px solid #f1f1f1;
            height: 60px;
            margin-bottom: 20px;
        }
        
        .contactList2 .contact .row {
            height: 100%;
        }
        
        .contactList2 .contact .text {
            font-size: 18px;
            letter-spacing: -0.02em;
            line-height: 22px;
            color: #999;
            height: 100%;
            padding: 0px 25px;
            align-items: center;
            display: flex;
            width: 100%;
            position: relative;
        }
        
        .contactList2 .contact .image {
        
            position: relative;
        
            overflow: hidden;
        
            width: 100%;
        
            height: calc(100% - 20px);
        
            margin-left: 10px;
        
            margin-top: 10px;
        
            margin-bottom: 10px;
            border-radius: 4px;
        }
        
        .contactList2 .contact .image img {
        
            position: absolute;
        
            left: 50%;
        
            top: 50%;
        
            transform: translate(-50%, -50%);
        
            min-width: 100%;
        
            max-width: unset;
        
            height: 100%;
        }
        
        .contactList2 .contact .text2 {
            font-weight: 600;
            font-size: 16px;
            letter-spacing: -0.02em;
            line-height: 22px;
            text-align: left;
            color: #066069;
            height: 100%;
            padding: 0px 25px;
            align-items: center;
            display: flex;
            width: 100%;
            position: relative;
        }
        
        .contactList2 .contact .text:before {
            content: '';
            position: absolute;
            width: 1px;
            top: 0px;
            right: 0px;
            bottom: 0px;
            background: #f1f1f1;
        }
        
        .contactList2 .contact .text .textDesc, .contactList2 .contact .text2 .textDesc {
            display: none;
        }
        
        .contactList2 .contact .btnArea {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .contactList2 .contact .btnArea .btn {
            border-radius: 4px;
            background: #066069;
            display: inline-block;
            font-size: 18px;
            letter-spacing: -0.02em;
            line-height: 22px;
            text-align: left;
            color: #8aca38;
            padding: 11px 21px;
        }
        
        .contactList2 .title1 {
            font-weight: 600;
            font-size: 30px;
            letter-spacing: -0.02em;
            line-height: 42px;
            text-align: center;
            color: #999;
            margin-bottom: 30px;
        }
        
        .contactList2 .title1 span {
            color: #066069;
        }
        
        .contactList2 .accordion {
        }
        
        .contactList2 .accordion .card {
        }
        
        .contactList2 .accordion .card .card-header {
        }
        
        .contactList2 .accordion .card .card-header {
        }
        
        .contactList2 .accordion .card .card-header button {
            display: block;
            width: 100%;
            text-align: left;
            border: 0;
            background: transparent;
            border-bottom: 2px solid #e2e2e2;
            display: flex;
            justify-content: space-between;
            cursor: pointer;
            align-items: center;
            padding: 10px 0px;
        }
        
        .contactList2 .accordion .card .card-header button .text {
            font-size: 25px;
            color: #8aca38;
            font-weight: 500;
        }
        
        .contactList2 .accordion .card .card-header button .count {
            font-size: 19px;
            border-radius: 20px;
            color: #096368;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .contactList2 .accordion .collapse {
        }
        
        .contactList2 .accordion .collapse .card-body {
        }
        
        section.assemblyAreas {
            position: relative;
            z-index: 1;
            padding: 30px 0px;
        }
        
        section.assemblyAreas .htitle {
            border-radius: 8px;
            background: #fff;
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06);
            display: inline-block;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1;
            padding: 16px 38px;
            margin-top: -31px;
            font-weight: 600;
            font-size: 30px;
            letter-spacing: -0.02em;
            text-align: center;
            color: #999;
        }
        
        section.assemblyAreas .htitle span {
            color: #066069;
        }
        
        section.assemblyAreas .mapArea {
            position: relative;
        }
        
        section.assemblyAreas .mapArea #map {
            height: 720px;
        }
        
        section.assemblyAreas .mapArea .formArea {
            width: 275px;
            position: absolute;
            right: 100px;
            top: 150px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 2;
        }
        
        section.assemblyAreas .mapArea .formArea .ms-select .select-selected:after {
        }
        
        section.assemblyAreas .mapArea .formArea .ms-select {
            margin-bottom: 20px;
            width: 100%;
        }
        
        section.assemblyAreas .mapArea .formArea .btn {
            margin-top: 10px;
            border-radius: 26px;
            background: #066069;
            border: 0px;
            font-weight: 600;
            font-size: 22px;
            letter-spacing: 0.01em;
            text-align: left;
            color: #fff;
            padding: 12px 55px;
            cursor: pointer;
        }
        
        section.assemblyAreas .mapArea .formArea .btn:hover {
        }
        
        .customRadios .customRadio {
            font-size: 14px;
            letter-spacing: -0.02em;
            text-align: left;
            color: #066069;
            display: inline-block;
            position: relative;
            padding-left: 20px;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            margin-right: 20px;
        }
        
        .customRadios .customRadio input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }
        
        .customRadios .customRadio .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 50%;
            width: 14px;
            height: 14px;
            background: #fff;
        }
        
        .customRadios .customRadio:hover input ~ .checkmark {
        }
        
        .customRadios .customRadio input:checked ~ .checkmark {
        }
        
        .customRadios .customRadio .checkmark:after {
            content: "";
            position: absolute;
            display: none;
        }
        
        .customRadios .customRadio input:checked ~ .checkmark:after {
            display: block;
        }
        
        .customRadios .customRadio .checkmark:after {
            width: 6px;
            height: 6px;
            background: #066069;
            top: 9px;
            left: 9px;
            border-radius: 50%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        
        section.ebelediye {
            background: #dadada;
            margin-bottom: 0px;
            padding-bottom: 50px;
        }
        
        section.ebelediye h1 {
            font-weight: 600;
            font-size: 42px;
            letter-spacing: -0.02em;
            line-height: 42px;
            text-align: center;
            color: #066069;
        }
        
        section.ebelediye .selection {
            margin-top: 80px;
        }
        
        section.ebelediye .selection .nav {
        }
        
        section.ebelediye .selection .nav a {
            height: 102px;
            border-radius: 6px;
            background: #ffffff;
            font-size: 20px;
            letter-spacing: -0.04em;
            line-height: 13px;
            text-align: center;
            display: flex;
            align-items: center;
            padding: 0px 32px;
            color: #999;
            position: relative;
        }
        
        section.ebelediye .selection .nav a:hover, section.ebelediye .selection .nav a.active {
            background: #066069;
            color: #8aca38;
        }
        
        section.ebelediye .selection .nav a:before {
            content: '';
            height: 1px;
            background: #8aca38;
            position: absolute;
            left: 32px;
            bottom: 25px;
            width: 70px;
        }
        
        section.ebelediye .form-area .customRadios {
            /*    margin-top: 25px;*/
        }
        
        section.ebelediye .form-area input.form-control {
            border-radius: 6px;
            background: #fff;
            border: 1px solid #7070704a;
            display: block;
            width: 100%;
            height: 60px;
            font-size: 18px;
            letter-spacing: -0.02em;
            line-height: 68px;
            text-align: left;
            color: #999;
            padding: 0px 18px;
        }
        
        section.ebelediye .form-area .btn {
            font-weight: 600;
            font-size: 22px;
            letter-spacing: 0.01em;
            color: #fff;
            height: 52px;
            background: #066069;
            margin-top: 4px;
            border: 0px;
            border-radius: 26px;
            padding: 12px 60px;
            cursor: pointer;
        }
        
        section.ebelediye .form-area .btn2 {
            font-weight: 600;
            font-size: 22px;
            letter-spacing: 0.01em;
            color: #fff;
            height: 52px;
            background: #066069;
            margin-top: 4px;
            border: 0px;
            border-radius: 26px;
            padding: 12px 20px;
            cursor: pointer;
        }
        
        section.ebelediye .form-area customRadios {
            margin-top: 30px;
        }
        
        section.ebelediye .form-area .select2-container{
        
        }
        section.ebelediye .form-area .select2.select2-container .select2-selection{
            margin-bottom: 0px;
            border-radius: 6px;
            background: #fff;
            border: 1px solid #7070704a;
            display: block;
            width: 100%;
            height: 60px;
            font-size: 18px;
            letter-spacing: -0.02em;
            line-height: 68px;
            text-align: left;
            color: #999;
            padding: 0px 18px;
            display: flex;
            align-items: center;
        }
        section.ebelediye .form-area  .select2-container .select2-dropdown .select2-search input{
            border-radius: 6px;
            background: #fff;
            border: 1px solid #7070704a;
            display: block;
            width: 100%;
            height: 30px;
            font-size: 18px;
            letter-spacing: -0.02em;
            line-height: 68px;
            text-align: left;
            color: #999;
            padding: 0px 18px;
            display: flex;
            align-items: center;
            border: 1px solid #34495e !important;
        }
        section.ebelediye .form-area .select2.select2-container .select2-selection .select2-selection__rendered{
            padding-right: 20px;
        }
        
        section.ebelediye .form-area .select2.select2-container .select2-selection .select2-selection__arrow {
               height: 100%;
         }
        section.ebelediye .breadcrumb {
        }
        
        section.ebelediye .totalPrice {
            font-weight: 600;
            font-size: 36px;
            letter-spacing: -0.02em;
            line-height: 68px;
            color: #cb8f61;
            text-align: center;
        }
        
        section.ebelediyepayment .information {
            background: #f8f8f8;
            border: 1px solid #f1f1f1;
            display: flex;
            border-bottom: 0px;
            width: 100%;
        }
        
        section.ebelediyepayment .information .item {
            display: block;
            padding: 23px 35px;
            border-right: 1px solid #dadada;
            min-width: 25%;
        }
        
        section.ebelediyepayment .information .item b {
            font-weight: 600;
            font-size: 18px;
            letter-spacing: -0.02em;
            text-align: left;
            color: #066069;
        }
        
        section.ebelediyepayment .information .item span {
            font-weight: 600;
            font-size: 18px;
            letter-spacing: -0.02em;
            text-align: left;
            color: #999;
        }
        
        section.ebelediyepayment .information .item:last-child {
            border: 0px;
        }
        
        section.ebelediyepayment .paymentsTable {
        }
        
        section.ebelediyepayment .paymentsTable table {
            width: 100%;
        }
        
        section.ebelediyepayment .paymentsTable thead th {
            background: #066069;
            border-top: 1px solid #f1f1f1;
            border-bottom: 1px solid #f1f1f1;
            font-weight: 600;
            font-size: 16px;
            letter-spacing: -0.02em;
            text-align: left;
            color: #8aca38;
            padding: 22px 15px;
            white-space: nowrap;
            vertical-align: middle;
            text-align: center;
        }
        
        section.ebelediyepayment .paymentsTable thead th.check {
            text-align: center;
            vertical-align: middle;
        }
        
        section.ebelediyepayment .paymentsTable table tbody {
        }
        
        section.ebelediyepayment .paymentsTable table tbody td {
            padding: 22px 15px;
            font-size: 16px;
            letter-spacing: -0.02em;
            text-align: left;
            color: #999;
            background: #f8f8f8;
            border-bottom: 1px solid #f1f1f1;
            border-top: 1px solid #f1f1f1;
            border-right: 1px solid #dadada;
        }
        
        section.ebelediyepayment .paymentsTable table tbody td.check {
            text-align: center;
            vertical-align: middle;
        }
        
        section.ebelediyepayment .paymentsTable table tbody tr:nth-child(odd) td {
            background: #e9e9e9;
        }
        
        section.ebelediyepayment .paymentsTable table tbody tr:nth-child(even) td {
        }
        
        section.ebelediyepayment .paymentsTable table tbody td.text-center {
            text-align: center;
        }
        
        section.ebelediyepayment .paymentsTable table tbody tr.borcListTR.checkedTR td {
            background: #7ec23d61;
        }
        
        section.ebelediyepayment .paymentFooter {
            padding: 50px 15px;
        }
        
        section.ebelediyepayment .paymentFooter .selectedPrice {
            font-weight: 600;
            font-size: 36px;
            letter-spacing: -0.02em;
            line-height: 68px;
            text-align: left;
            color: #999999;
        }
        
        section.ebelediyepayment .paymentFooter .selectedPrice span {
            color: #cb8f61;
        }
        
        section.ebelediyepayment .paymentFooter .note1 {
            font-size: 16px;
            letter-spacing: -0.02em;
            text-align: left;
            color: #999;
        }
        
        section.ebelediyepayment .paymentFooter .note2 {
            font-size: 16px;
            letter-spacing: -0.02em;
            text-align: left;
            color: #c72626;
            margin-top: 12px;
            display: none;
        }
        
        section.ebelediyepayment .paymentFooter .btn-area {
            text-align: right;
            padding-right: 20px;
        }
        
        section.ebelediyepayment .paymentFooter .btn-area .btn {
            display: inline-block;
            font-weight: 600;
            font-size: 18px;
            letter-spacing: 0.01em;
            color: #fff;
            height: 52px;
            border-radius: 26px;
            background: #066069;
            padding: 16px 0px;
            width: 47%;
            text-align: center;
            margin: 0px 5px;
            margin-bottom: 20px;
            border: 0px;
            cursor: pointer;
        }
        
        section.ebelediyepayment .paymentFooter .btn-area .btn2 {
            font-weight: 600;
            font-size: 18px;
            letter-spacing: 0.01em;
            color: #fff;
            height: 52px;
            border-radius: 26px;
            background: #8aca38;
            padding: 16px 0px;
            text-align: center;
            margin: 0px 10px;
            margin-bottom: 20px;
            display: block;
            margin-right: 0px;
            border: 0;
            width: 100%;
            cursor: pointer;
        }
        
        section.ebelediyepayment .paymentFooter .btn-area .btn3 {
            font-weight: 600;
            font-size: 14px;
            letter-spacing: 0.01em;
            text-align: left;
            color: #fff;
            height: 52px;
            background: #999;
            display: inline-block;
            border-radius: 26px;
            padding: 20px 30px;
            border: 0px;
            cursor: pointer;
        }
        
        section.contact {
            margin-bottom: 0px;
            min-height: 100vh;
            justify-content: flex-start;
        }
        
        section.contact h1 {
            font-weight: 600;
            font-size: 42px;
            letter-spacing: -0.02em;
            line-height: 42px;
            text-align: center;
            color: #066069;
        }
        
        section.contact .imgarea {
            height: 100%;
            position: relative;
            min-height: 800px;
        }
        
        section.contact .imgarea .img {
            background: url("../img/iletisimbg.png");
            position: absolute;
            right: 0px;
            bottom: 0px;
            height: 1078px;
            left: 0px;
            background-position: top right;
            z-index: -1;
        }
        
        section.contact .contact-informations {
            margin-top: 50px;
            padding-right: 50px;
            margin-bottom: 20px;
        }
        
        section.contact .contact-informations {
        }
        
        section.contact .contact-informations .htitle {
            font-size: 24px;
            letter-spacing: -0.02em;
            line-height: 22px;
            text-align: left;
            color: #066069;
            margin-bottom: 20px;
        }
        
        section.contact .contact-informations .items {
        }
        
        section.contact .contact-informations .items .item {
            display: flex;
            border-bottom: 1px solid rgb(6 96 105 / 15%);
        }
        
        section.contact .contact-informations .items .item:last-child {
            border: 0px;
        }
        
        section.contact .contact-informations .items .item b {
            width: 80px;
            font-weight: bold;
            font-size: 16px;
            letter-spacing: -0.02em;
            line-height: 40px;
            text-align: left;
            color: #999;
            min-width: 80px;
        }
        
        section.contact .contact-informations .items .item span {
            font-size: 16px;
            letter-spacing: -0.02em;
            line-height: 40px;
            text-align: left;
            color: #999;
            width: 40px;
            text-align: center;
            min-width: 40px;
        }
        
        section.contact .contact-informations .items .item p {
            font-size: 16px;
            letter-spacing: -0.02em;
            line-height: 40px;
            color: #999;
            width: 100%;
        }
        
        section.contact .contact-informations .items .item p a {
            font-size: 16px;
            letter-spacing: -0.02em;
            line-height: 40px;
            color: #999;
            width: 100%;
        }
        
        section.contact .mapArea {
            margin-bottom: 30px;
            padding-right: 50px;
        }
        
        section.contact .mapArea #map {
            height: 260px;
        }
        
        section.contact .contact-buttons {
        }
        
        section.contact .contact-buttons .btn1 {
            font-size: 18px;
            letter-spacing: -0.02em;
            line-height: 22px;
            text-align: left;
            color: #fff;
            border-radius: 4px;
            background: #999;
            padding: 11px 24px;
            display: inline-block;
            margin-right: 10px;
        }
        
        section.contact .wrapper {
            width: 100%;
        }
        
        section.contact .contact-buttons .btn2 {
            font-size: 18px;
            letter-spacing: -0.02em;
            line-height: 22px;
            text-align: left;
            border-radius: 4px;
            padding: 11px 24px;
            display: inline-block;
            color: #8aca38;
            background: #066069;
        }
        
        section.facilitiesBanner {
            height: 100%;
            justify-content: end;
        }
        
        section.facilitiesBanner h1 {
            font-weight: 600;
            font-size: 50px;
            color: #fff;
        }
        
        section.facilitiesBanner .facilities-slider {
            width: 100%;
            display: block;
            position: absolute;
            left: 0px;
            right: 0px;
            top: 0px;
            z-index: -1;
        }
        
        section.facilitiesBanner .facilities-slider .img {
            height: 100vh;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            position: relative;
        }
        
        section.facilitiesBanner .facilities-slider .img:before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(#000 0%, rgba(0, 0, 0, 0) 100%);
        }
        
        section.facilitiesBanner .arrows {
            position: absolute;
            bottom: 380px;
        }
        
        section.facilitiesBanner .arrows .icon {
            height: 16.68px;
            width: 9.92px;
            fill: #066069;
        }
        
        section.facilitiesBanner .arrows .next {
            width: 48px;
            height: 35px;
            border-radius: 17.5px;
            background: #dadada;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0px 10px 0px 20px;
            cursor: pointer;
            transition: 0.3s ease all;
        }
        
        section.facilitiesBanner .arrows .prev {
            width: 48px;
            height: 35px;
            border-radius: 17.5px;
            background: #dadada;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0px 10px 0px 20px;
            transform: rotate(180deg);
            cursor: pointer;
            transition: 0.3s ease all;
        }
        
        section.facilitiesBanner .arrows > div:hover {
            background: #066069;
        }
        
        section.facilitiesBanner .arrows > div:hover .icon {
            fill: #8aca38;
        }
        
        section.facilitiesBanner .googleMap {
            position: absolute;
            bottom: 380px;
            right: 50px;
            z-index: 1;
            height: 52px;
            border-radius: 26px;
            background: #066069;
            font-weight: 600;
            font-size: 22px;
            letter-spacing: 0.01em;
            color: #fff;
            padding: 14px 34px;
        }
        
        section.facilitiesBanner .googleMap:hover {
            background: #8aca38;
        }
        
        section.facilities {
            position: relative;
            margin-top: -360px;
            padding: 0px 55px 70px;
        }
        
        section.facilities .wrapper {
            height: 720px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0px 3px 39px rgba(0, 0, 0, 0.16);
            padding: 30px 25px;
        }
        
        section.facilities .wrapper .scrollArea::-webkit-scrollbar {
            width: 20px;
        }
        
        section.facilities > .row {
        }
        
        section.facilities > .row > div {
            flex: unset;
        }
        
        section.facilities > .row > div.col-other-project {
            display: none;
        }
        
        section.facilities > .row > div:nth-child(1) {
            width: 16.6666666667%;
        }
        
        section.facilities > .row > div:nth-child(2) {
            width: 58.3333333333%;
        }
        
        section.facilities > .row > div:nth-child(3) {
            width: 25%;
        }
        
        section.facilities .wrapper .scrollArea::-webkit-scrollbar-track {
            border-left: 5px solid white;
            border-right: 5px solid white;
            width: 20px;
            background: rgb(153 153 153 / 50%);
            -webkit-box-shadow: unset;
        }
        
        section.facilities .wrapper .scrollArea::-webkit-scrollbar-thumb {
            border-left: 0px solid white;
            border-right: 0px solid white;
            background: #8aca38;
            border-radius: 20px;
        }
        
        section.facilities .wrapper .scrollArea {
            overflow: hidden;
            max-height: calc(100% - 50px);
            padding-right: 30px;
            overflow-y: auto;
        }
        
        section.facilities .wrapper .title {
            font-weight: 600;
            font-size: 22px;
            text-align: left;
            color: #066069;
            margin-bottom: 30px;
        }
        
        
        section.facilities .wrapper #map {
            height: 200px;
            margin-bottom: 20px;
        }
        
        section.facilities .wrapper .ulasimContent {
        
        }
        
        section.facilities .wrapper .ulasimContent .title {
            margin-bottom: 10px;
            margin-top: 20px;
        }
        
        section.facilities .wrapper .ulasimContent .ulasimItem {
        
            font-size: 16px;
        
            line-height: 20px;
        
            margin-bottom: 15px;
        
            color: #444;
        
            position: relative;
        
            padding: 0px 15px;
        }
        
        section.facilities .wrapper .ulasimContent .ulasimItem:before {
            content: '';
            position: absolute;
            left: 0;
            top: 10px;
            background: #096468;
            width: 10px;
            height: 1px;
        }
        
        section.facilities .otherfacilities {
        }
        
        section.facilities .otherfacilities .item {
            margin-bottom: 20px;
            display: block;
        }
        
        section.facilities .otherfacilities .item .img {
            height: 90px;
            border-radius: 8px;
            background: #fff;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            margin-bottom: 10px;
        }
        
        section.facilities .otherfacilities .item .text {
            font-weight: 600;
            font-size: 14px;
            color: #999;
            text-align: center;
            transition: 0.3s ease all;
        }
        
        section.facilities .otherfacilities .item:hover .img {
            box-shadow: 0px 3px 39px rgba(0, 0, 0, 0.16);
        }
        
        section.facilities .otherfacilities .item:hover .text {
            color: #066069;
        }
        
        section.facilities .gallery {
        }
        
        section.facilities .gallery .galleryItem {
            display: block;
            position: relative;
            border-radius: 5px;
            overflow: hidden;
            margin-bottom: 10px;
        }
        
        section.facilities .gallery .galleryItem .img {
            padding-bottom: 100%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
        
        section.facilities .gallery .galleryItem:before {
            content: '';
            position: absolute;
            inset: 0;
            z-index: 1;
            background: #066069;
            opacity: 0;
            transition: 0.3s ease all;
        }
        
        section.facilities .gallery .galleryItem:after {
            content: '';
            -webkit-mask-image: url(../img/svg/plus.svg);
            -webkit-mask-position: top center;
            -webkit-mask-size: 100% 100%;
            -webkit-mask-repeat: no-repeat;
            position: absolute;
            background: #fff;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) scale(0);
            z-index: 1;
            width: 22px;
            height: 22px;
            transition: 0.3s ease all;
        }
        
        section.facilities .gallery .galleryItem:hover:before {
            opacity: 0.63;
        }
        
        section.facilities .gallery .galleryItem:hover:after {
            transform: translate(-50%, -50%) scale(1);
        }
        
        section.facilities .about {
            font-weight: 300;
            font-size: 16px;
            line-height: 20px;
            text-align: left;
            color: #999;
        }
        
        section.facilities .about p {
        }
        
        section.facilities .about .info {
            margin-bottom: 20px;
        }
        
        section.facilities .about .info .text {
            font-weight: 600;
            font-size: 22px;
            text-align: left;
            color: #066069;
            margin-bottom: 10px;
        }
        
        section.facilities .about .items {
        }
        
        section.facilities .about .items .item {
            display: flex;
            border-bottom: 1px solid rgb(6 96 105 / 15%);
        }
        
        section.facilities .about .items .item:last-child {
            border: 0px;
        }
        
        section.facilities .about .items .item b {
            width: 80px;
            font-weight: bold;
            font-size: 16px;
            letter-spacing: -0.02em;
            line-height: 40px;
            text-align: left;
            color: #999;
            min-width: 80px;
        }
        
        section.facilities .about .items .item span {
            font-size: 16px;
            letter-spacing: -0.02em;
            line-height: 40px;
            text-align: left;
            color: #999;
            width: 40px;
            text-align: center;
            min-width: 40px;
        }
        
        section.facilities .about .items .item p {
            font-size: 16px;
            letter-spacing: -0.02em;
            line-height: 22px;
            color: #999;
            width: 100%;
        }
        
        section.facilities .about .items .item p a {
            font-size: 16px;
            letter-spacing: -0.02em;
            line-height: 40px;
            color: #999;
            width: 100%;
        }
        
        section.error {
            min-height: 300px;
        }
        
        section.error .editortext h2 {
            font-size: 26px;
            line-height: 68px;
            color: #066069;
            font-weight: 600;
        }
        
        section.error .editortext h3 {
            font-weight: 300;
            font-size: 35px;
            line-height: 40px;
            color: #999;
            margin-bottom: 20px;
        }
        
        section.error .editortext h4 {
            font-size: 16px;
            font-weight: bold;
            line-height: 24px;
            color: #999;
            margin-bottom: 10px;
        }
        
        section.error .editortext p {
            font-size: 16px;
            line-height: 24px;
            color: #999;
            font-weight: 300;
            margin-bottom: 10px;
        }
        
        section.error .editortext p b {
            font-weight: bold;
        }
        
        .loadingStick {
            position: fixed;
            bottom: 0px;
            left: 0px;
            right: 0px;
        }
        
        .loadingStick .bar {
            height: 8px;
            width: 83%;
            background: linear-gradient(
                    267deg, #066069 0%, #1e7d62 38.49%, #8aca38 100%);
            background-size: 400% 400%;
            animation: gradientanimation 2s ease infinite;
            filter: drop-shadow(0px 20px 50px rgba(0, 0, 0, 0.16));
        }
        
        @keyframes gradientanimation {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }
        
        .f-size-13 {
            font-size: 13px !important;
            line-height: 20px !important;
        }
        
        .select2.select2-container {
            width: 100% !important;
        }
        
        .select2.select2-container .select2-selection {
            border: 1px solid #ccc;
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            border-radius: 3px;
            height: 52px;
            margin-bottom: 15px;
            outline: none !important;
            transition: all .15s ease-in-out;
        }
        
        .select2.select2-container .select2-selection .select2-selection__rendered {
            color: #333;
            line-height: 50px;
            padding-right: 33px;
        }
        
        .select2.select2-container .select2-selection .select2-selection__arrow {
            -webkit-border-radius: 0 6px 6px 0;
            -moz-border-radius: 0 6px 6px 0;
            border-radius: 0 6px 6px 0;
            height: 52px;
            width: 33px;
        }
        
        .select2.select2-container.select2-container--open .select2-selection.select2-selection--single {
        }
        
        .select2.select2-container.select2-container--open .select2-selection.select2-selection--single .select2-selection__arrow {
            -webkit-border-radius: 0 3px 0 0;
            -moz-border-radius: 0 3px 0 0;
            border-radius: 0 3px 0 0;
        }
        
        .select2.select2-container.select2-container--open .select2-selection.select2-selection--multiple {
            border: 1px solid #34495e;
        }
        
        .select2-container .select2-dropdown {
            background: transparent;
            border: none;
            margin-top: -5px;
        }
        
        .select2-container .select2-dropdown .select2-search {
            padding: 0;
        }
        
        .select2-container .select2-dropdown .select2-search input {
            outline: none !important;
            border: 1px solid #34495e !important;
            border-bottom: none !important;
            padding: 4px 6px !important;
        }
        
        .select2-container .select2-dropdown .select2-results {
            padding: 0;
        }
        
        .select2-container .select2-dropdown .select2-results ul {
            background: #fff;
            border: 1px solid #34495e;
        }
        
        .select2-container .select2-dropdown .select2-results ul .select2-results__option--highlighted[aria-selected] {
            background-color: #3498db;
        }
        
        .marker-info {
            width: 150px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .search-page-title {
            font-weight: 600;
            font-size: 42px;
            letter-spacing: -0.02em;
            line-height: 42px;
            color: #066069;
            margin-bottom: 30px;
        }
        
        .newsPosts .meramTvItem {
            display: block;
            position: relative;
            overflow: hidden;
            border-radius: 15px;
            padding-bottom: 56%;
            margin-bottom: 22px;
        }
        
        .newsPosts .meramTvItem .img {
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            position: absolute;
            inset: 0;
        }
        
        .newsPosts .meramTvItem .img:before {
            content: '';
            position: absolute;
            inset: 0;
            background: #000;
            opacity: 0.4;
        }
        
        .newsPosts .swiper-wrapper {
            height: unset;
        }
        
        .newsPosts .meramTvSlider .swiper-slide {
            height: unset;
        }
        
        .newsPosts .meramTvItem span small {
            color: #ffffff;
            font-weight: 300;
            font-size: 15px;
            letter-spacing: -0.02em;
            position: absolute;
            right: 0px;
            bottom: 0px;
        }
        
        .newsPosts .meramTvItem span {
            position: absolute;
            left: 35px;
            right: 35px;
            bottom: 25px;
            color: #fff;
            font-size: 18px;
            z-index: 1;
        }
        
        section.contact .contact-form {
            display: none;
            transition: all ease .3s;
        }
        
        section.contact .contact-form.show {
            opacity: 1;
            display: block;
        }
        
        section.contact .contact-information {
            display: none;
            transition: all ease .3s;
        }
        
        section.contact .contact-information.show {
            opacity: 1;
            display: block;
        }
        
        section.contact .contact-form form {
            padding-right: 30px;
        }
        
        textarea {
            max-width: 100%;
        }
        
        .modal .close {
            float: right;
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 1;
            color: #000;
            text-shadow: 0 1px 0 #fff;
            opacity: .5;
            background-color: transparent;
            border: 0;
            cursor: pointer;
        }
        
        .modal .close:hover {
            color: #000;
            text-decoration: none;
        }
        
        .modal .close:not(:disabled):not(.disabled):hover, .modal .close:not(:disabled):not(.disabled):focus {
            opacity: .75;
        }
        
        .modal-open {
            overflow: hidden;
        }
        
        .modal-open .modal {
            overflow-x: hidden;
            overflow-y: auto;
        }
        
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1050;
            display: none;
            width: 100%;
            height: 100%;
            overflow: hidden;
            outline: 0;
        }
        
        .modal-dialog {
            position: relative;
            width: auto;
            margin: 0.5rem;
            pointer-events: none;
        }
        
        .modal.fade .modal-dialog {
            transition: -webkit-transform 0.3s ease-out;
            transition: transform 0.3s ease-out;
            transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
            -webkit-transform: translate(0, -50px);
            transform: translate(0, -50px);
        }
        
        @media (prefers-reduced-motion: reduce) {
            .modal.fade .modal-dialog {
                transition: none;
            }
        }
        
        .modal.show .modal-dialog {
            -webkit-transform: none;
            transform: none;
        }
        
        .modal.modal-static .modal-dialog {
            -webkit-transform: scale(1.02);
            transform: scale(1.02);
        }
        
        .modal-dialog-scrollable {
            display: -ms-flexbox;
            display: flex;
            max-height: calc(100% - 1rem);
        }
        
        .modal-dialog-scrollable .modal-content {
            max-height: calc(100vh - 1rem);
            overflow: hidden;
        }
        
        .modal-dialog-scrollable .modal-header,
        .modal-dialog-scrollable .modal-footer {
            -ms-flex-negative: 0;
            flex-shrink: 0;
        }
        
        .modal-dialog-scrollable .modal-body {
            overflow-y: auto;
        }
        
        .modal-dialog-centered {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            min-height: calc(100% - 1rem);
        }
        
        .modal-dialog-centered::before {
            display: block;
            height: calc(100vh - 1rem);
            height: -webkit-min-content;
            height: -moz-min-content;
            height: min-content;
            content: "";
        }
        
        .modal-dialog-centered.modal-dialog-scrollable {
            -ms-flex-direction: column;
            flex-direction: column;
            -ms-flex-pack: center;
            justify-content: center;
            height: 100%;
        }
        
        .modal-dialog-centered.modal-dialog-scrollable .modal-content {
            max-height: none;
        }
        
        .modal-dialog-centered.modal-dialog-scrollable::before {
            content: none;
        }
        
        .modal-content {
            position: relative;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-direction: column;
            flex-direction: column;
            width: 100%;
            pointer-events: auto;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 0.3rem;
            outline: 0;
        }
        
        .modal-backdrop {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1040;
            width: 100vw;
            height: 100vh;
            background-color: #000;
        }
        
        .modal-backdrop.fade {
            opacity: 0;
        }
        
        .modal-backdrop.show {
            opacity: 0.5;
        }
        
        .modal-header {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: start;
            align-items: flex-start;
            -ms-flex-pack: justify;
            justify-content: space-between;
            padding: 1rem 1rem;
            border-bottom: 1px solid #dee2e6;
            border-top-left-radius: calc(0.3rem - 1px);
            border-top-right-radius: calc(0.3rem - 1px);
        }
        
        .modal-header .close {
            padding: 1rem 1rem;
            margin: -1rem -1rem -1rem auto;
        }
        
        .modal-title {
            margin-bottom: 0;
            line-height: 1.5;
        }
        
        .modal-body {
            position: relative;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            padding: 1rem;
        }
        
        .modal-footer {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-pack: end;
            justify-content: flex-end;
            padding: 0.75rem;
            border-top: 1px solid #dee2e6;
            border-bottom-right-radius: calc(0.3rem - 1px);
            border-bottom-left-radius: calc(0.3rem - 1px);
        }
        
        .modal-footer > * {
            margin: 0.25rem;
        }
        
        .modal-scrollbar-measure {
            position: absolute;
            top: -9999px;
            width: 50px;
            height: 50px;
            overflow: scroll;
        }
        
        @media (min-width: 576px) {
            .modal-dialog {
                max-width: 500px;
                margin: 1.75rem auto;
            }
        
            .modal-dialog-scrollable {
                max-height: calc(100% - 3.5rem);
            }
        
            .modal-dialog-scrollable .modal-content {
                max-height: calc(100vh - 3.5rem);
            }
        
            .modal-dialog-centered {
                min-height: calc(100% - 3.5rem);
            }
        
            .modal-dialog-centered::before {
                height: calc(100vh - 3.5rem);
                height: -webkit-min-content;
                height: -moz-min-content;
                height: min-content;
            }
        
            .modal-sm {
                max-width: 300px;
            }
        }
        
        @media (min-width: 992px) {
            .modal-lg,
            .modal-xl {
                max-width: 800px;
            }
        }
        
        @media (min-width: 1200px) {
            .modal-xl {
                max-width: 1140px;
            }
        }
        
        .kvkkModal {
            text-decoration: underline !important;
            font-size: 15px;
        }
        
        #fullpage {
            scroll-snap-type: y mandatory;
            overflow-y: scroll;
            height: 100vh;
        }
        
        #fullpage .section {
            scroll-snap-align: start;
        }
        
        .corporate.tenders {
        }
        
        .corporate.tenders h4.title {
            font-weight: 300;
            font-size: 35px;
            line-height: 35px;
            color: #999;
            margin-bottom: 10px;
        }
        
        .corporate.tenders small.date {
            font-weight: 300;
            font-size: 20px;
            line-height: 30px;
            color: #999;
            margin-bottom: 30px;
            display: block;
        }
        
        .talepResult {
            color: #8aca38;
            font-size: 20px;
            font-weight: bold;
            margin: 12px 0;
        }
        
        .talepResult span {
            color: #4a4a4a;
        }
        
        .accordion .card {
            overflow: hidden
        }
        
        .accordion .card:not(:first-of-type) .card-header:first-child {
            border-radius: 0
        }
        
        .accordion .card:not(:first-of-type):not(:last-of-type) {
            border-bottom: 0;
            border-radius: 0
        }
        
        .accordion .card:first-of-type {
            border-bottom: 0;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0
        }
        
        .accordion .card:last-of-type {
            border-top-left-radius: 0;
            border-top-right-radius: 0
        }
        
        .accordion .card .card-header {
            margin-bottom: -1px
        }
        
        .fade:not(.show) {
            opacity: 0
        }
        
        .collapse:not(.show) {
            display: none
        }
        
        .collapsing {
            position: relative;
            height: 0;
            overflow: hidden;
            transition: height .35s ease
        }
        
        @media screen and (prefers-reduced-motion: reduce) {
            .collapsing {
                transition: none
            }
        }
        
        .searchFormMobile {
            display: none;
            position: absolute;
            left: 50%;
            opacity: 50;
            top: 27%;
            transform: translate(-50%, -50%);
            width: 100%;
            max-width: 340px;
        }
        
        .searchFormMobile .weathermobile {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            justify-content: center;
        }
        
        .searchFormMobile .weathermobile .text {
            font-size: 18px;
            line-height: 18px;
            color: #fff;
            text-align: center;
        }
        
        .searchFormMobile .weathermobile .text .date {
            font-weight: 600;
            font-size: 18px;
            line-height: 18px;
            color: #8aca38;
        }
        
        .searchFormMobile .weathermobile .text b {
            font-weight: 600;
        }
        
        .searchFormMobile .weathermobile .weatherState {
            text-align: center;
            margin-left: 5px;
        }
        
        .searchFormMobile .weathermobile .weatherState i {
            color: #fff;
            font-size: 30px;
            margin-bottom: 3px;
        }
        
        .searchFormMobile .weathermobile .weatherState .deg {
            font-size: 14px;
            color: #fff;
        }
        
        .searchFormMobile form {
            background: #fff;
            overflow: hidden;
            height: 50px;
            border-radius: 8px;
            box-shadow: 0px 20px 24px rgba(0, 0, 0, 0.16);
            display: flex;
            width: 100%;
        }
        
        .searchFormMobile form input {
            border: 0px;
            width: 100%;
            padding: 0px 17px;
        }
        
        .searchFormMobile form button {
            border: 0px;
            background: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0px 17px;
            position: relative;
        }
        
        .searchFormMobile form button .icon {
            width: 24.32px;
            height: 25px;
            fill: #066069;
        }
        
        .searchFormMobile form button:before {
            content: '';
            top: 5px;
            bottom: 5px;
            width: 2px;
            background: #707070;
            position: absolute;
            left: 0px;
            opacity: 0.2;
        }
        
        .mobileFixedHeader {
            display: none;
            position: fixed;
            left: 0px;
            right: 0px;
            bottom: 0px;
            height: 60px;
            filter: drop-shadow(0px -15px 30px rgba(0, 0, 0, 0.05));
            background: rgb(255, 255, 255);
            background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(230, 230, 230, 1) 50%, rgba(255, 255, 255, 1) 100%);
            z-index: 3;
        }
        
        .mobileFixedHeader ul {
            display: flex;
        }
        
        .mobileFixedHeader ul li {
            position: relative;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: calc((100vw - 155px) / 4);
            width: calc((100vw - 155px) / 4);
        }
        
        .mobileFixedHeader ul li a {
        }
        
        .mobileFixedHeader ul li a img {
            width: 31.82px;
            height: 27px;
        }
        
        .mobileFixedHeader ul li a .icon {
            width: 31.82px;
            height: 27px;
            fill: #a7a7a7;
        }
        
        .mobileFixedHeader ul li.logo {
            width: 155px;
        }
        
        .mobileFixedHeader ul li.logo .logoarea {
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            -webkit-mask-image: url(../img/svg/logoShape.svg);
            -webkit-mask-position: top center;
            -webkit-mask-size: 100% 100%;
            -webkit-mask-repeat: no-repeat;
            width: 100%;
            height: 120px;
            transform: rotate(180deg);
            position: absolute;
            bottom: -20px;
        }
        
        .mobileFixedHeader ul li.logo .logoarea a {
        }
        
        .mobileFixedHeader ul li.logo .logoarea a .icon {
            fill: #066069;
            width: 60px;
            height: 60px;
        }
        
        .projectMainMobile {
            display: none;
            padding: 20px 0px 10px;
        }
        
        .projectMainMobile .head {
            padding: 0px 18px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .projectMainMobile .head .title {
            font-weight: bold;
            font-size: 24px;
            text-align: left;
            color: #066069;
        }
        
        .projectMainMobile .head nav {
        }
        
        .projectMainMobile .head nav select.changeProjectTab {
            width: 140px;
            height: 40px;
            padding: 5px;
            border: #066069 2px solid;
            border-radius: 3px;
            color: #066069;
            font-weight: 600;
        }
        
        .projectMainMobile .head .nav-tabs {
        }
        
        .projectMainMobile .head .nav-tabs .nav-item {
            font-size: 16px;
            text-align: left;
            color: #a7a7a7;
            height: 30px;
            border-radius: 15px;
            display: inline-flex;
            align-items: center;
            padding: 0px 10px;
        }
        
        .projectMainMobile .head .nav-tabs .nav-item.active {
            color: #8aca38;
            background: #066069;
        }
        
        .projectMainMobile .tab-pane {
            padding: 0px 15px;
        }
        
        .projectMainMobile .tab-pane {
            display: none;
        }
        
        .projectMainMobile .tab-pane.active {
            display: block;
        }
        
        .mainFacilitiesMobile {
            display: none;
            padding: 30px 0px 10px;
            position: relative;
            z-index: 1;
            background-image: url(../img/counterbg.png);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        }
        
        .mainFacilitiesMobile .title {
            font-weight: bold;
            font-size: 24px;
            color: #fff;
            text-align: left;
            margin-bottom: 20px;
            padding: 0px 18px;
        }
        
        .mainFacilitiesMobile .facilitiesList {
            padding: 0px 15px;
        }
        
        .mainFacilitiesMobile .facilitiesList .facility {
            display: block;
            margin-bottom: 20px;
        }
        
        .mainFacilitiesMobile .facilitiesList .facility span.text {
            display: block;
            padding: 10px 0px;
            font-size: 14px;
            letter-spacing: -0.02em;
            line-height: 20px;
            text-align: left;
            color: #8aca38;
        }
        
        .mainFacilitiesMobile .facilitiesList .facility .imgarea {
            position: relative;
            border-radius: 12px;
            overflow: hidden;
        }
        
        .mainFacilitiesMobile .facilitiesList .facility .imgarea .img {
            width: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            display: block;
            padding-bottom: 45%;
        }
        
        .mainFacilitiesMobile .facilitiesList .facility .imgarea .logo {
            position: absolute;
            z-index: 3;
            width: 80px;
            right: 10px;
            bottom: 10px;
        }
        
        .owl-meramtvSlider {
            display: none;
        }
        
        section.firstSection .storypagination {
            display: none;
            align-items: center;
            justify-content: space-between;
            top: 10px;
            position: absolute;
            left: 10px;
            right: 10px;
            z-index: 2;
            padding: 2px;
        }
        
        section.firstSection .storypagination .swiper-pagination-bullet {
            height: 4px;
            background: #ffffff47;
            opacity: 1;
            transition: 0.3s ease all;
            border-radius: 2px;
            margin: 0 2px;
            flex-grow: 1;
            flex-shrink: 1;
            flex-basis: 0;
        }
        
        section.firstSection .storypagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
            background: #fff;
        }
        
        .mobileHeader {
            display: none;
            position: fixed;
            left: 0px;
            right: 0px;
            top: 0px;
            bottom: 0px;
            z-index: 11;
            background: #8aca384a;
            opacity: 0;
            transition: 0.3s ease opacity;
            pointer-events: none;
        }
        
        .mobileHeader.active {
            opacity: 1;
            pointer-events: auto;
        }
        
        .mobileHeader .mMenu {
            height: 100vh;
            width: 100vw;
            overflow: hidden;
        }
        
        .mobileHeader .mMenu .content {
            height: 100vh;
            background: linear-gradient(90deg, #6d6d6d85 0%, #3e4444ed 60%);
            display: flex;
            align-items: center;
            justify-content: flex-end;
            position: absolute;
            left: 0px;
            right: 0%;
            top: 0px;
            bottom: 0px;
            transition: 0.3s ease right;
        }
        
        .mobileHeader .mMenu .content.inactive {
            right: 100%;
        }
        
        .mobileHeader .mMenu .content ul > li.logo {
            display: none;
        }
        
        .mobileHeader .mMenu .content ul {
            width: 100vw;
            transition: 0.3s 0.3s ease opacity;
        }
        
        .mobileHeader.active .mMenu .content ul {
            opacity: 1;
        }
        
        .mobileHeader .mMenu .content ul > li {
            position: relative;
        }
        
        .mobileHeader .mMenu .content ul > li:before {
            content: '';
            top: 0px;
            right: 0px;
            left: 0px;
            height: 1px;
            position: absolute;
            background: rgb(6, 6, 6);
            background: linear-gradient(270deg, rgba(6, 6, 6, 1) 0%, rgba(255, 255, 255, 0) 86%);
            opacity: 0.5;
        }
        
        .mobileHeader .mMenu .content ul > li:after {
            content: '';
        }
        
        .mobileHeader .mMenu .content ul > li:last-child:after {
            content: '';
            bottom: 0px;
            right: 0px;
            left: 0px;
            height: 1px;
            position: absolute;
            background: rgb(6, 6, 6);
            background: linear-gradient(
                    270deg, rgba(6, 6, 6, 1) 0%, rgba(255, 255, 255, 0) 86%);
            opacity: 0.5;
        }
        
        .mobileHeader .mMenu .content ul > li > a {
            font-weight: bold;
            font-size: 24px;
            letter-spacing: -0.02em;
            text-align: right;
            color: #fff;
            padding: 18px 30px;
            display: block;
        }
        
        .mobileHeader .mMenu .content ul > li .dropMenu {
            display: none;
        }
        
        .mobileHeader .closeMenu {
            position: absolute;
            right: 40px;
            top: 15px;
            cursor: pointer;
            z-index: 2;
        }
        
        .mobileHeader .closeMenu .icon {
            width: 30px;
            height: 30px;
            fill: #fff;
        }
        
        .mobileHeader .mMenu .subContent1 {
            position: absolute;
            left: 100%;
            right: 0px;
            top: 0px;
            bottom: 0px;
            z-index: 1;
            transition: 0.3s ease left;
            pointer-events: none;
            height: 100vh;
            background: linear-gradient(
                    270deg, #6d6d6df2 0%, #3e4444 60%);
            display: flex;
            flex-direction: column;
            padding: 100px 0px 0px;
            overflow-y: auto;
            overflow-x: hidden;
        }
        
        .mobileHeader .mMenu .subContent1.active {
            left: 0%;
            opacity: 1;
            pointer-events: auto;
        }
        
        .mobileHeader .mMenu .subContent1 .backContent {
            position: absolute;
            top: 15px;
            left: 30px;
        }
        
        .mobileHeader .mMenu .subContent1 .title {
            top: 80px;
            left: 30px;
            font-size: 30px;
            font-weight: 600;
            color: #8aca38;
            display: block;
            right: 30px;
            padding: 0px 30px 15px;
        }
        
        .mobileHeader .mMenu .subContent1 .backContent .icon {
            transform: rotate(180deg);
            width: 50px;
            height: 30px;
        }
        
        .mobileHeader .mMenu .subContent1 ul {
            width: 100vw;
        }
        
        .mobileHeader .mMenu .subContent1 ul > li {
            position: relative;
        }
        
        .mobileHeader .mMenu .subContent1 ul > li:before {
            content: '';
            top: 0px;
            right: 0px;
            left: 0px;
            height: 1px;
            position: absolute;
            background: rgb(6, 6, 6);
            background: linear-gradient(90deg, rgba(6, 6, 6, 1) 0%, rgba(255, 255, 255, 0) 86%);
            opacity: 0.5;
        }
        
        .mobileHeader .mMenu .subContent1 ul > li:after {
            content: '';
        }
        
        .mobileHeader .mMenu .subContent1 ul > li:last-child:after {
            content: '';
            bottom: 0px;
            right: 0px;
            left: 0px;
            height: 1px;
            position: absolute;
            background: rgb(6, 6, 6);
            background: linear-gradient(
                    90deg, rgba(6, 6, 6, 1) 0%, rgba(255, 255, 255, 0) 86%);
            opacity: 0.5;
        }
        
        .mobileHeader .mMenu .subContent1 ul > li > a {
            font-weight: bold;
            font-size: 24px;
            letter-spacing: -0.02em;
            text-align: left;
            color: #fff;
            padding: 18px 30px;
            display: block;
        }
        
        .mobileHeader .mMenu .subContent1 ul > li .dropMenu {
            display: none;
        }
        
        .mobileHeader .mMenu .subContent2 {
            position: absolute;
            left: -100%;
            right: 100%;
            top: 0px;
            bottom: 0px;
            z-index: 1;
            transition: 0.3s ease left, 0.3s ease right;
            pointer-events: none;
            height: 100vh;
            background: linear-gradient(
                    270deg, #6d6d6df2 0%, #3e4444 60%);
            display: flex;
            flex-direction: column;
            padding: 100px 0px 0px;
            overflow-y: auto;
            overflow-x: hidden;
        }
        
        .mobileHeader .mMenu .subContent2.active {
            left: 0%;
            opacity: 1;
            pointer-events: auto;
            right: 0%;
        }
        
        .mobileHeader .mMenu .subContent2 .backContent {
            position: absolute;
            top: 30px;
            left: 30px;
        }
        
        .mobileHeader .mMenu .subContent2 .title {
            top: 80px;
            left: 30px;
            font-size: 30px;
            font-weight: 600;
            color: #8aca38;
            display: block;
            right: 30px;
            padding: 0px 30px 15px;
            text-align: right;
        }
        
        .mobileHeader .mMenu .subContent2 .backContent .icon {
            transform: rotate(180deg);
            width: 50px;
            height: 30px;
        }
        
        .mobileHeader .mMenu .subContent2 ul {
            width: 100vw;
        }
        
        .mobileHeader .mMenu .subContent2 ul > li {
            position: relative;
        }
        
        .mobileHeader .mMenu .subContent2 ul > li:before {
            content: '';
            top: 0px;
            right: 0px;
            left: 0px;
            height: 1px;
            position: absolute;
            background: rgb(6, 6, 6);
            background: linear-gradient(270deg, rgba(6, 6, 6, 1) 0%, rgba(255, 255, 255, 0) 86%);
            opacity: 0.5;
        }
        
        .mobileHeader .mMenu .subContent2 ul > li:after {
            content: '';
        }
        
        .mobileHeader .mMenu .subContent2 ul > li:last-child:after {
            content: '';
            bottom: 0px;
            right: 0px;
            left: 0px;
            height: 1px;
            position: absolute;
            background: rgb(6, 6, 6);
            background: linear-gradient(
                    270deg, rgba(6, 6, 6, 1) 0%, rgba(255, 255, 255, 0) 86%);
            opacity: 0.5;
        }
        
        .mobileHeader .mMenu .subContent2 ul > li > a {
            font-weight: bold;
            font-size: 24px;
            letter-spacing: -0.02em;
            text-align: right;
            color: #fff;
            padding: 18px 30px;
            display: block;
        }
        
        .mobileHeader .mMenu .subContent2 ul > li .dropMenu {
            display: none;
        }
        
        .corporateFixedOpen {
            display: none;
            background: #066069;
            padding: 14px 10px;
            border-radius: 4px;
            width: 130px;
            text-align: center;
            left: -3px;
            position: absolute;
            box-shadow: 0px 5px 20px rgb(0 0 0 / 4%);
            top: 18px;
            transition: 0.3s ease all;
            z-index: 2;
        }
        
        .corporateFixedOpen span {
            color: #fff;
            display: inline-block;
        }
        
        .corporateFixedOpen:hover {
        }
        
        .corporateFixedOpen.active {
            top: -100px;
        }
        
        .corporateFixedOpen.active span {
        }
        
        .corporateSidebarBackDrop {
            position: fixed;
            left: 0px;
            right: 0px;
            top: 0px;
            bottom: 0px;
            background: #00000080;
            z-index: 3;
            opacity: 0;
            transition: 0.3s ease all;
        }
        
        .corporateSidebarBackDrop.active {
            opacity: 1;
        }
        
        section.corporateSidebar.active {
            left: 50%;
            display: block;
            top: 50px;
            z-index: 4;
            transform: translateX(-50%);
            align-items: center;
            justify-content: center;
        }
        
        section.corporateSidebar.active a {
            width: unset;
            display: flex;
        }
        
        section.otherNewsMobile {
            display: none;
            padding: 0px 15px;
        }
        
        section.otherNewsMobile .title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
        }
        
        section.otherNewsMobile .title span {
            font-weight: 600;
            font-size: 26px;
            letter-spacing: -0.04em;
            line-height: 36px;
            text-align: left;
            color: #066069;
            width: 160px;
        }
        
        section.otherNewsMobile .title {
        }
        
        section.otherNewsMobile .title .btn {
            font-size: 16px;
            letter-spacing: 0.01em;
            color: #fff;
            border-radius: 17.5px;
            background: #999;
            padding: 10px 14px;
            display: inline-block;
            position: relative;
            text-align: left;
            padding-right: 26px;
        }
        
        section.otherNewsMobile .title .btn .icon {
            height: 16.68px;
            width: 9.92px;
            fill: #fff;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 14px;
        }
        
        section.projects .navMobile {
            display: none;
            font-weight: 600;
            font-size: 20px;
            text-align: left;
            color: #fff;
            background: #066069;
            padding: 20px 30px;
            border-radius: 6px 6px 0px 0px;
            margin: 0px 20px;
            position: relative;
            z-index: 2;
        }
        
        section.projects .navMobile .selection {
            position: relative;
        }
        
        section.projects .navMobile .selection .selected {
            border: 1px solid #8aca3866;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 5px 10px;
            background: #00000012;
        }
        
        section.projects .navMobile .selection .selected span {
        }
        
        section.projects .navMobile .selection .selected .icon {
            width: 30px;
            height: 30px;
            fill: #fff;
        }
        
        section.projects .navMobile .selection .list {
            position: absolute;
            background: #066069;
            left: 0px;
            right: 0px;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            padding-bottom: 5px;
            box-shadow: 0px 5px 15px rgb(0 0 0 / 5%);
            max-height: 0px;
            overflow: hidden;
            transition: 0.3s ease all;
        }
        
        section.projects .navMobile .selection:hover .list {
            max-height: 100vh;
        }
        
        section.projects .navMobile .selection .list a {
            display: block;
            color: #fff;
            padding: 14px 10px;
            border-bottom: 1px solid #0000000d;
            font-size: 19px;
            font-weight: 500;
        }
        
        .promptBox {
            display: none;
            height: 100px;
            width: 100px;
            transform: translate(-50%, -50%);
            position: fixed;
            top: 50%;
            left: 55%;
            opacity: 1;
            transition: 300ms;
            pointer-events: none;
            z-index: 1000;
        }
        
        .tapperoo {
            height: 25%;
            width: 25%;
            position: absolute;
            top: 20%;
            left: 33%;
            border-radius: 100px;
            background-color: #0095dd;
            z-index: -1;
            animation: tapperoo 3s infinite;
        }
        
        @keyframes tapperoo {
            0% {
                height: 25%;
                width: 25%;
            }
            50% {
                height: 5%;
                width: 35%;
                opacity: 0;
                transform: translate(-250%);
            }
            100% {
                opacity: 0;
            }
        }
        
        #tap-gesture {
            position: absolute;
            transform: rotate(30deg);
            animation: handMove 3s infinite;
        }
        
        @keyframes handMove {
            0% {
                transform: rotate(30deg);
            }
            50% {
                transform: translate(-60%, -10%) rotate(-30deg) scale(0.9);
            }
            100% {
                transform: rotate(30deg);
            }
        }
        
        .directorateDetail .desktopNews {
            display: block;
        }
        
        .directorateDetail .mobileNews {
            display: none;
        }
        
        section.ebelediyepayment .paymentSuccessfull {
            padding: 100px 0px;
        }
        
        section.ebelediyepayment .paymentSuccessfull .title {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        section.ebelediyepayment .paymentSuccessfull .title span {
            color: #8aca38;
            font-size: 40px;
            letter-spacing: -1px;
            font-weight: 600;
            margin-left: 20px;
        }
        
        section.ebelediyepayment .paymentSuccessfull .icon {
            fill: #8aca38;
            width: 100px;
            height: 100px;
        }
        
        section.ebelediyepayment .paymentFailed {
            padding: 100px 0px;
        }
        
        section.ebelediyepayment .paymentFailed .title {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        section.ebelediyepayment .paymentFailed .title span {
            color: #b70505;
            font-size: 40px;
            letter-spacing: -1px;
            font-weight: 600;
            margin-left: 20px;
        }
        
        section.ebelediyepayment .paymentFailed .icon {
            fill: #b70505;
            width: 100px;
            height: 100px;
        }
        
        section.ebelediyepayment .paymentFailed .desc {
            text-align: center;
            margin-top: 40px;
            color: #b70505;
        }
        
        section.ebelediyepayment .paymentFailed .desc b {
            font-weight: 600;
        }
        
        .organization-tree2 {
            display: none;
        }
        
        .organization-tree2 {
        }
        
        .tesisModal {
        
            position: fixed;
        
            opacity: 0;
        
            left: 50%;
        
            top: 50%;
        
            z-index: 2;
        
            width: 700px;
        
            background: #fff;
        
            max-width: 90vw;
        
            transform: translate(-50%, -50%);
        
            min-height: 300px;
        
            border-radius: 6px;
        
            background: #fff;
        
            box-shadow: 0px 5px 20px rgb(0 0 0 / 10%);
        
            pointer-events: none;
        
            overflow: hidden;
        }
        
        .tesisModal.active {
            pointer-events: auto;
            opacity: 1;
        }
        
        .tesisModal .modal-wrapper {
        
        }
        
        .tesisModal .modal-wrapper .close {
        
            position: absolute;
        
            right: 15px;
        
            top: 22px;
        
            /* width: 60px; */
        
            /* height: 60px; */
        
            border-radius: 60px;
        
            cursor: pointer;
        
            display: flex;
        
            align-items: center;
        
            justify-content: center;
        }
        
        .tesisModal .modal-wrapper .close .icon {
        
            width: 15px;
        
            height: 15px;
        
            fill: #717171;
        }
        
        .tesisModal .content {
        
        }
        
        .tesisModal .content .title {
        
            color: #096369;
        
            font-size: 20px;
        
            padding: 20px;
        
            border-bottom: 1px solid #ececec;
        }
        
        .tesisModal .content .customNav {
        
            display: flex;
        
            justify-content: space-between;
        }
        
        .tesisModal .content .customNav a {
        
            display: block;
        
            width: 50%;
        
            text-align: center;
        
            font-weight: 500;
        
            font-size: 20px;
        
            padding: 10px 20px;
        
            border-bottom: 2px solid #ececec;
        }
        
        .tesisModal .content .customNav a.active {
        
            border-bottom: 2px solid #096468;
        }
        
        .tesisModal .content .customtab .tabContent {
        
        }
        
        .tesisModal .content .customtab .tabContent .tabpane {
            height: 0px;
            width: 0px;
            opacity: 0;
            pointer-events: none;
        }
        
        .tesisModal.active .content .customtab .tabContent .tabpane.active {
        
            height: 360px;
        
            width: 100%;
        
            opacity: 1;
        
            pointer-events: auto;
        }
        
        .tesisModalBackdrop {
        
            position: fixed;
        
            left: 0px;
        
            right: 0px;
        
            top: 0px;
        
            bottom: 0px;
        
            background: #0009;
        
            z-index: 1;
        }
        
        .tesisModal .content .tesismap {
            height: 360px;
        }
        
        .tesisModal .content .ulasimContent {
            height: 360px;
            overflow: hidden;
            overflow-y: scroll;
            padding: 20px;
        }
        
        .tesisModal .content .ulasimContent .ulasimItem {
        
            font-size: 16px;
        
            line-height: 20px;
        
            margin-bottom: 15px;
        
            color: #444;
        
            position: relative;
        
            padding: 0px 15px;
        }
        
        .tesisModal .content .ulasimContent .ulasimItem:before {
            content: '';
            position: absolute;
            left: 0;
            top: 10px;
            background: #096468;
            width: 10px;
            height: 1px;
        }
        
        .marker-info {
            display: block;
            height: unset;
        }
        
        .marker-info .title {
        
            display: block;
        
            font-size: 15px;
        
            text-align: center;
        
            font-weight: 600;
        }
        
        .marker-info .btn.yolTarifi {
            border: 0px;
            background: linear-gradient(#8aca38 0%, #1e7d62 41.01%, #066069 100%);
            width: calc(50% - 3px);
            margin: 0px 1px;
            color: #fff;
            font-size: 17px;
            padding: 5px 10px;
            border-radius: 2px;
            cursor: pointer;
            width: 100px;
            margin: 0 auto;
            display: block;
            margin-top: 6px;
        }
        
        
        .mainPopup {
        
            position: absolute;
        
            left: 50%;
        
            top: 50%;
        
            transform: translate(-50%, -50%);
        
            z-index: 5;
        
            max-width: 90vw;
        
            width: 940px;
            pointer-events: none;
            opacity: 0;
        }
        
        .mainPopup.active {
        
            pointer-events: auto;
            opacity: 1;
        }
        
        .mainPopup .close {
        
            fill: #fff;
        
            width: 20px;
        
            height: 20px;
        
            position: absolute;
        
            right: 0px;
        
            top: -30px;
        
            cursor: pointer;
        }
        
        .mainPopup .close .icon {
        
            width: 20px;
        
            height: 20px;
        }
        
        .mainPopup .content {
        
            background: #fff;
        
            padding: 10px;
        
            border-radius: 6px;
        }
        
        .mainPopup .content img {
        
            width: 100%;
        }
        
        .mainPopupBackdrop {
            position: fixed;
            left: 0px;
            right: 0px;
            top: 0px;
            bottom: 0px;
            background: #0000006b;
            z-index: 4;
            pointer-events: none;
            opacity: 0;
        }
        
        .mainPopupBackdrop.active {
            opacity: 1;
            pointer-events: auto;
        }
        
        
        .mainPopup .mainPopupThumb {
        
        }
        
        .mainPopup .mainPopupThumb {
            padding: 0px 0px;
            height: 66px;
            margin-top: 10px;
        }
        
        .mainPopup .mainPopupThumb .swiper-slide {
            opacity: 1;
            cursor: pointer;
            border-radius: 7px;
            background: #fff;
            overflow: hidden;
        }
        
        .mainPopup .mainPopupThumb .swiper-slide .img {
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            height: 66px;
            opacity: 0.5;
            transition: 0.3s ease all;
        }
        
        .mainPopup .mainPopupThumb .swiper-slide.swiper-slide-thumb-active .img {
            opacity: 1;
        }
        
        .mainPopup .mainPopupTop {
        
        }
        
        .mainPopup .mainPopupTop .swiper-slide {
        
        }
        
        .mainPopup .mainPopupTop .swiper-slide .popupitem {
        
        }
        
        .mainPopup .mainPopupTop .swiper-slide .popupitem {
        
        }
        
        .mainPopup .mainPopupTop .swiper-slide .popupitem .img {
        
            position: relative;
        
            padding-bottom: 43%;
        }
        
        .mainPopup .mainPopupTop .swiper-slide .popupitem .img img {
        
            position: absolute;
        
            left: 50%;
        
            top: 50%;
        
            transform: translate(-50%, -50%);
        
            z-index: 1;
        
            width: 100%;
        
            max-width: unset;
        
            min-height: 100%;
        
            object-fit: cover;
        }
        
        form.formbuilder .radio-group .radio label {
        
            display: inline-block;
        }
        
        form.formbuilder .checkbox-group .checkbox label {
        
            display: inline-block;
        }
        
        form.formbuilder .sendFormBuild {
            border-radius: 26px;
            background: #066069;
            font-weight: 600;
            font-size: 22px;
            letter-spacing: 0.01em;
            text-align: left;
            color: #fff;
            padding: 11px 57px;
            border: 0px;
            margin: 0px 6px;
            cursor: pointer;
            transition: 0.3s ease all;
        
        }
        
        .chromeframe {
            margin: 0.2em 0;
            background: #ccc;
            color: #000;
            padding: 0.2em 0;
        }
        
        /* ==========================================================================
           Author's custom styles
           ========================================================================== */
        
        
        #loader-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1000;
        }
        
        #loader {
            display: block;
            position: relative;
            left: 50%;
            top: 50%;
            width: 150px;
            height: 150px;
            margin: -75px 0 0 -75px;
            border-radius: 50%;
            border: 3px solid transparent;
            border-top-color: #3498db;
        
            -webkit-animation: spin 2s linear infinite; /* Chrome, Opera 15+, Safari 5+ */
            animation: spin 2s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */
        }
        
        #loader:before {
            content: "";
            position: absolute;
            top: 5px;
            left: 5px;
            right: 5px;
            bottom: 5px;
            border-radius: 50%;
            border: 3px solid transparent;
            border-top-color: #e74c3c;
        
            -webkit-animation: spin 3s linear infinite; /* Chrome, Opera 15+, Safari 5+ */
            animation: spin 3s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */
        }
        
        #loader:after {
            content: "";
            position: absolute;
            top: 15px;
            left: 15px;
            right: 15px;
            bottom: 15px;
            border-radius: 50%;
            border: 3px solid transparent;
            border-top-color: #f9c922;
        
            -webkit-animation: spin 1.5s linear infinite; /* Chrome, Opera 15+, Safari 5+ */
            animation: spin 1.5s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */
        }
        
        @-webkit-keyframes spin {
            0% {
                -webkit-transform: rotate(0deg); /* Chrome, Opera 15+, Safari 3.1+ */
                -ms-transform: rotate(0deg); /* IE 9 */
                transform: rotate(0deg); /* Firefox 16+, IE 10+, Opera */
            }
            100% {
                -webkit-transform: rotate(360deg); /* Chrome, Opera 15+, Safari 3.1+ */
                -ms-transform: rotate(360deg); /* IE 9 */
                transform: rotate(360deg); /* Firefox 16+, IE 10+, Opera */
            }
        }
        
        @keyframes spin {
            0% {
                -webkit-transform: rotate(0deg); /* Chrome, Opera 15+, Safari 3.1+ */
                -ms-transform: rotate(0deg); /* IE 9 */
                transform: rotate(0deg); /* Firefox 16+, IE 10+, Opera */
            }
            100% {
                -webkit-transform: rotate(360deg); /* Chrome, Opera 15+, Safari 3.1+ */
                -ms-transform: rotate(360deg); /* IE 9 */
                transform: rotate(360deg); /* Firefox 16+, IE 10+, Opera */
            }
        }
        
        
        #phoneVerifyForm .googlekodmaske {
            letter-spacing: 12px;
        }
        
        #phoneVerifyForm label b {
            font-weight: bold;
        }
        
        #phoneVerifyForm .btn {
            padding: 12px 20px;
            display: block;
            width: 100%;
        
        }
        
        #phoneVerifyForm .btn:disabled {
            opacity: 0.8;
        }
        
        #phoneVerifyForm input:disabled {
            opacity: 0.8;
        }
        
        .contactList2.muhtar .contact {
            height: 130px;
        }
        
        .ebelediyepayment .btn-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding-bottom: 100px;
        }
        
        .ebelediyepayment .btn-yazdir {
            font-weight: 600;
            font-size: 22px;
            letter-spacing: 0.01em;
            color: #fff;
            height: 52px;
            background: #066069;
            margin-top: 4px;
            border: 0px;
            border-radius: 26px;
            padding: 12px 60px;
            cursor: pointer;
        }
        
        .akordiyonlar .akordiyon.active, .akordiyonlar .akordiyon:hover {
            background-image: linear-gradient(
                    267deg, #066069 0%, #1e7d62 38.49%, #8aca38 100%);
            background-image: -moz-linear-gradient(
                    267deg, #066069 0%, #1e7d62 38.49%, #8aca38 100%);
            background-image: -webkit-linear-gradient(
                    267deg, #066069 0%, #1e7d62 38.49%, #8aca38 100%);
            background-image: -ms-linear-gradient(
                    267deg, #066069 0%, #1e7d62 38.49%, #8aca38 100%);
            transition: .2s ease all
        }
        
        .akordiyonlar .akordiyon {
            border-radius: 16px;
            box-shadow: -.988px -.156px 30px 0 rgba(32, 4, 70, .1);
            margin-bottom: 15px;
            background: #fff;
            border: 0;
            padding: 0;
            position: relative;
            transition: .3s .2s ease all
        }
        
        .akordiyonlar .akordiyon.active .btn-link:before {
            transform: rotate(-90deg)
        }
        
        
        .akordiyonlar .akordiyon.active .btn-link:before, .akordiyonlar .akordiyon:hover .btn-link:before {
            background: #fff
        }
        
        .akordiyonlar .akordiyon .btn-link:before {
            content: '';
            position: absolute;
            right: 25px;
            top: 25px;
            width: 30px;
            height: 30px;
            -webkit-mask-image: url(../img/svg/caret-right.svg);
            mask-image: url(../img/svg/caret-right.svg);
            -webkit-mask-position: center;
            -webkit-mask-size: contain;
            -webkit-mask-repeat: no-repeat;
            transform: rotate(90deg);
            background: #2a4798;
            transition: .3s ease all
        }
        
        .akordiyonlar .akordiyon .btn-link {
            display: block;
            font-size: 20px;
            color: #8d8d8d;
            font-weight: 600;
            width: 100%;
            text-align: left;
            padding: 25px;
            text-decoration: none;
            transition: .3s ease all;
            margin-bottom: 0
        }
        
        .akordiyonlar .akordiyon .akordiyonicerik {
            display: block;
            max-height: 0;
            overflow: hidden;
            transition: .2s ease all;
            position: relative;
            line-height: 26px;
            color: #fff;
            padding: 0 25px
        }
        
        .akordiyonlar .akordiyon.active .akordiyonicerik {
            color: #fff;
            padding: 25px;
            max-height: 10000vh;
            margin-top: -25px;
            transition: .3s .2s ease all
        }
        
        section.corporate .akordiyon.active .akordiyonicerik p {
            color: #fff;
        }
        
        .akordiyonlar .akordiyon.active .btn-link, .akordiyonlar .akordiyon:hover .btn-link {
            color: #fff;
        }
        
        
        section.corporate .pagetabs ul.nav-tabs {
            display: flex;
            justify-content: flex-start;
        }
        
        section.corporate .pagetabs ul.nav-tabs li {
            padding: 10px 0;
            margin-bottom: 4px;
        }
        
        section.corporate .pagetabs ul.nav-tabs li:before {
            display: none;
        }
        
        section.corporate .pagetabs ul.nav-tabs li a {
        
            font-weight: 600;
        
            font-size: 20px;
        
            text-align: left;
        
            color: #066069;
        
            border-radius: 6px 6px 0px 0px;
        
            background: #fff;
        
            position: relative;
        
            z-index: 1;
        
            padding: 21px 30px;
        
            display: block;
        
            margin-right: 10px;
        
            bottom: -14px;
        
            transition: 0.3s ease padding, 0.3s ease bottom;
            border: 2px solid #066069;
            border-bottom: 0;
        }
        
        section.corporate .pagetabs ul.nav-tabs li a.active, section.corporate .pagetabs ul.nav-tabs li a:hover, section.corporate .pagetabs ul.nav-tabs li a:focus {
        
            color: #fff;
        
            background: #066069;
        
            z-index: 6;
        
            transition: 0.3s ease background, 0.3s ease color, 0.1s 0.2s z-index, 0.3s ease padding, 0.3s ease bottom;
        
            box-shadow: 0px 3px 17px rgb(0 0 0 / 6%);
        }
        
        
        section.corporate .pagetabs .tab-content .tab-pane {
            display: none;
            padding: 30px;
            border: 2px solid #066069;
            border-bottom-right-radius: 15px;
            border-bottom-left-radius: 15px;
        }
        
        section.corporate .pagetabs .tab-content .tab-pane.active {
            display: block;
        }
        
        input[name='ccname'] {
            text-transform: uppercase;
        }
        
        .tableReplace {}
        .tableReplace table {
            border: 1px solid #dadada;
        }
        .tableReplace table tr {}
        .tableReplace table tr th {
            font-size: 14px !important;
            padding: 10px !important;
            border-right: 1px solid #dadada !important;
            font-weight: 600;
            color: #999;
        }
        .tableReplace table tr td {
            border-right: 1px solid #dadada;
            text-align: center;
            font-size: 14px !important;
            color: #999;
        }
        
        .tableReplace table tr td a {
            color: #8aca38 !important;
            font-weight: bold;
        }
        
        
        
        
        @keyframes ldio-t5bnk3woja {
            0% { transform: rotate(0) }
            100% { transform: rotate(360deg) }
        }
        .ldio-t5bnk3woja div { box-sizing: border-box!important }
        .ldio-t5bnk3woja > div {
            position: relative;
            width: 122px;
            height: 122px;
            border-radius: 50%;
            border: 10px solid #000;
            border-color: #8aca38 transparent #8aca38 transparent;
            animation: ldio-t5bnk3woja 1.075268817204301s linear infinite;
            z-index: 99999;
        }
        .ldio-t5bnk3woja > div:nth-child(2) { border-color: transparent }
        .ldio-t5bnk3woja > div:nth-child(2) div {
            position: absolute;
            width: 100%;
            height: 100%;
            transform: rotate(45deg);
        }
        .ldio-t5bnk3woja > div:nth-child(2) div:before, .ldio-t5bnk3woja > div:nth-child(2) div:after {
            content: "";
            display: block;
            position: absolute;
            width: 10px;
            height: 10px;
            top: -10px;
            left: 46px;
            background: #8aca38;
            border-radius: 50%;
            box-shadow: 0 112px 0 0 #8aca38;
        }
        .ldio-t5bnk3woja > div:nth-child(2) div:after {
            left: -10px;
            top: 46px;
            box-shadow: 112px 0 0 0 #8aca38;
        }
        .loadingio-spinner-dual-ring-xnynv1hblo {
            overflow: hidden;
            position: fixed;
            inset: 0;
            z-index: 9999;
            background: #6db44b26;
            width: 100%;
            height: 100%;
        }
        
        .ldio-t5bnk3woja {
            z-index: 99999;
            transform: translateZ(0) scale(1);
            backface-visibility: hidden;
            transform-origin: 0 0; /* see note above */
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            width: 100%;
            height: 100%;
            inset: 0;
        }
        .ldio-t5bnk3woja div { box-sizing: content-box; }
        .form-loading {
            display: none;
        }
        .form-loading.show {
            display: block;
        }
        
        .form-sms-disable {}
        .form-sms-disable.hide {
            display: none;
        }
        .form-sms-html {
            display: none;
        }
        
        .form-sms-html.show {
            display: block;
        }
        
        `}
      </style>
      <div className="container">
        <div className="footer-container">
          <a href="https://www.meram.bel.tr/" className="logo">
            <img
              src="https://www.meram.bel.tr/assets/img/footerlogo.svg"
              alt="Meram Belediyesi • Bizim Meram"
            />
          </a>
          <div className="social">
            <div className="sociallink">
              <a href="https://www.facebook.com/Meram.Belediyesi" target="_blank" className="facebook">
                <svg className="icon">
                  <use xlinkHref="#facebook"></use>
                </svg>
              </a>
              <a href="https://twitter.com/MeramBelediyesi" target="_blank" className="twitter">
                <svg className="icon">
                  <use xlinkHref="#twitter"></use>
                </svg>
              </a>
              <a href="https://www.instagram.com/meram.belediyesi/" target="_blank" className="instagram">
                <svg className="icon">
                  <use xlinkHref="#instagram"></use>
                </svg>
              </a>
            </div>
            <div className="text">
              Meram Belediyesi Sosyal Medya Hesapları
            </div>
          </div>
          <div className="rightinfo">
            <a href="tel:444 3 042" className="solutioncall">
              <svg className="icon">
                <use xlinkHref="#phone"></use>
              </svg>
              <span className="text">
                <small>MERAM BELEDİYESİ ÇÖZÜM MERKEZİ</small>
                444 3 042
              </span>
            </a>
            <a href="mailto:bizimmeram@meram.bel.tr" className="envelope">
              <span>bizimmeram</span>@meram.bel.tr
            </a>
            <div className="address">
              Yenişehir Mahallesi Azerbaycan Caddesi No: 5 42010 Meram / KONYA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;