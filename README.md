# BrightMoney – AI-Powered Personal Finance Platform

BrightMoney is a full-stack personal finance management platform built with Next.js, Prisma, PostgreSQL, and Clerk authentication. It helps users track transactions, manage budgets, categorize expenses automatically using machine learning, and gain insights into their spending habits.

---

## 🚀 Features

### 💰 Financial Management

- Create and manage multiple accounts
- Track income and expenses
- Budget management and monitoring
- Recurring transaction support
- Dashboard analytics
- Transaction history and filtering

### 🧾 Receipt Scanning

- Upload receipt images
- Extract transaction details automatically
- Auto-fill transaction forms

### 🤖 ML-Powered Transaction Categorization

Built a custom machine learning service using Sentence Transformers and cosine similarity.

#### Supported Categories

- Food
- Transportation
- Shopping
- Entertainment
- Groceries
- Utilities
- Rent
- Healthcare
- Education
- Travel
- Other

#### ML Pipeline

```text
Transaction Description
          ↓
Sentence Transformer Embedding
          ↓
Category Centroid Generation
          ↓
Cosine Similarity Matching
          ↓
Predicted Category
          ↓
Auto-filled Transaction Category
```

#### Performance

| Metric | Score |
|----------|----------|
| Accuracy | 94.4% |
| Precision | 94.0% |
| Recall | 94.4% |
| F1 Score | 94.0% |

#### ML Features

- Custom training dataset
- Category centroid generation
- FastAPI inference service
- Real-time categorization
- User feedback collection for future retraining

---

## 📊 Spending Insights Engine

A deterministic analytics engine built using Prisma aggregations and rule-based logic.

### Insights Generated

- Category-wise spending breakdown
- Spending percentages
- Month-over-month comparisons
- Largest spending category detection
- Spending increase/decrease alerts

### Example Insights

```text
Food is your largest spending category at 34%.

Shopping spending increased 22% compared to last month.

Transportation spending decreased 15% compared to last month.
```

---

## 🛠️ Tech Stack

### Frontend

- Next.js 15
- React
- Tailwind CSS
- shadcn/ui

### Backend

- Next.js Server Actions
- Prisma ORM
- PostgreSQL
- Clerk Authentication

### Machine Learning Service

- Python
- FastAPI
- Sentence Transformers
- Scikit-learn
- Cosine Similarity

### Database

- PostgreSQL
- Supabase

---

## 🏗️ Architecture

```text
Frontend (Next.js)
        ↓
Server Actions
        ↓
Prisma ORM
        ↓
PostgreSQL / Supabase


ML Categorization Service
        ↓
FastAPI
        ↓
Sentence Transformers
        ↓
Cosine Similarity Classification
```

---

## 📁 Project Structure

```text
AIFinancePlatform
├── app/
├── actions/
├── components/
├── data/
├── emails/
├── hooks/
├── lib/
├── prisma/
├── public/
├── ml-service/
│   ├── app.py
│   ├── classify.py
│   ├── seed.py
│   ├── evaluate.py
│   ├── categories.json
│   ├── centroids.json
│   ├── test_cases.json
│   └── requirements.txt
├── package.json
└── README.md
```

---

## 🧪 ML Evaluation

Evaluation performed on a custom benchmark dataset containing real-world transaction descriptions from Indian and international merchants.

### Example Transactions

- Swiggy Biryani Order
- Uber Airport Ride
- Amazon Fresh
- Netflix Subscription
- Apollo Pharmacy
- Coursera Subscription

### Final Metrics

| Metric | Score |
|----------|----------|
| Accuracy | 94.4% |
| Precision | 94.0% |
| Recall | 94.4% |
| F1 Score | 94.0% |

---

## 🔮 Future Improvements

- AI Spending Coach
- Budget Recommendation Engine
- Financial Health Score
- User Feedback Retraining Pipeline
- Spending Forecasting
- Advanced Analytics Dashboard

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
cd AIFinancePlatform
```

### Install Frontend Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory and add:

```env
DATABASE_URL=
DIRECT_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=

RESEND_API_KEY=

ARCJET_KEY=
```

### Run Application

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🚀 Running the ML Service

Navigate to the ML service folder:

```bash
cd ml-service
```

Activate the virtual environment:

```bash
source venv/bin/activate
```

Start the FastAPI server:

```bash
uvicorn app:app --reload
```

ML API Endpoint:

```text
http://127.0.0.1:8000/categorize
```

Example Request:

```bash
curl -X POST http://127.0.0.1:8000/categorize \
-H "Content-Type: application/json" \
-d '{"description":"Swiggy Biryani Order"}'
```

Example Response:

```json
{
  "category": "food",
  "confidence": 0.345
}
```

---

## 👩‍💻 Author

**Mumuksha Sharma**

B.Tech Computer Science (Data Science)

Full Stack Developer | Machine Learning Enthusiast
