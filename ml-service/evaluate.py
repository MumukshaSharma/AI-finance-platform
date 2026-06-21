import json

from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
    confusion_matrix
)

from classify import classify


with open("test_cases.json", "r") as f:
    test_cases = json.load(f)

y_true = []
y_pred = []

print("\n===== INDIVIDUAL PREDICTIONS =====\n")

for case in test_cases:
    result = classify(case["text"])

    actual = case["expected"]
    predicted = result["category"]
    confidence = result["confidence"]

    y_true.append(actual)
    y_pred.append(predicted)

    status = "✅" if actual == predicted else "❌"

    print(
        f"{status} "
        f"{case['text']:<35} "
        f"Expected={actual:<15} "
        f"Predicted={predicted:<15} "
        f"Confidence={confidence:.3f}"
    )

accuracy = accuracy_score(y_true, y_pred)

precision = precision_score(
    y_true,
    y_pred,
    average="macro",
    zero_division=0
)

recall = recall_score(
    y_true,
    y_pred,
    average="macro",
    zero_division=0
)

f1 = f1_score(
    y_true,
    y_pred,
    average="macro",
    zero_division=0
)

labels = sorted(list(set(y_true)))

cm = confusion_matrix(
    y_true,
    y_pred,
    labels=labels
)

print("\n")
print("=" * 60)
print("EVALUATION RESULTS")
print("=" * 60)

print(f"Accuracy : {accuracy:.3f}")
print(f"Precision: {precision:.3f}")
print(f"Recall   : {recall:.3f}")
print(f"F1 Score : {f1:.3f}")

print("\nLabels:")
print(labels)

print("\nConfusion Matrix:")
print(cm)