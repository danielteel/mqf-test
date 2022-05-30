

export default function Container({centerVertical, children, style, ...props}){
    return (
        <div style={{width: '100%', height: '100%', maxWidth:'900px', display: 'flex', alignItems:'center', justifyContent: centerVertical ? 'center':'start'}}>
            <div style={style} {...props}>
                {children}
            </div>
        </div>
    );
}