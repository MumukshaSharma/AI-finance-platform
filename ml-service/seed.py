import json
import numpy as np
from sentence_transformers import SentenceTransformer

print("Loading embedding model...")

model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")

with open("categories.json", "r") as f:
    categories = json.load(f)

centroids = {}

for category, examples in categories.items():
    print(f"Processing {category}...")

    embeddings = model.encode(
        examples,
        convert_to_numpy=True,
        normalize_embeddings=True
    )

    centroid = np.mean(embeddings, axis=0)

    centroid = centroid / np.linalg.norm(centroid)

    centroids[category] = centroid.tolist()

with open("centroids.json", "w") as f:
    json.dump(centroids, f)

print("Done!")
print("Saved centroids.json")