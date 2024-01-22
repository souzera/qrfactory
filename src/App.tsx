
import DownloadOutlined from '@ant-design/icons/lib/icons/DownloadOutlined';
import { Button, Form, Input, ColorPicker } from 'antd'
import QrCode from 'antd/es/qr-code';
import { useEffect, useState } from 'react'
import { downloadSvg } from './services/download-svg';
import { downloadPng } from './services/download-png';

function App() {

  const [form] = Form.useForm();

  const [url, setUrl] = useState('google.com')

  const [typeQRCode, setTypeQRCode] = useState('svg')

  const [color, setColor] = useState('#000')

  const onFinish = (values: any) => {
    setUrl(values.url)
  }

  useEffect(() => {
    console.log(url)
    console.log(color)
  }, [url, color])

  return (
    <>
      <div className='flex flex-col justify-center items-center gap-2 mt-[5%]'>
        <span className='w-[80%] h-auto text-center text-ellipsis text-4xl font-bold'>🏭 Gerador de QRCode</span>

        <div className='flex justify-center items-center gap-3 max-lg:items-center w-[80%] h-auto max-sm:flex-col'>

          <div className='p-8 rounded-xl h-auto w-[60%] max-sm:w-[80%] max-sm:h-auto'>
            <Form
              layout='vertical'
              form={form}
              onFinish={onFinish}
            >
              <Form.Item
                name='url'>
                <Input placeholder="google.com" />
              </Form.Item>
              <div className='flex justify-end gap-3'>
                <Form.Item
                  name='color'>
                  <ColorPicker defaultValue="#000" showText disabledAlpha 
                  onChange={(value, hex) => {
                    setColor(hex)
                  }}/>
                </Form.Item>
                <Button type="primary" className='float-right bg-black' htmlType="submit">
                  Gerar QRCode
                </Button>
              </div>
            </Form>
          </div>

          <div className='flex flex-col justify-center gap-2 items-center p-8 rounded-xl h-auto w-auto max-sm:w-[80%] max-sm:items-start'>
            <div id="myqrcode" className='p-2'>
              {typeQRCode === 'svg' && <QrCode color={color} type='svg' size={150} value={url} bgColor='transparent' />}
              {typeQRCode === 'png' && <QrCode color={color} size={150} value={url} bgColor='transparent' />}
            </div>
            <div className='flex gap-2'>
              <Button onMouseUp={() => { setTypeQRCode('png'); }} onClick={downloadPng} icon={<DownloadOutlined />}>PNG</Button>
              <Button onMouseUp={() => { setTypeQRCode('svg'); }} className="bg-black font-bold" type='primary' onClick={downloadSvg} icon={<DownloadOutlined />}>SVG</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
