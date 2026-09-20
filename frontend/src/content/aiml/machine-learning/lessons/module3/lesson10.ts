const lesson10 = {

  id: "lesson10",

  title: "PCA for Feature Compression",

  content: `

Lesson 10

PCA for Feature Compression


1. Introduction to Feature Compression


Machine learning datasets can contain hundreds, thousands, or even millions of numerical features.


For example:


An image dataset may contain thousands of pixel values.


A text dataset may contain thousands of numerical word features.


A sensor dataset may contain measurements from many sensors.


Working with all these dimensions can increase:


Memory usage


Computation


Training time


Storage requirements.


Feature compression attempts to represent the important information using fewer dimensions.


PCA is one technique that can perform this type of dimensionality reduction.



2. What Does Compression Mean?


Suppose an original dataset contains:


100 features.


After PCA, we keep:


20 components.


The new representation has only:


20 dimensions.


Therefore:


100 dimensions


→


20 dimensions.


The new representation is smaller than the original representation.



3. Compression vs Feature Selection


These concepts are different.


Feature Selection:


Choose some original features.


Example:


100 features


→


20 original features.


PCA Compression:


Create new features from combinations of the original features.


Example:


100 features


→


20 principal components.


The principal components are not simply twenty original columns.



4. Why Compress Features?


Feature compression can be useful when:


The dataset is high-dimensional.


Many features contain redundant information.


Visualization is required.


Storage needs to be reduced.


Training computation needs to be reduced.


A compact representation is useful for downstream algorithms.



5. Example


Suppose a dataset contains:


1000 numerical features.


Some features are highly correlated.


PCA may discover directions that capture much of the variation using fewer components.


For example:


1000 features


→


100 components.


The model can then work with the compressed representation.



6. Information Loss


Compression usually involves a trade-off.


Fewer components:


Smaller representation


More information loss.


More components:


Larger representation


Less information loss.


Therefore, the goal is not simply:


Use as few components as possible.


Instead:


Use a sufficiently small representation while retaining useful information.



7. Explained Variance


PCA provides:


explained_variance_ratio_.


This tells us the proportion of variance represented by each component.


Suppose:


PC1 = 40%


PC2 = 25%


PC3 = 15%


PC4 = 10%.


Then the first four components explain:


40 + 25 + 15 + 10


=


90%.


Therefore, four components retain approximately 90% of the variance.



8. Cumulative Explained Variance


The cumulative explained variance is:


PC1


+


PC2


+


PC3


+ ...


This helps determine how many components are required to retain a desired amount of variance.



9. Python Example


Python


from sklearn.datasets import load_digits


digits = load_digits()


X = digits.data


print(
    "Original shape:",
    X.shape
)


The digits dataset contains 64 features per observation.



10. Standardize the Data


Python


from sklearn.preprocessing import StandardScaler


scaler = StandardScaler()


X_scaled = scaler.fit_transform(
    X
)


Scaling is commonly useful before PCA when features have different scales.



11. Fit Full PCA


Python


from sklearn.decomposition import PCA


pca = PCA()


pca.fit(
    X_scaled
)


print(
    len(
        pca.explained_variance_ratio_
    )
)


The full PCA model computes the available principal components.



12. Cumulative Variance


Python


import numpy as np


cumulative_variance = np.cumsum(
    pca.explained_variance_ratio_
)


print(
    cumulative_variance
)



13. Plot Explained Variance


Python


import matplotlib.pyplot as plt


plt.plot(
    range(
        1,
        len(cumulative_variance) + 1
    ),
    cumulative_variance,
    marker="o"
)


plt.xlabel(
    "Number of Components"
)


plt.ylabel(
    "Cumulative Explained Variance"
)


plt.title(
    "PCA Compression Curve"
)


plt.grid()


plt.show()



14. Choosing a Compression Level


Suppose the curve shows:


20 components


retain approximately:


80%.


Then:


64 features


→


20 components.


This provides a significantly smaller representation.


Whether 80% is sufficient depends on the application.



15. 90 Percent Variance


Python


pca_90 = PCA(
    n_components=0.90
)


X_90 = pca_90.fit_transform(
    X_scaled
)


print(
    "Original shape:",
    X_scaled.shape
)


print(
    "Compressed shape:",
    X_90.shape
)



16. 95 Percent Variance


Python


pca_95 = PCA(
    n_components=0.95
)


X_95 = pca_95.fit_transform(
    X_scaled
)


print(
    "Compressed shape:",
    X_95.shape
)



17. 99 Percent Variance


Python


pca_99 = PCA(
    n_components=0.99
)


X_99 = pca_99.fit_transform(
    X_scaled
)


print(
    "Compressed shape:",
    X_99.shape
)



18. Comparing Compression Levels


We can compare:


80% variance


90% variance


95% variance


99% variance.


Higher variance retention usually requires more components.



19. Compression Ratio


A simple way to describe dimensionality reduction is:


Compression Ratio


=


Original Dimensions


/


Compressed Dimensions.


Suppose:


64 original dimensions.


16 compressed dimensions.


Then:


64 / 16


=


4.


The compressed representation has one quarter as many dimensions.



20. Python Compression Ratio


Python


original_dimensions = X_scaled.shape[1]


compressed_dimensions = X_90.shape[1]


ratio = (
    original_dimensions
    /
    compressed_dimensions
)


print(
    "Compression ratio:",
    ratio
)



21. Why Redundant Features Can Be Compressed


Suppose:


Feature A


and:


Feature B


contain almost the same information.


Keeping both may provide limited additional information.


PCA can represent their shared variation using fewer directions.



22. Correlation and Compression


Highly correlated features often indicate redundancy.


For example:


Temperature Celsius


and:


Temperature Fahrenheit.


They contain the same underlying measurement using different scales.


A dimensionality reduction method can exploit relationships between variables.



23. PCA Reconstruction


After compression, PCA can approximately reconstruct the original representation.


Python


pca = PCA(
    n_components=20
)


X_compressed = pca.fit_transform(
    X_scaled
)


X_reconstructed = pca.inverse_transform(
    X_compressed
)


print(
    "Compressed shape:",
    X_compressed.shape
)


print(
    "Reconstructed shape:",
    X_reconstructed.shape
)



24. Reconstruction Error


Information lost during compression can be measured using reconstruction error.


A common educational measure is:


Mean Squared Reconstruction Error.


Mathematically:


MSE


=


(1 / N)


Σ


(xᵢ - x̂ᵢ)².


Here:


xᵢ


is the original value.


x̂ᵢ


is the reconstructed value.



25. Python Reconstruction Error


Python


import numpy as np


error = np.mean(
    (
        X_scaled
        -
        X_reconstructed
    ) ** 2
)


print(
    "Reconstruction error:",
    error
)



26. More Components


If we increase the number of components:


10


→


20


→


30,


the reconstruction error will generally decrease or remain the same when using standard PCA reconstruction.


This happens because more information is retained.



27. Reconstruction Experiment


Python


component_values = [
    5,
    10,
    20,
    30,
    40
]


for n in component_values:

    pca = PCA(
        n_components=n
    )

    X_compressed = pca.fit_transform(
        X_scaled
    )

    X_reconstructed = pca.inverse_transform(
        X_compressed
    )

    error = np.mean(
        (
            X_scaled
            -
            X_reconstructed
        ) ** 2
    )

    print(
        "Components:",
        n,
        "Error:",
        error
    )



28. Compression vs Reconstruction


The relationship is:


More Compression


→


Fewer Components


→


More Information Loss.


Less Compression


→


More Components


→


Better Reconstruction.



29. Choosing Components


Possible strategies include:


Variance Threshold


Reconstruction Error


Downstream Model Performance


Visualization.


There is no universal component count.



30. Compression for Machine Learning


Suppose:


Original dataset:


1000 features.


Compressed dataset:


100 features.


A model can be trained using:


X_compressed.


Potential benefits include:


Faster training


Lower memory use


Simpler feature representation.



31. Important Warning


Compression does not guarantee better prediction.


PCA preserves variance.


It does not directly optimize predictive accuracy.


A low-variance feature can sometimes contain important predictive information.



32. Example


Suppose a dataset has:


Feature A:


Very high variance.


Feature B:


Low variance.


Feature B may strongly predict the target.


PCA could prioritize directions dominated by Feature A.


Therefore, evaluate compressed representations using the downstream task.



33. PCA Before Classification


A possible workflow is:


Training Data


↓

Scaling


↓

PCA


↓

Classifier.


For example:


StandardScaler


→


PCA


→


LogisticRegression.



34. Python Pipeline


Python


from sklearn.pipeline import make_pipeline


from sklearn.linear_model import LogisticRegression


pipeline = make_pipeline(

    StandardScaler(),

    PCA(
        n_components=0.95
    ),

    LogisticRegression(
        max_iter=2000
    )

)


pipeline.fit(
    X_train,
    y_train
)


print(
    pipeline.score(
        X_test,
        y_test
    )
)



35. Why Use a Pipeline?


A pipeline ensures that transformations are learned correctly from the training data.


This is particularly important when evaluating models using:


Train/Test Split


Cross-Validation.



36. Data Leakage


A common mistake is:


Fit PCA using the complete dataset.


Then split into training and testing data.


This can allow information from the test set to influence the transformation.


Instead:


Split the data first.


Then fit PCA only on training data.



37. Correct Workflow


Dataset


↓

Train/Test Split


↓

Fit Scaler on Training Data


↓

Transform Training Data


↓

Fit PCA on Training Data


↓

Transform Training and Test Data


↓

Train Model.


A pipeline automates this process.



38. PCA for Image Compression


Images often contain many pixel values.


For a grayscale image:


64 × 64


means:


4096 pixels.


If many images are stored, the total number of values can become very large.


PCA can create a lower-dimensional representation.



39. Image Compression Idea


Original:


4096 dimensions.


PCA:


100 components.


Compressed:


100 dimensions.


The reconstructed image may retain the major visual structure while losing some fine details.



40. Reconstruction Trade-Off


With:


20 components:


More compression.


More information loss.


With:


100 components:


Less compression.


Better reconstruction.


The desired balance depends on the application.



41. Example: Digits


The digits dataset contains small handwritten digit images.


We can compare reconstructed samples using different numbers of components.


Python


pca = PCA(
    n_components=10
)


X_small = pca.fit_transform(
    X_scaled
)


X_reconstructed = pca.inverse_transform(
    X_small
)



42. Visualizing a Reconstructed Sample


Python


plt.imshow(
    X_reconstructed[0].reshape(
        8,
        8
    ),
    cmap="gray"
)


plt.title(
    "Reconstructed Digit"
)


plt.axis(
    "off"
)


plt.show()



43. Comparing Original and Reconstructed Data


Python


plt.imshow(
    X_scaled[0].reshape(
        8,
        8
    ),
    cmap="gray"
)


plt.title(
    "Original Representation"
)


plt.axis(
    "off"
)


plt.show()


Then display the reconstructed representation separately.


The difference demonstrates information lost during compression.



44. Compression Does Not Mean ZIP Compression


PCA compression is different from file compression formats such as:


ZIP


GZIP.


PCA changes the mathematical representation of the data.


It is a form of dimensionality reduction rather than a general-purpose file compression algorithm.



45. Sparse Data Consideration


Some datasets are sparse.


For example:


Bag-of-Words


TF-IDF.


Applying ordinary PCA directly to very large sparse matrices may be inefficient.


Methods such as:


TruncatedSVD


are commonly used for sparse high-dimensional representations.



46. PCA and Storage


If a dataset contains:


1 million observations


and:


500 features,


storing all values can require substantial memory.


A lower-dimensional representation may reduce the number of stored feature values.


However, storage savings also depend on the data type and additional information required to perform reconstruction.



47. Compression and Speed


Reducing dimensionality can reduce the amount of computation performed by some downstream algorithms.


This can be especially useful for:


Distance-based methods


Visualization


Some iterative algorithms.



48. Experiment


Use the digits dataset.


Try:


5 components


10 components


20 components


30 components.


For each:


Calculate explained variance.


Calculate reconstruction error.


Compare reconstructed images.



49. Experiment Table


Create a table with:


Components


Explained Variance


Reconstruction Error


Compression Ratio.


Use the table to understand the trade-off between compactness and information retention.



50. Common Mistakes


Mistake 1:


Assuming more compression is always better.


Mistake 2:


Ignoring reconstruction error.


Mistake 3:


Assuming explained variance directly equals prediction accuracy.


Mistake 4:


Fitting PCA before train/test splitting.


Mistake 5:


Ignoring feature scaling.


Mistake 6:


Using PCA without checking whether interpretability is important.


Mistake 7:


Assuming PCA is the same as file compression.



51. Practice


1. What is feature compression?


2. How is PCA different from feature selection?


3. What is explained variance?


4. What is reconstruction error?


5. Why does reconstruction improve when more components are retained?


6. What is compression ratio?


7. Why can PCA reduce computation?


8. Why should PCA be fitted only on training data in supervised workflows?


9. Why may PCA reduce prediction performance?



52. Quick Check


Question 1


What happens when fewer PCA components are retained?


Answer


The representation becomes smaller, but more information may be lost.


Question 2


What does explained variance measure?


Answer


The proportion of variance represented by the retained components.


Question 3


What generally happens to reconstruction error when more components are retained?


Answer


It generally decreases or remains the same.


Question 4


Does PCA directly optimize classification accuracy?


Answer


No.


Question 5


Is PCA the same as ZIP compression?


Answer


No.



53. Summary


PCA can compress high-dimensional feature representations.


It creates new features called principal components.


Fewer components produce stronger compression.


More components usually preserve more information.


Explained variance helps measure retained variation.


Reconstruction error helps measure information loss.


PCA can reduce the dimensionality used by downstream models.


PCA should be fitted correctly inside supervised learning workflows to prevent data leakage.


PCA compression is different from general-purpose file compression.



54. Extended Study


Let the original centered representation be:


X.


PCA produces:


Z = XW.


If only the first k components are retained:


Zₖ = XWₖ.


The approximate reconstruction is:


X̂ = ZₖWₖᵀ.


As k increases, the approximation generally becomes closer to the original centered representation.


Therefore, PCA provides a controllable trade-off between:


Dimensionality


and:


Reconstruction quality.



55. Reflection


Before using PCA for compression, ask:


How many original dimensions exist?


How much variance should be retained?


How much reconstruction error is acceptable?


Does the downstream model improve?


Is feature interpretability important?


Could low-variance predictive information be lost?


Is the data sparse?


Should another dimensionality reduction technique be considered?


How much memory and computation can actually be saved?

`

};

export default lesson10;