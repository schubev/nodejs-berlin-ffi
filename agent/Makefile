CFLAGS+=-I/usr/include/glib-2.0
CFLAGS+=-I/usr/lib64/glib-2.0/include
CFLAGS+=-I/usr/include/gdk-pixbuf-2.0
LDFLAGS+=-lnotify

agent: agent.o
	$(CC) $(LDFLAGS) -o agent agent.o
