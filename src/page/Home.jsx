import React, { useEffect } from 'react'
import MainInfo from '../components/MainInfo'
import StatusCard from '../components/StatusCard'
import img from '../assets/img//wsw.png'
import emotion from '../assets/img/svg/good.svg'
import { IconContext } from "react-icons";
import { WiHumidity } from 'react-icons/wi'
import { RiSurgicalMaskFill } from 'react-icons/ri'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import uvIcon from '../assets/img/svg/uv.svg'
import HourlyStatus from '../components/HourlyStatus'
import { getWeather, weatherStatusCheck } from '../actions/getWeather'
import { useDispatch, useSelector } from 'react-redux'
const windStatusBody = (windKph, winDir) => (
    <>
        <div className="status-card__info">
            <h4>{windKph || 0} <span>km/h</span></h4>
        </div>
        <div className="status-card__state">
            <span>Wind direction: {winDir || "Not Available"}</span>
            <div className="status-card__state__icon">
                <img src={img} alt="icon" />
            </div>

        </div>
    </>
)
const statusBodyStyle_1 = (value, unit, status, Icon, emotion, img) => (
    <>
        <div className="status-card__info">
            <h4>{value} {unit === "%" ? <sup>{unit}</sup> : <span>{unit}</span>}</h4>
        </div>
        <div className="status-card__state">
            <span>{status.status}</span>
            <div className="status-card__state__icon">
                <img src={status.emotion} alt="" />
            </div>
        </div>
        {img ? <div className="status-card__uv__icon"><img src={img} alt="icon"/> </div> : ""}
        {Icon ? (
            <IconContext.Provider value={{ className: `icon ${status.color}`,}}>
                <Icon />
            </IconContext.Provider>
        ) : ""}

    </>
)
const sunriseBody = (sunrise, sunset) => (
    <>
        <div className="center_flex status-card__growup_content" style={{ position: 'relative' }}>
            <div className="">
                <p>{sunrise}</p>
            </div>
            <IconContext.Provider value={{ className: "grow__icon" }}>
                <BsFillArrowUpCircleFill />
            </IconContext.Provider>
        </div>
        <div className="center_flex status-card__growup_content" style={{ position: 'relative' }}>
            <div className="">
                <p>{sunset}</p>
            </div>
            <IconContext.Provider value={{ className: "grow__icon" }}>
                <BsFillArrowDownCircleFill />
            </IconContext.Provider>
        </div>
    </>
)
export default function Home() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.weatherDataReducer.value)
    useEffect(() => {
        dispatch(getWeather)
    }, [dispatch])
    return (
        <div>
            {console.log(data)}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-3">
                        <MainInfo city={data.location ? data.location?.country + ", " + data.location?.name : null} time={data.location?.localtime_epoch}
                            temp_c={data.current?.temp_c}
                            status={data.current?.condition.text}
                            img={data.current?.condition.icon}
                        />
                    </div>
                    <div className="col-12 col-md-8 col-lg-9">
                        <div className="row mt-3">
                            <h3>Hourly</h3>
                            <HourlyStatus hourly={data.forecast?.forecastday[0].hour} />
                            <h3>Today Highlights</h3>
                            <div className="col-12 col-md-6 col-xl-4">
                                <StatusCard
                                    title={"Wind Status"}
                                    renderBody={windStatusBody(data.current?.wind_kph, data.current?.wind_dir)}
                                //  wind_kph={data.current?.wind_kph}
                                />
                            </div>
                            <div className="col-12 col-md-6 col-xl-4">
                                <StatusCard title={"Humidity"} renderBody={statusBodyStyle_1(data.current?.humidity, "%", weatherStatusCheck({ key: "humidity", payload: data.current?.humidity }), WiHumidity, emotion, null)} />
                            </div>
                            <div className="col-12 col-md-6 col-xl-4">
                                <StatusCard title={"Air Quality"} renderBody={statusBodyStyle_1(parseInt(data.current?.air_quality.pm2_5), null, weatherStatusCheck({ key: "airQuality", payload: data.current?.air_quality.pm2_5 }), RiSurgicalMaskFill, emotion, null)} />
                            </div>
                            <div className="col-12 col-md-6 col-xl-4">
                                <StatusCard title={"Visibility"} renderBody={statusBodyStyle_1(data.current?.vis_km, "km", weatherStatusCheck({ key: "visibility", payload: data.current?.vis_km }), null, emotion, null)} />
                            </div>
                            <div className="col-12 col-md-6 col-xl-4">
                                <StatusCard title={"Sunrise & Sunset"} renderBody={sunriseBody(data.forecast?.forecastday[0].astro.sunrise, data.forecast?.forecastday[0].astro.sunset)} />
                            </div>
                            <div className="col-12 col-md-6 col-xl-4">
                                <StatusCard title={"UV Index"} renderBody={statusBodyStyle_1(data.current?.uv, "", weatherStatusCheck({ key: "UV", payload: data.current?.uv}), null, emotion, uvIcon)} />
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </div>
    )
}
