import { useEffect, useState } from "react";
import { X, Image, MapPin, Music } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AudioPlayer } from "@/components/music/audio-player";
import { currentUser, generatePeaks, type Track } from "@/lib/home-mocks";
import { usePublish } from "./publish-context";

type AttachmentMode = "none" | "images" | "audio";

const draftTrack: Track = {
  id: "t-draft",
  title: "Meu Novo Som",
  artist: currentUser.name,
  album: "Rascunhos",
  cover: "https://picsum.photos/seed/draft-cover/240/240",
  duration: "3:30",
  peaks: generatePeaks("draft", 64),
};

const mockImages = [
  "https://picsum.photos/seed/pub-1/400/400",
  "https://picsum.photos/seed/pub-2/400/400",
  "https://picsum.photos/seed/pub-3/400/400",
  "https://picsum.photos/seed/pub-4/400/400",
  "https://picsum.photos/seed/pub-5/400/400",
];

export function PublishModal() {
  const { open, closeModal } = usePublish();
  const [content, setContent] = useState("");
  const [attachment, setAttachment] = useState<AttachmentMode>("none");

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeModal();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, closeModal]);

  useEffect(() => {
    if (!open) {
      setContent("");
      setAttachment("none");
    }
  }, [open]);

  function toggleAttachment(mode: AttachmentMode) {
    setAttachment((prev) => (prev === mode ? "none" : mode));
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60" onClick={closeModal} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div
          className="flex w-full max-w-lg flex-col rounded-2xl border border-border bg-background shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Row 1: Rascunhos + Fechar */}
          <div className="flex items-center justify-between px-5 pt-5">
            <button
              type="button"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Rascunhos
            </button>
            <button
              type="button"
              aria-label="Fechar"
              onClick={closeModal}
              className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Header Row 2: Avatar + Nome + Privacidade */}
          <div className="flex items-center gap-3 px-5 pt-4">
            <Avatar
              name={currentUser.name}
              src={currentUser.avatar}
              size={36}
            />
            <span className="text-sm font-semibold">{currentUser.name}</span>
            <span className="rounded-md bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-foreground/80">
              Todos
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4 px-5 pt-5 pb-4">
            <textarea
              placeholder="No que você está pensando?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              className="min-h-[100px] w-full resize-none bg-transparent text-sm leading-relaxed text-foreground outline-none placeholder:text-muted-foreground"
            />

            {/* Image attachment grid */}
            {attachment === "images" && (
              <div className="grid grid-cols-3 gap-2 rounded-lg border border-border p-2">
                {mockImages.map((src, i) => (
                  <div
                    key={i}
                    className="group relative aspect-square cursor-pointer overflow-hidden rounded-md"
                  >
                    <img
                      src={src}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Audio attachment player */}
            {attachment === "audio" && (
              <div className="rounded-lg border border-border p-3">
                <AudioPlayer track={draftTrack} variant="default" />
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-border px-5 py-3">
            <div className="flex items-center gap-1">
              <button
                type="button"
                aria-label="Adicionar imagens"
                onClick={() => toggleAttachment("images")}
                className={`rounded-lg p-2 transition-colors ${
                  attachment === "images"
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <Image className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Adicionar localização"
                className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <MapPin className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Adicionar áudio"
                onClick={() => toggleAttachment("audio")}
                className={`rounded-lg p-2 transition-colors ${
                  attachment === "audio"
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <Music className="h-5 w-5" />
              </button>
            </div>
            <Button className="rounded-lg px-6 font-bold">
              Publicar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
