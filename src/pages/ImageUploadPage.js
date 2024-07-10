import BasicLayout from "../layouts/BasicLayout";
import React, {useRef, useState} from 'react';
import {
    Typography,
    Button,
    TextField,
    Grid,
    Box,
    Card, Toolbar, CardContent
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
const ImageUploadPage = (props) => {

    const [connectip, setIp] = useState('10.0.0.1');
    const [connectport, setPort] = useState('5001');
    const [receiveConnect, setConnectMessage] = useState('');

    const [imagepath, setImagePath] = useState('');
    const [receiveGetImage, setGetImageMessage] = useState('');
    const [imageName, setImageName] = useState('');

    const [sendFieldMessage, setMessage] = useState('');
    const [sendFieldData, setData] = useState('');
    const [receiveGet, setGetMessage] = useState('');
    const [receivePost, setPostMessage] = useState('');
    const [jsonResponse, setJsonResponse] = useState(null);

    const fileInputRef = useRef(null);


    const handleConnect = async () => {

    }

    const handleDisconnect = async () => {

    }

    const handleGetImage = async () => {
        fileInputRef.current.click();
    }


    // 반입 규정으로 인한 기능 제작 보류
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setImagePath(file.name);

    }

    const sendData = async () => {

    }




    return(
        <BasicLayout props={props}>
            <Box component="main" sx={{ p: 2,
            marginTop: '60px',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
            }}>
                <Toolbar />
                <Card>
                    <h2 className="font-weight-bolder" style={{
                        marginLeft: '15px'
                    }}>DBMS Data Search</h2>
                    <CardContent>
                        <Typography variant="poster" component="h3" sx={{
                            display: 'center',
                            marginBottom: '10px'
                        }}>Connect</Typography>

                        <Grid container spacing={10}>
                            <Grid item xs={12} sm={6}>
                                <h5 className="font-weight-bolder">IP Address</h5>
                                <TextField
                                    fullWidth
                                    value={connectip}
                                    onChange={(e) => setIp(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <h5 className="font-weight-bolder">port</h5>
                                <TextField
                                    fullWidth
                                    value={connectport}
                                    onChange={(e) => setPort(e.target.value)}
                                />
                            </Grid>

                            <Grid container sx={{
                                marginTop : '20px',
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Button variant="outlined" color="primary" onClick={handleConnect} endIcon={<SendIcon />}>Connect</Button>
                                <Button variant="outlined" color="secondary" onClick={handleDisconnect} style={{marginLeft: 30}}>Disconnect</Button>

                            </Grid>
                            <Typography variant="body1" sx={{
                                marginTop: '10px',
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>Result of connect
                                : {receiveConnect}</Typography>
                        </Grid>

                        <Grid container spacing={10}>
                            <Grid item xs={12}>
                                <Typography variant="poster" component="h3" sx={{
                                    display: 'center',
                                    marginBottom: '60px'
                                }}>Get image</Typography>

                                <h5 className="font-weight-bolder">Path</h5>
                                <TextField
                                    fullWidth
                                    value={imagepath}
                                    onChange={(e) => setImagePath(e.target.value)}
                                    style={{marginBottom: 8}}
                                />
                            </Grid>
                            <Grid container sx={{
                                marginTop : '20px',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>


                                <div>
                                    <input type={"file"} accept={"C:"} style={{display : 'none'}} ref={fileInputRef} onChange={handleFileChange}/>
                                    <Button variant="outlined" color="primary" onClick={handleGetImage}>Get Image</Button>
                                </div>


                            </Grid>
                            <Typography variant="body1" sx={{
                                marginTop: '10px',
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>Result of Get Image: {receiveGetImage}</Typography>
                            {imageName && <img src={imageName} alt="BMP"/>}
                        </Grid>

                        {/*get image*/}
                        <Grid container spacing={10}>
                            <Grid item xs={12}>
                                <Typography variant="poster" component="h3" sx={{
                                    display: 'center',
                                    marginBottom: '60px'
                                }}>Send message</Typography>

                                <Grid container spacing={10}>
                                    <Grid item xs={12} sm={6}>
                                        <h5 className="font-weight-bolder">message</h5>
                                        <TextField
                                            fullWidth
                                            value={sendFieldMessage}
                                            onChange={(e) => setMessage(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <h5 className="font-weight-bolder">Hex Data</h5>
                                        <TextField
                                            fullWidth
                                            value={sendFieldData}
                                            onChange={(e) => setData(e.target.value)}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container sx={{
                                marginTop : '20px',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Button variant="outlined" color="primary" onClick={handleGetImage}>Get Image</Button>

                            </Grid>
                            <Typography variant="body1" sx={{
                                marginTop: '10px',
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>Response from server : {receivePost}</Typography>
                            {jsonResponse && <pre>{JSON.stringify(jsonResponse, null, 2)}</pre>}
                        </Grid>

                    </CardContent>
                </Card>
            </Box>
        </BasicLayout>
    );
}
export default ImageUploadPage;