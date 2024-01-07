'use client'
import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import TelegramIcon from '@mui/icons-material/Telegram'
import AppleIcon from '@mui/icons-material/Apple'
import GitHubIcon from '@mui/icons-material/GitHub'
import { IconButton, Stack } from '@mui/material'

function Question({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      variant="body1"
      align="left"
      color="text.secondary"
      component="p"
      sx={{ pt: 1 }}
    >
      Q: {children}
    </Typography>
  )
}

function Answer({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      variant="body1"
      align="left"
      color="text.secondary"
      component="p"
      sx={{ pb: 1 }}
    >
      A: {children}
    </Typography>
  )
}

function Emphasis({ children }: { children: React.ReactNode }) {
  return (
    <b>
      <u>{children}</u>
    </b>
  )
}

function Hyperlink({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  return (
    <a href={href} target="_blank" rel="noopener">
      {children}
    </a>
  )
}

export default function Home() {
  const theme = useTheme()
  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{
          borderBottom: (theme) => {
            return `1px solid ${theme.palette.divider}`
          },
        }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            safecantonese.ai
          </Typography>
          <IconButton
            href="https://www.icloud.com/shortcuts/6c4bd6051ace440598a937befc24d7a0"
            color="primary"
            target="_blank"
            rel="noopener"
          >
            <AppleIcon />
          </IconButton>
          <IconButton
            href="https://t.me/safecantoneseai"
            color="secondary"
            target="_blank"
            rel="noopener"
          >
            <TelegramIcon />
          </IconButton>
          <IconButton
            href="https://github.com/safecantoneseai/safecantonese.ai"
            color="secondary"
            target="_blank"
            rel="noopener"
          >
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Stack
        component="main"
        sx={{ pt: 8, pb: 6, alignItems: 'center' }}
        spacing={2}
      >
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          私隱安全同埋準確度兼具嘅免費 Whatsapp 廣東話轉文字 AI 工具
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          透過知名美國人工智能獨角獸 Hugging Face ，一間受到 Google, Amazon,
          IBM, Nvidia, Intel
          等科技巨企注資，並且係人工智能行內知名嘅公司，提供嘅免費 API 嚟幫你將
          WhatsApp 錄音等音訊檔案變成文字嘅工具。因為係採用 OpenAI Whisper Large
          V3 model 所以效果會比其他直接係裝置上作出處理嘅方法好好多。
        </Typography>
        <Button
          component="a"
          href="https://www.icloud.com/shortcuts/366ebd60551c41968cb58860973bbbdb"
          variant="contained"
          color="primary"
          startIcon={<AppleIcon />}
          target="_blank"
        >
          安裝 iOS Shortcut
        </Button>
        <Button
          component="a"
          href="https://t.me/safecantoneseai"
          variant="contained"
          color="secondary"
          startIcon={<TelegramIcon />}
          target="_blank"
        >
          加入 Telegram 群組
        </Button>
      </Stack>
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{
          pt: 8,
          pb: 6,
          backgroundColor: theme.palette.background.paper,
          pl: 2,
          pr: 2,
        }}
      >
        <Typography
          component="h2"
          variant="h5"
          align="center"
          color="text.primary"
          sx={{ pb: 1 }}
          gutterBottom
        >
          FAQs
        </Typography>
        <Question>呢個工具真係免費嘅？</Question>
        <Answer>
          <Emphasis>呢個工具係完全免費提供嘅。</Emphasis>由於所使用嘅 API
          並唔係由我控制而係由 Hugging Face 控制嘅，所以同某啲坊間其他服務唔同，
          <Emphasis>我係無辦法對你用個 API 呢點收費的</Emphasis>。至於 Hugging
          Face 嘅免費 API
          服務都提供咗好一段時間，將來會唔會停止提供都係未知之數，但係呢一刻未見到有停止提供免費
          API 服務嘅跡象。
        </Answer>
        <Question>咁你點賺錢？</Question>
        <Answer>
          我都唔知，個 API
          本身就係免費嘅，其實唔駛我俾錢，我只係付出少少時間成本整個 shortcut
          放出嚟俾大家用，暫時都睇唔到呢舊嘢有任何盈利嘅前景。
        </Answer>
        <Question>點解會整呢個 app / website / shortcut？</Question>
        <Answer>
          因為呢排（2024年1月頭）留意到有意見認為坊間某個都幾多人用既相關產品係透過一個架設係
          <Emphasis>「香港 office local run」</Emphasis>
          （並非猜測，係由疑似係創辦人嘅用戶係
          <Hyperlink href="https://lih.kg/BuvmggX">某討論區</Hyperlink>
          透露嘅）嘅伺服器運行，所以
          <Emphasis>有安全同埋私隱上面嘅隱憂</Emphasis>，咁我就諗到可以
          <Emphasis>用 Hugging Face 呢啲信譽相信比較好嘅企業</Emphasis>
          嚟進行語音辨識，咁大家就唔洗擔心自己既錄音被用嚟做不知名用途啦，
          Hugging Face 有明確嘅 Privacy Policy 去規定你嘅資料可以使用作咩用途。
        </Answer>
        <Question>你個 app/shortcut 會唔會攞我啲錄音賣俾 CIA MI6 架？</Question>
        <Answer>
          首先呢<Emphasis>我係完全唔會接觸到你啲錄音嘅</Emphasis>
          ，你嘅錄音檔案係直接上傳 Hugging Face 嘅 server 上面，
          <Emphasis>唔會經我手</Emphasis>，你唔信我嘅話可以自己 check 下個
          shortcut 啲 logic。至於 Hugging Face
          會唔會攞你啲資料去賣呢？我唔係律師，我只可以話你嘅資料受到美國法律，Hugging
          Face Terms of Service 同埋 Privacy Policy 嘅保障，而根據 Hugging Face
          Privacy
          Policy，你嘅個人資料係有機會會同特定個體分享`嘅，實際上所有呢類型公司嘅
          Privacy Policy 都係咁寫，啱唔啱你心水就見仁見智啦。
          <Emphasis>
            當然對於有敏感或者私密內容嘅錄音我都係建議你自己聽番算。
          </Emphasis>
        </Answer>
        <Question>點解我要信你？</Question>
        <Answer>
          <Emphasis>
            我都覺得你唔應該信我，事實上你唔應該將你嘅私人錄音交俾網上面隨便一個人
          </Emphasis>
          ，就算係大型科技企業都最好要係上傳之前再三考慮，更何況係普通人呢？為咗確保大家唔需要信我或者任何一個路人甲，所以我上面提供嘅解決方法係完全唔會俾我接觸到大家既任何錄音或者其他資料，就算有
          CIA 特務上門要我交啲錄音出嚟我都只可以叫佢哋去搵 Hugging Face
          😅，我爱莫能助。
          <Emphasis>
            我亦都承諾呢個 page 入面提供嘅 app / shortcut
            等嘅解決方法都係會確保任何錄音資料係 100%
            唔會經我手的，亦都會確保呢個承諾係可以俾各位科技同業作出核實嘅
          </Emphasis>
          ，希望大家可以放心使用。目前所提供嘅 iOS
          shortcut，下載之後就可以打開修改版面核實入面既程序邏輯，各位同業可以核實。
        </Answer>
        <Question>點解會有時會出熱身兩分鐘或者會 load 好耐？</Question>
        <Answer>
          <Emphasis>無辦法</Emphasis>，個免費 API 免費得俾你自然係有 rate limit
          限制架啦，Hugging Face
          個系統會需要時間熱身，所以有時要等或者提示你要兩分鐘熱身，
          <Emphasis>
            目前已經盡量用技術手段降低 loading
            時間同埋做好啲個等待時間嘅用戶體驗，不過有時都係始終要等。
          </Emphasis>
        </Answer>
        <Question>你個嘢壞咗呀／有其他 bug 喎。</Question>
        <Answer>
          麻煩幫手入去 Telegram group{' '}
          <Hyperlink href="https://t.me/safecantoneseai">
            https://t.me/safecantoneseai
          </Hyperlink>{' '}
          回報一下。
        </Answer>
        <Question>其他平台呢？</Question>
        <Answer>
          會研究點樣確保錄音 100%
          唔經我手嘅情況下支援其他平台，敬請關注此頁面以及 Telegram 群組。
        </Answer>
        <Question>站主係咩人？</Question>
        <Answer>純粹科技界小薯一件，希望各位多多指教🙏。</Answer>
      </Container>
    </>
  )
}
