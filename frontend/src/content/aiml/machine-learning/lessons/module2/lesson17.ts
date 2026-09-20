const lesson17 = {

  id: "lesson17",

  title: "Neural Networks for Supervised Learning",

  content: `

Lesson 17

Neural Networks for Supervised Learning


Neural networks are supervised learning models that can learn complex relationships between input features and target outputs.

They are inspired by the idea of interconnected processing units.

A neural network can be used for:

Classification

Regression

Image recognition

Text classification

Speech processing

Pattern recognition

Many modern deep learning systems are based on neural networks.


1. What Is a Neural Network?


A neural network consists of interconnected computational units called:

Neurons.


A simple neural network contains:

Input Layer

Hidden Layer

Output Layer


The general structure is:


Input Data

↓

Input Layer

↓

Hidden Layer

↓

Output Layer

↓

Prediction



2. Input Layer


The input layer receives the features of a sample.


Suppose a dataset contains:

Age

Income

Experience

Credit Score


The input layer receives these values as numerical inputs.


For four features:


x₁

x₂

x₃

x₄


These values are passed to the next layer.



3. Neurons


A neuron receives inputs and computes a weighted combination.


A simplified equation is:


z = w₁x₁ + w₂x₂ + ... + wₙxₙ + b


where:


x = Input


w = Weight


b = Bias


z = Weighted sum



4. Weights


Weights determine how strongly individual features influence a neuron.


Suppose:


Income


has a large positive weight.


The neuron gives more importance to income when calculating its activation.


During training, the model learns appropriate weight values.



5. Bias


The bias allows the neuron to shift its activation independently of the input values.


The equation becomes:


z = wᵀx + b.


Bias increases the flexibility of the model.



6. Activation Functions


After calculating the weighted sum, a neuron applies an activation function.


Conceptually:


z


↓


Activation Function


↓


Activation Output


Activation functions introduce nonlinear behaviour.



7. ReLU


A common activation function is:

ReLU


ReLU(z) = max(0,z)


Therefore:


If z > 0


ReLU(z) = z


If z ≤ 0


ReLU(z) = 0.



8. Why Nonlinearity Matters


Suppose every layer only performed a linear transformation.


Combining multiple linear transformations would still produce an overall linear transformation.


Nonlinear activation functions allow neural networks to learn more complex relationships.



9. Sigmoid Activation


The sigmoid function is:


σ(z) = 1 / (1 + e⁻ᶻ)


Its output lies between:


0 and 1.


It can therefore be useful for binary classification output probabilities.



10. Hidden Layers


A hidden layer receives information from the previous layer and transforms it.


For example:


Input Features


↓


Hidden Layer 1


↓


Hidden Layer 2


↓


Output Layer.


More hidden layers allow the network to learn hierarchical representations.



11. Output Layer


The output layer depends on the task.


For binary classification:


One output unit with a suitable activation can represent the probability of one class.


For multiclass classification:


Multiple output units can represent different classes.


For regression:


The output is usually a numerical value.



12. Binary Classification


Suppose we want to classify:


Spam


or:


Not Spam.


The network can produce a value such as:


0.91


which can be interpreted as a high estimated probability for the positive class when the model is configured appropriately.



13. Multiclass Classification


Suppose there are three classes:


Cat

Dog

Bird


The output layer can contain three units.


A softmax activation can convert output scores into a probability distribution.


For example:


Cat = 0.10


Dog = 0.75


Bird = 0.15


The predicted class is:

Dog.



14. Softmax


For class i, softmax is:


P(y=i) = eᶻⁱ / Σeᶻʲ


The probabilities sum to:


1.



15. Regression


Neural networks can also predict continuous numerical values.


Example:


House Price Prediction.


Input:


Area

Bedrooms

Age

Location Features


Output:


Predicted Price.



16. Neural Network Training


Training involves repeatedly performing:


Forward Pass

↓

Calculate Loss

↓

Backward Pass

↓

Update Weights

↓

Repeat



17. Forward Pass


During the forward pass:


Input


↓

Weighted Sum


↓

Activation


↓

Next Layer


↓

Output.


The network produces a prediction.



18. Loss Function


The prediction is compared with the target.


The difference is represented using a loss function.


For regression, one possible loss is:


Mean Squared Error.


MSE = (1/n) Σ(yᵢ - ŷᵢ)².



19. Classification Loss


For classification, a common loss is:


Cross-Entropy Loss.


For a binary classification problem:


L = -[y log(p) + (1-y)log(1-p)].


The loss becomes larger when the model assigns low probability to the correct class.



20. Backpropagation


Backpropagation calculates how changes in model parameters affect the loss.


The gradients are propagated backward through the network.


Conceptually:


Output Error


↓

Output Layer Gradient


↓

Hidden Layer Gradient


↓

Earlier Layer Gradients.



21. Gradient Descent


Weights can be updated using:


w_new = w_old - η ∂L/∂w


where:


η = Learning Rate


L = Loss.


The gradient indicates the direction in which the loss increases.


Subtracting the gradient moves the parameters toward lower loss.



22. Learning Rate


The learning rate controls the size of parameter updates.


Small learning rate:


Small updates.


Large learning rate:


Large updates.


An excessively large learning rate can make optimization unstable.



23. Epoch


An epoch means one complete pass through the training dataset.


For example:


Epoch 1


Epoch 2


Epoch 3


...


During training, the network may require many epochs.



24. Batch Size


Instead of processing the entire dataset at once, training can use smaller groups called:


Batches.


For example:


Dataset = 10,000 samples


Batch size = 100


The model processes 100 samples at a time.



25. Stochastic Gradient Descent


If the batch contains one observation:


Batch size = 1


the update is based on an individual observation.


More generally, mini-batch training is commonly used in neural network training.



26. Python Example: Neural Network Classification


Python


from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neural_network import MLPClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import make_pipeline


iris = load_iris()


X = iris.data
y = iris.target


X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.25,
    random_state=42,
    stratify=y
)


model = make_pipeline(
    StandardScaler(),
    MLPClassifier(
        hidden_layer_sizes=(50,),
        max_iter=1000,
        random_state=42
    )
)


model.fit(
    X_train,
    y_train
)


accuracy = model.score(
    X_test,
    y_test
)


print("Test accuracy:", accuracy)


Output


Test accuracy:


A value determined by the dataset split and neural network configuration.



27. Hidden Layer Size


The parameter:


hidden_layer_sizes


controls the hidden layers.


For example:


hidden_layer_sizes=(50,)


means:


One hidden layer


with:


50 neurons.



28. Multiple Hidden Layers


Python


MLPClassifier(
    hidden_layer_sizes=(64, 32),
    max_iter=1000,
    random_state=42
)


This creates:


Input


↓

64 neurons


↓

32 neurons


↓

Output.



29. Activation Functions in scikit-learn


MLPClassifier supports activation functions such as:


relu


tanh


logistic.


ReLU is commonly used in hidden layers because it is computationally simple and introduces useful nonlinearity.



30. Neural Network Regression


Python


from sklearn.neural_network import MLPRegressor


model = make_pipeline(
    StandardScaler(),
    MLPRegressor(
        hidden_layer_sizes=(50,),
        max_iter=1000,
        random_state=42
    )
)


model.fit(
    X_train,
    y_train
)


predictions = model.predict(
    X_test
)


print(
    predictions[:10]
)


Output


The output contains predicted numerical values.



31. Why Scaling Matters


Neural networks are generally sensitive to feature scale.


Suppose one feature ranges:


0 to 1.


Another ranges:


0 to 1,000,000.


Optimization can become difficult when features have dramatically different scales.


Standardization is commonly used.



32. Overfitting


A neural network can memorize training patterns instead of learning general relationships.


This produces:


High Training Performance


but:


Lower Validation/Test Performance.


This is overfitting.



33. Regularization


Regularization methods can reduce overfitting.


Examples include:


L2 Regularization


Dropout


Early Stopping


Data Augmentation in appropriate applications.



34. Early Stopping


Training can stop when validation performance stops improving.


This prevents unnecessary additional training.



35. Neural Networks and Feature Engineering


Neural networks can learn useful representations automatically.


However, data quality remains extremely important.


Poor inputs can still produce poor predictions.



36. Classification Metrics


Neural networks can be evaluated using:


Accuracy

Precision

Recall

F1 Score

ROC-AUC

Confusion Matrix.


The metric should match the application.



37. Neural Networks vs Traditional Models


Traditional models include:


Linear Regression

Logistic Regression

Decision Trees

Random Forests

SVMs.


Neural networks can represent highly nonlinear relationships and can scale to complex tasks.


However, traditional models can be easier to interpret and may perform extremely well on smaller structured datasets.



38. Neural Networks and Data Size


Neural networks often benefit from larger datasets.


With very small datasets, simpler models may sometimes be more appropriate.


Model selection should depend on:


Dataset Size

Feature Representation

Task Complexity

Computational Resources.



39. Experiment: Hidden Layer Size


Try:


hidden_layer_sizes=(10,)


(50,)


(100,)


Compare:


Training Accuracy


Validation Accuracy.


Observe the effect of model capacity.



40. Experiment: Number of Layers


Compare:


One hidden layer


Two hidden layers


Three hidden layers.


Measure performance and training behaviour.



41. Experiment: Learning Rate


Try different learning rates when supported.


Compare:


Small learning rate


Medium learning rate


Large learning rate.


Observe convergence behaviour.



42. Common Mistakes


Mistake 1:


Not scaling numerical features.


Mistake 2:


Using too many neurons without validation.


Mistake 3:


Training for too many epochs without monitoring validation performance.


Mistake 4:


Using an inappropriate loss function.


Mistake 5:


Ignoring class imbalance.


Mistake 6:


Assuming a neural network is always better than simpler models.



43. Practice


1. What is a neural network?


2. What is a neuron?


3. What is a weight?


4. What is a bias?


5. Why are activation functions needed?


6. What is ReLU?


7. What is forward propagation?


8. What is backpropagation?


9. What is gradient descent?


10. What is an epoch?


11. What is batch size?


12. Why is feature scaling important?



44. Quick Check


Question 1


What does a neuron compute?


Answer


A weighted combination of inputs plus a bias followed by an activation function.


Question 2


Why are nonlinear activation functions important?


Answer


They allow neural networks to learn nonlinear relationships.


Question 3


What is backpropagation?


Answer


A method for computing gradients of the loss with respect to network parameters by propagating error information backward through the network.


Question 4


What is an epoch?


Answer


One complete pass through the training dataset.


Question 5


Can neural networks perform regression?


Answer


Yes.



45. Summary


A neural network contains interconnected computational units.


Weights determine how inputs contribute to neurons.


Biases shift neuron activations.


Activation functions introduce nonlinearity.


Hidden layers learn intermediate representations.


Forward propagation generates predictions.


Loss functions measure prediction error.


Backpropagation computes gradients.


Gradient descent updates parameters.


Epochs represent passes through the training dataset.


Batch size determines how many samples are processed per update.


Neural networks can perform classification and regression.



46. Extended Study


For a neuron:


z = wᵀx + b.


The activation is:


a = f(z).


For a multilayer network:


a¹ = f(W¹x + b¹)


a² = f(W²a¹ + b²)


and so on.


The final layer produces the prediction.


During training, the loss:


L


is differentiated with respect to the model parameters.


The chain rule allows gradients to be propagated backward through the network.



47. Reflection


Consider a supervised learning problem.


Ask:


How many features are available?


How much training data exists?


Is the relationship nonlinear?


Would a neural network provide enough benefit to justify its complexity?


How should the features be scaled?


Which architecture is appropriate?


Which loss function matches the task?


How will overfitting be controlled?


How will the final model be evaluated?

`

};

export default lesson17;