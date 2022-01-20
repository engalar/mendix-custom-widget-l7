import { createElement, useEffect, useState } from "react";
import { Store } from "../store";

import { AMapScene, Marker } from "@antv/l7-react";
import useGeolocation from 'react-hook-geolocation';
export interface L7ComponentProps {
    store: Store;
}

const MarkerPinImg = {
    green:
        'https://gw.alipayobjects.com/mdn/rms_855bab/afts/img/A*JhBbT4LvHpQAAAAAAAAAAAAAARQnAQ',
    blue:
        'https://gw.alipayobjects.com/mdn/rms_855bab/afts/img/A*n6cXTb8R7iUAAAAAAAAAAAAAARQnAQ',
};
const MarkerInfo = ({ title }: { title: string }) => {
    return (
        <div className="markerContent">
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '32px',
                    padding: '0.05rem',
                    background: '#1677ff',
                    borderRadius: '44px',
                }}
            >
                <div
                    style={{
                        color: '#fff',
                        fontSize: '12px',
                    }}
                >
                    {title}
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <img
                    style={{
                        width: '20px',
                        height: '30px',
                    }}
                    alt="marker"
                    src={MarkerPinImg.blue}
                />
            </div>
        </div>
    );
};


export function L7Component(props: L7ComponentProps) {
    console.log(props);

    const geolocation = useGeolocation();
    console.log(geolocation);


    const [data, setData] = useState<any[]>();
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                'https://gw.alipayobjects.com/os/basement_prod/893d1d5f-11d9-45f3-8322-ee9140d288ae.json',
            );
            const data = await response.json();
            setData(data);
        };
        fetchData();
    }, []);
    return (
        <AMapScene className="mxcn-l7"
            map={{
                center: [121.4316962, 31.26082325],
                pitch: 0,
                style: 'light',
                zoom: 15,
            }}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }}
        >
            {data &&
                data.map((item: any) => {
                    return (
                        <Marker key={item.id} lnglat={[item.longitude, item.latitude]}>
                            <MarkerInfo title={item.name} />
                        </Marker>
                    );
                })}
        </AMapScene>
    );
}
