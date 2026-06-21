import json
import numpy as np
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

MODEL_NAME = "sentence-transformers/all-MiniLM-L6-v2"

CONFIDENCE_THRESHOLD = 0

model = SentenceTransformer(MODEL_NAME)

with open("centroids.json", "r") as f:
    centroids = json.load(f)


def classify(description: str):
    embedding = model.encode(
        description,
        convert_to_numpy=True,
        normalize_embeddings=True
    )

    scores = {}

    for category, centroid in centroids.items():
        score = cosine_similarity(
            [embedding],
            [np.array(centroid)]
        )[0][0]

        scores[category] = float(score)

    best_category = max(scores, key=scores.get)
    best_score = scores[best_category]

    prediction = (
        best_category
        if best_score >= CONFIDENCE_THRESHOLD
        else "needs_review"
    )

    return {
        "category": prediction,
        "confidence": best_score,
        "scores": scores
    }


if __name__ == "__main__":
    tests = [
        "Starbucks Coffee",
        "Uber Airport Ride",
        "Netflix Subscription",
        "Amazon Fresh",
        "Apollo Pharmacy"
    ]

    for text in tests:
        result = classify(text)

        print(
            f"{text:<30} "
            f"-> {result['category']:<15} "
            f"({result['confidence']:.3f})"
        )