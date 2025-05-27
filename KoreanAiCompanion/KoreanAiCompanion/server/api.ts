import express from 'express';
import { chatWithKurumi } from './routes';

const router = express.Router();

// 쿠루미와 대화하기 API 엔드포인트
router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: "메시지가 필요합니다" });
    }
    
    const response = await chatWithKurumi(message, []);
    res.json(response);
  } catch (error) {
    console.error("채팅 오류:", error);
    res.status(500).json({ error: "서버 오류가 발생했습니다" });
  }
});

export default router;