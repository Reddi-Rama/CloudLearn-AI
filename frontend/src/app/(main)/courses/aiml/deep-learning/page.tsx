import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  BookOpen,
  Camera,
  Layers3,
  Network,
  Sparkles,
  Zap,
} from "lucide-react";

const modules = [
  {
    id: "module1",
    number: "01",
    title: "Deep Learning Foundations",
    description:
      "Build the mathematical, computational, and conceptual foundations required to understand modern deep learning.",
    lessons: 8,
    icon: BrainCircuit,
  },
  {
    id: "module2",
    number: "02",
    title: "Neural Networks and Learning",
    description:
      "Understand neural networks, multilayer perceptrons, activation functions, backpropagation, initialization, and generalization.",
    lessons: 16,
    icon: Network,
  },
  {
    id: "module3",
    number: "03",
    title: "Convolutional Neural Networks",
    description:
      "Learn convolution, padding, stride, pooling, channels, and the evolution of major CNN architectures.",
    lessons: 15,
    icon: Layers3,
  },
  {
    id: "module4",
    number: "04",
    title: "Sequence Models and Transformers",
    description:
      "Explore RNNs, GRUs, LSTMs, attention, self-attention, positional encoding, and Transformer architectures.",
    lessons: 22,
    icon: Network,
  },
  {
    id: "module5",
    number: "05",
    title: "Advanced Deep Learning and Training",
    description:
      "Study optimization, learning-rate scheduling, computation, parallelism, GPUs, and advanced training techniques.",
    lessons: 19,
    icon: Zap,
  },
  {
    id: "module6",
    number: "06",
    title: "Advanced Computer Vision",
    description:
      "Work with image augmentation, fine-tuning, object detection, segmentation, style transfer, and vision applications.",
    lessons: 20,
    icon: Camera,
  },
];

export default function DeepLearningCoursePage() {
  const totalLessons = modules.reduce(
    (total, module) => total + module.lessons,
    0
  );

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <div className="mx-auto max-w-[1500px] px-5 py-10 sm:px-8 lg:px-10">

        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-7 shadow-2xl sm:p-10 lg:p-12">
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative max-w-4xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800">
                <BrainCircuit className="h-6 w-6 text-violet-300" />
              </div>

              <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-300">
                Course 3
              </span>
            </div>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Deep Learning
              <span className="block text-violet-300">
                & Computer Vision
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              A complete learning path covering the foundations of deep
              learning, neural networks, convolutional networks, sequence
              models, Transformers, advanced training, and modern computer
              vision.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-300">
                <BookOpen className="h-4 w-4 text-cyan-300" />
                6 Modules
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-300">
                <Sparkles className="h-4 w-4 text-violet-300" />
                {totalLessons} Lessons
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-300">
                <Camera className="h-4 w-4 text-emerald-300" />
                Computer Vision
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/lesson/aiml/deep-learning/module1/lesson1"
                className="inline-flex items-center gap-2 rounded-xl bg-violet-500 px-5 py-3 font-semibold text-white transition hover:bg-violet-400"
              >
                Start Learning
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Modules */}
        <section className="mt-8">
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Course Modules
            </h2>

            <p className="mt-2 text-slate-400">
              Choose a module to explore its lessons.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {modules.map((module) => {
              const Icon = module.icon;

              return (
                <Link
                  key={module.id}
                  href={`/lesson/aiml/deep-learning/${module.id}/lesson1`}
                  className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl transition duration-200 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800">
                      <Icon className="h-6 w-6 text-violet-300" />
                    </div>

                    <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-400">
                      {module.lessons} Lessons
                    </span>
                  </div>

                  <div className="mt-6">
                    <p className="text-xs font-bold tracking-[0.2em] text-violet-400">
                      MODULE {module.number}
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-white">
                      {module.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {module.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-violet-300 transition group-hover:text-violet-200">
                    View Module
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

      </div>
    </main>
  );
}