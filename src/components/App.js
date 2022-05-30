import React from 'react';

import Container from '../ui-components/Container';

export default function App({}){
    return (
        <Container style={{width: '100%', height:'100%', display:'flex', justifyContent:'center'}}>
        <div style={{height: '100%', display: 'flex', justifyContent:'center', justifyItems:'center', alignItems:'center', flexDirection:'column', width:'100%'}}>
            <div style={{width: '100%', backgroundColor:'#555555', textAlign:'center'}}>
                <h1>MQF Tester</h1>
            </div>
            <div style={{width: '100%', backgroundColor:'#555555'}}>
                Get fucked
            </div>
        </div>
        </Container>
    );
}