### Make sure to create a `.env` file with following variables -

```
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

BrightMoney – AI-Powered Personal Finance Platform

BrightMoney is a full-stack personal finance management platform built with Next.js, Prisma, PostgreSQL, and Clerk authentication. It helps users track transactions, manage budgets, categorize expenses automatically using machine learning, and gain insights into their spending habits.

⸻

Features

Financial Management

* Create and manage multiple accounts
* Track income and expenses
* Budget management and monitoring
* Recurring transaction support
* Dashboard analytics
* Transaction history and filtering

Receipt Scanning

* Upload receipt images
* Extract transaction details automatically
* Auto-fill transaction forms

ML-Powered Transaction Categorization

Built a custom machine learning service using Sentence Transformers and cosine similarity.

Supported Categories

* Food
* Transportation
* Shopping
* Entertainment
* Groceries
* Utilities
* Rent
* Healthcare
* Education
* Travel
* Other

ML Pipeline

Description
→ Sentence Transformer Embedding
→ Category Centroids
→ Cosine Similarity Matching
→ Predicted Category
→ Auto-filled Transaction Category

Performance

* Accuracy: 94.4%
* Precision: 94.0%
* Recall: 94.4%
* F1 Score: 94.0%

ML Features

* Custom training dataset
* Category centroid generation
* FastAPI inference service
* Real-time categorization
* User feedback collection for future retraining

⸻

Spending Insights Engine

A deterministic analytics engine built using Prisma aggregations and rule-based logic.

Insights Generated

* Category-wise spending breakdown
* Spending percentages
* Month-over-month comparisons
* Largest spending category detection
* Spending increase/decrease alerts

Example:

Food is your largest spending category at 34%.

Shopping spending increased 22% compared to last month.

Transportation spending decreased 15% compared to last month.

⸻

Tech Stack

Frontend

* Next.js 15
* React
* Tailwind CSS
* shadcn/ui

Backend

* Next.js Server Actions
* Prisma ORM
* PostgreSQL
* Clerk Authentication

Machine Learning Service

* Python
* FastAPI
* Sentence Transformers
* Scikit-learn
* Cosine Similarity

Database

* PostgreSQL
* Supabase

⸻

Architecture

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

⸻

Project Structure

AIFinancePlatform
├── app/
├── actions/
├── components/
├── prisma/
├── data/
├── lib/
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
└── package.json

⸻

ML Evaluation

Evaluation performed on a custom benchmark dataset containing real-world transaction descriptions from Indian and international merchants.

Examples:

* Swiggy Biryani Order
* Uber Airport Ride
* Amazon Fresh
* Netflix Subscription
* Apollo Pharmacy
* Coursera Subscription

Final Metrics:

Metric	Score
Accuracy	94.4%
Precision	94.0%
Recall	94.4%
F1 Score	94.0%

⸻

Future Improvements

* AI Spending Coach
* Budget Recommendation Engine
* Financial Health Score
* User Feedback Retraining Pipeline
* Spending Forecasting
* Advanced Analytics Dashboard

⸻

Installation

Clone Repository

git clone <repository-url>
cd AIFinancePlatform

Install Frontend Dependencies

npm install

Configure Environment Variables


Run Application

npm run dev

Run ML Service

cd ml-service
source venv/bin/activate
uvicorn app:app --reload

⸻

Author

Mumuksha Sharma

B.Tech Computer Science (Data Science)

Full Stack Developer | Machine Learning Enthusiast
