'use client';

import { cn } from '@/lib/utils';
import type { Project } from '@/types/profile';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Code,
  ExternalLink,
  Folder,
  Github,
  Pencil,
  Star,
} from 'lucide-react';
import { useState } from 'react';
import { ProfileSection, SectionAddButton, SectionEmptyState } from './ProfileSection';
import { ProjectDetailModal } from './ProjectDetailModal';

interface ProjectsGridProps {
  projects: Project[];
  isOwner: boolean;
  onAddProject?: () => void;
  onEditProject?: (project: Project) => void;
}

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

/**
 * Vertical-tabs showcase (adapted from the 21st.dev "Vertical Tabs" component):
 * project list on the left, the active project's pictures on the right.
 */
export function ProjectsGrid({
  projects,
  isOwner,
  onAddProject,
  onEditProject,
}: ProjectsGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Featured projects first.
  const ordered = [...projects.filter((p) => p.featured), ...projects.filter((p) => !p.featured)];

  if (projects.length === 0 && !isOwner) return null;

  const safeIndex = Math.min(activeIndex, Math.max(ordered.length - 1, 0));
  const active = ordered[safeIndex];
  const images = active?.images ?? [];
  const image = images.length > 0 ? images[imageIndex % images.length] : null;

  const goTo = (index: number) => {
    if (index === safeIndex) return;
    setDirection(index > safeIndex ? 1 : -1);
    setActiveIndex(index);
    setImageIndex(0);
  };
  const step = (delta: number) => goTo((safeIndex + delta + ordered.length) % ordered.length);

  const variants = {
    enter: (dir: number) => ({ y: dir > 0 ? '-100%' : '100%', opacity: 0 }),
    center: { zIndex: 1, y: 0, opacity: 1 },
    exit: (dir: number) => ({ zIndex: 0, y: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  };

  return (
    <>
      <ProfileSection
        icon={<Code className="h-5 w-5" />}
        title="Projects & Work"
        count={projects.length}
        action={
          isOwner && onAddProject ? (
            <SectionAddButton onClick={onAddProject} label="Add Project" />
          ) : undefined
        }
      >
        {ordered.length === 0 || !active ? (
          <SectionEmptyState
            icon={<Folder className="h-5 w-5" />}
            message="No projects showcased yet."
            actionLabel={isOwner && onAddProject ? 'Add Your First Project' : undefined}
            onAction={isOwner && onAddProject ? onAddProject : undefined}
          />
        ) : (
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
            {/* Pictures */}
            <div className="order-1 lg:order-2 lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 dark:border-white/10 dark:bg-white/5 lg:aspect-[16/11]">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div
                    key={`${active.id}-${imageIndex}`}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      y: { type: 'spring', stiffness: 260, damping: 32 },
                      opacity: { duration: 0.35 },
                    }}
                    className="absolute inset-0 cursor-pointer"
                    onClick={() => setSelectedProject(active)}
                  >
                    {image ? (
                      <img
                        src={image}
                        alt={active.name}
                        className="block h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-neutral-100 to-neutral-200 text-neutral-400 dark:from-white/5 dark:to-white/[0.02] dark:text-neutral-500">
                        <Folder className="h-10 w-10" />
                        <span className="text-sm font-medium">{active.name}</span>
                      </div>
                    )}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {active.featured && (
                  <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-amber-600 shadow-sm backdrop-blur-sm dark:bg-neutral-900/80 dark:text-amber-400">
                    <Star className="h-3 w-3 fill-current" />
                    Featured
                  </span>
                )}

                {images.length > 1 && (
                  <div className="absolute bottom-4 left-4 z-20 flex gap-1.5">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setImageIndex(i);
                        }}
                        aria-label={`Show picture ${i + 1}`}
                        className={cn(
                          'h-1.5 rounded-full transition-all',
                          i === imageIndex % images.length
                            ? 'w-6 bg-white'
                            : 'w-1.5 bg-white/50 hover:bg-white/80'
                        )}
                      />
                    ))}
                  </div>
                )}

                {ordered.length > 1 && (
                  <div className="absolute bottom-3 right-3 z-20 flex gap-2">
                    {[
                      { label: 'Previous project', delta: -1, Icon: ArrowLeft },
                      { label: 'Next project', delta: 1, Icon: ArrowRight },
                    ].map(({ label, delta, Icon }) => (
                      <button
                        key={label}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          step(delta);
                        }}
                        aria-label={label}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-transform hover:bg-black/60 active:scale-90"
                      >
                        <Icon className="h-4 w-4" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Vertical tabs */}
            <div role="tablist" aria-label="Projects" className="order-2 min-w-0 lg:order-1 lg:col-span-5">
              {ordered.map((project, index) => {
                const isActive = index === safeIndex;
                return (
                  <div
                    key={project.id}
                    className="relative border-t border-neutral-200 first:border-0 dark:border-white/10"
                  >
                    <div className="absolute bottom-0 left-0 top-0 w-0.5 bg-neutral-200 dark:bg-white/10">
                      <motion.div
                        className="absolute left-0 top-0 w-full origin-top bg-neutral-900 dark:bg-white"
                        initial={false}
                        animate={{ height: isActive ? '100%' : '0%' }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                      />
                    </div>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => goTo(index)}
                      className={cn(
                        'flex w-full items-start gap-3 py-4 pl-5 pr-1 text-left transition-colors',
                        isActive
                          ? 'text-neutral-900 dark:text-white'
                          : 'text-neutral-400 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-white'
                      )}
                    >
                      <span className="mt-1.5 text-[10px] font-medium tabular-nums opacity-60">
                        /{String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="min-w-0 flex-1 break-words text-xl font-medium tracking-tight sm:text-2xl">
                        {project.name}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-5 pl-[3.25rem] pr-1">
                            {project.role && (
                              <p className="mb-1 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                                {project.role}
                              </p>
                            )}
                            <p className="line-clamp-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                              {project.description}
                            </p>
                            {project.techStack?.length > 0 && (
                              <div className="mt-3 flex flex-wrap gap-1.5">
                                {project.techStack.slice(0, 5).map((tech) => (
                                  <span
                                    key={tech}
                                    className="rounded-md bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-600 dark:bg-white/10 dark:text-neutral-300"
                                  >
                                    {tech}
                                  </span>
                                ))}
                                {project.techStack.length > 5 && (
                                  <span className="px-1 py-1 text-[11px] font-medium text-neutral-400">
                                    +{project.techStack.length - 5}
                                  </span>
                                )}
                              </div>
                            )}
                            <div className="mt-4 flex flex-wrap items-center gap-2">
                              <span className="mr-1 text-[11px] font-medium text-neutral-400 dark:text-neutral-500">
                                {formatDate(project.startDate)}
                                {project.endDate ? ` — ${formatDate(project.endDate)}` : ' — Present'}
                              </span>
                              {project.projectUrl && (
                                <a
                                  href={project.projectUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  title="Live demo"
                                  className="rounded-full p-1.5 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-white/10 dark:hover:text-white"
                                >
                                  <ExternalLink className="h-4 w-4" />
                                </a>
                              )}
                              {project.githubUrl && (
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  title="GitHub code"
                                  className="rounded-full p-1.5 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-white/10 dark:hover:text-white"
                                >
                                  <Github className="h-4 w-4" />
                                </a>
                              )}
                              {isOwner && onEditProject && (
                                <button
                                  type="button"
                                  onClick={() => onEditProject(project)}
                                  title="Edit project"
                                  className="rounded-full p-1.5 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-white/10 dark:hover:text-white"
                                >
                                  <Pencil className="h-4 w-4" />
                                </button>
                              )}
                              <button
                                type="button"
                                onClick={() => setSelectedProject(project)}
                                className="ml-auto text-xs font-semibold text-neutral-900 underline-offset-4 hover:underline dark:text-white"
                              >
                                View details
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </ProfileSection>

      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
