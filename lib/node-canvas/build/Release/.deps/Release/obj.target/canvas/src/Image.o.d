cmd_Release/obj.target/canvas/src/Image.o := c++ '-DNODE_GYP_MODULE_NAME=canvas' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-DV8_DEPRECATION_WARNINGS' '-DV8_IMMINENT_DEPRECATION_WARNINGS' '-D_DARWIN_USE_64_BIT_INODE=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-DOPENSSL_NO_PINSHARED' '-DOPENSSL_THREADS' '-DHAVE_JPEG' '-DHAVE_GIF' '-DHAVE_RSVG' '-DBUILDING_NODE_EXTENSION' -I/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node -I/Users/marketin/Library/Caches/node-gyp/14.20.0/src -I/Users/marketin/Library/Caches/node-gyp/14.20.0/deps/openssl/config -I/Users/marketin/Library/Caches/node-gyp/14.20.0/deps/openssl/openssl/include -I/Users/marketin/Library/Caches/node-gyp/14.20.0/deps/uv/include -I/Users/marketin/Library/Caches/node-gyp/14.20.0/deps/zlib -I/Users/marketin/Library/Caches/node-gyp/14.20.0/deps/v8/include -I../node_modules/nan -I/usr/local/Cellar/cairo/1.16.0_5/include/cairo -I/usr/local/Cellar/glib/2.74.4/include -I/usr/local/Cellar/glib/2.74.4/include/glib-2.0 -I/usr/local/Cellar/glib/2.74.4/lib/glib-2.0/include -I/usr/local/opt/gettext/include -I/usr/local/Cellar/pcre2/10.42/include -I/usr/local/Cellar/pixman/0.42.2/include/pixman-1 -I/usr/local/Cellar/fontconfig/2.14.1/include -I/usr/local/opt/freetype/include/freetype2 -I/usr/local/Cellar/libpng/1.6.39/include/libpng16 -I/usr/local/Cellar/libxcb/1.15/include -I/usr/local/Cellar/libxrender/0.9.11/include -I/usr/local/Cellar/libxext/1.3.5/include -I/usr/local/Cellar/libx11/1.8.2/include -I/usr/local/Cellar/libxau/1.0.11/include -I/usr/local/Cellar/libxdmcp/1.1.4/include -I/usr/local/Cellar/xorgproto/2022.2/include -I/Library/Developer/CommandLineTools/SDKs/MacOSX11.sdk/usr/include/ffi -I/usr/local/Cellar/pango/1.50.12/include/pango-1.0 -I/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz -I/usr/local/Cellar/fribidi/1.0.12/include/fribidi -I/usr/local/Cellar/graphite2/1.3.14/include -I/usr/local/Cellar/jpeg-turbo/2.1.4/include -I/opt/homebrew/include -I/usr/local/Cellar/librsvg/2.55.1/include/librsvg-2.0 -I/usr/local/Cellar/gdk-pixbuf/2.42.10/include/gdk-pixbuf-2.0 -I/usr/local/Cellar/libtiff/4.4.0_1/include  -O3 -gdwarf-2 -mmacosx-version-min=10.13 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=gnu++1y -stdlib=libc++ -fno-rtti -fno-strict-aliasing -MMD -MF ./Release/.deps/Release/obj.target/canvas/src/Image.o.d.raw   -c -o Release/obj.target/canvas/src/Image.o ../src/Image.cc
Release/obj.target/canvas/src/Image.o: ../src/Image.cc ../src/Image.h \
  /usr/local/Cellar/cairo/1.16.0_5/include/cairo/cairo.h \
  /usr/local/Cellar/cairo/1.16.0_5/include/cairo/cairo-version.h \
  /usr/local/Cellar/cairo/1.16.0_5/include/cairo/cairo-features.h \
  /usr/local/Cellar/cairo/1.16.0_5/include/cairo/cairo-deprecated.h \
  ../src/CanvasError.h ../node_modules/nan/nan.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/node_version.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/uv.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/uv/errno.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/uv/version.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/uv/unix.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/uv/threadpool.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/uv/darwin.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/node.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/v8.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/cppgc/common.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/v8config.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/v8-internal.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/v8-version.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/v8-platform.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/node_buffer.h \
  /Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/node_object_wrap.h \
  ../node_modules/nan/nan_callbacks.h \
  ../node_modules/nan/nan_callbacks_12_inl.h \
  ../node_modules/nan/nan_maybe_43_inl.h \
  ../node_modules/nan/nan_converters.h \
  ../node_modules/nan/nan_converters_43_inl.h \
  ../node_modules/nan/nan_new.h \
  ../node_modules/nan/nan_implementation_12_inl.h \
  ../node_modules/nan/nan_persistent_12_inl.h \
  ../node_modules/nan/nan_weak.h ../node_modules/nan/nan_object_wrap.h \
  ../node_modules/nan/nan_private.h \
  ../node_modules/nan/nan_typedarray_contents.h \
  ../node_modules/nan/nan_json.h ../node_modules/nan/nan_scriptorigin.h \
  /usr/local/Cellar/jpeg-turbo/2.1.4/include/jpeglib.h \
  /usr/local/Cellar/jpeg-turbo/2.1.4/include/jconfig.h \
  /usr/local/Cellar/jpeg-turbo/2.1.4/include/jmorecfg.h \
  /usr/local/Cellar/jpeg-turbo/2.1.4/include/jerror.h \
  /usr/local/include/gif_lib.h \
  /usr/local/Cellar/librsvg/2.55.1/include/librsvg-2.0/librsvg/rsvg.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib-object.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gbinding.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/galloca.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gtypes.h \
  /usr/local/Cellar/glib/2.74.4/lib/glib-2.0/include/glibconfig.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gmacros.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gversionmacros.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/garray.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gasyncqueue.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gthread.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gatomic.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/glib-typeof.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gerror.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gquark.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gutils.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gbacktrace.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gbase64.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gbitlock.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gbookmarkfile.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gdatetime.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gtimezone.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gbytes.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gcharset.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gchecksum.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gconvert.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gdataset.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gdate.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gdir.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/genviron.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gfileutils.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/ggettext.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/ghash.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/glist.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gmem.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gnode.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/ghmac.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/ghook.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/ghostutils.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/giochannel.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gmain.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gpoll.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gslist.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gstring.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gunicode.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gkeyfile.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gmappedfile.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gmarkup.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gmessages.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gvariant.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gvarianttype.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/goption.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gpattern.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gprimes.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gqsort.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gqueue.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/grand.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/grcbox.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/grefcount.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/grefstring.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gregex.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gscanner.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gsequence.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gshell.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gslice.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gspawn.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gstrfuncs.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gstringchunk.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gstrvbuilder.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gtestutils.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gthreadpool.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gtimer.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gtrashstack.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gtree.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/guri.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/guuid.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gversion.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/deprecated/gallocator.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/deprecated/gcache.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/deprecated/gcompletion.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/deprecated/gmain.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/deprecated/grel.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/deprecated/gthread.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/glib-autocleanups.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gobject.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gtype.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gvalue.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gparam.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gclosure.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gsignal.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gmarshal.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gboxed.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/glib-types.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gbindinggroup.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/genums.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/glib-enumtypes.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gparamspecs.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gsignalgroup.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gsourceclosure.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gtypemodule.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gtypeplugin.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gvaluearray.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gvaluetypes.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gobject-autocleanups.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gio.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/giotypes.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gioenums.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gaction.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gactiongroup.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gactiongroupexporter.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gactionmap.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gappinfo.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gapplication.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gapplicationcommandline.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gasyncinitable.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/ginitable.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gasyncresult.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gbufferedinputstream.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gfilterinputstream.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/ginputstream.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gbufferedoutputstream.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gfilteroutputstream.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/goutputstream.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gbytesicon.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gcancellable.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gcharsetconverter.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gconverter.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gcontenttype.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gconverterinputstream.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gconverteroutputstream.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gcredentials.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdatagrambased.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdatainputstream.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdataoutputstream.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusactiongroup.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusaddress.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusauthobserver.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusconnection.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbuserror.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusinterface.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusinterfaceskeleton.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusintrospection.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusmenumodel.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusmessage.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusmethodinvocation.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusnameowning.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusnamewatching.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusobject.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusobjectmanager.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusobjectmanagerclient.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusobjectmanagerserver.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusobjectproxy.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusobjectskeleton.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusproxy.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusserver.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusutils.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdebugcontroller.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdebugcontrollerdbus.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdrive.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdtlsclientconnection.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdtlsconnection.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdtlsserverconnection.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gemblemedicon.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gicon.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gemblem.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gfile.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gfileattribute.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gfileenumerator.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gfileicon.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gfileinfo.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gfileinputstream.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gfileiostream.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/giostream.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gioerror.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gfilemonitor.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gfilenamecompleter.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gfileoutputstream.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/ginetaddress.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/ginetaddressmask.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/ginetsocketaddress.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsocketaddress.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gioenumtypes.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/giomodule.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gmodule.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gioscheduler.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/glistmodel.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gliststore.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gloadableicon.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gmemoryinputstream.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gmemorymonitor.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gmemoryoutputstream.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gmenu.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gmenumodel.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gmenuexporter.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gmount.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gmountoperation.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gnativesocketaddress.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gnativevolumemonitor.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gvolumemonitor.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gnetworkaddress.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gnetworkmonitor.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gnetworkservice.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gnotification.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gpermission.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gpollableinputstream.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gpollableoutputstream.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gpollableutils.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gpowerprofilemonitor.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gpropertyaction.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gproxy.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gproxyaddress.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gproxyaddressenumerator.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsocketaddressenumerator.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gproxyresolver.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gremoteactiongroup.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gresolver.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gresource.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gseekable.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsettings.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsettingsschema.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsimpleaction.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsimpleactiongroup.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsimpleasyncresult.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsimpleiostream.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsimplepermission.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsimpleproxyresolver.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsocket.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsocketclient.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsocketconnectable.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsocketconnection.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsocketcontrolmessage.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsocketlistener.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsocketservice.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsrvtarget.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsubprocess.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsubprocesslauncher.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gtask.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gtcpconnection.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gtcpwrapperconnection.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gtestdbus.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gthemedicon.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gthreadedsocketservice.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gtlsbackend.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gtlscertificate.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gtlsclientconnection.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gtlsconnection.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gtlsdatabase.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gtlsfiledatabase.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gtlsinteraction.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gtlspassword.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gtlsserverconnection.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gunixconnection.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gunixcredentialsmessage.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gunixfdlist.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gunixsocketaddress.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gvfs.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gvolume.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gzlibcompressor.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gzlibdecompressor.h \
  /usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gio-autocleanups.h \
  /usr/local/Cellar/gdk-pixbuf/2.42.10/include/gdk-pixbuf-2.0/gdk-pixbuf/gdk-pixbuf.h \
  /usr/local/Cellar/gdk-pixbuf/2.42.10/include/gdk-pixbuf-2.0/gdk-pixbuf/gdk-pixbuf-macros.h \
  /usr/local/Cellar/gdk-pixbuf/2.42.10/include/gdk-pixbuf-2.0/gdk-pixbuf/gdk-pixbuf-features.h \
  /usr/local/Cellar/gdk-pixbuf/2.42.10/include/gdk-pixbuf-2.0/gdk-pixbuf/gdk-pixbuf-core.h \
  /usr/local/Cellar/gdk-pixbuf/2.42.10/include/gdk-pixbuf-2.0/gdk-pixbuf/gdk-pixbuf-transform.h \
  /usr/local/Cellar/gdk-pixbuf/2.42.10/include/gdk-pixbuf-2.0/gdk-pixbuf/gdk-pixbuf-animation.h \
  /usr/local/Cellar/gdk-pixbuf/2.42.10/include/gdk-pixbuf-2.0/gdk-pixbuf/gdk-pixbuf-simple-anim.h \
  /usr/local/Cellar/gdk-pixbuf/2.42.10/include/gdk-pixbuf-2.0/gdk-pixbuf/gdk-pixbuf-io.h \
  /usr/local/Cellar/gdk-pixbuf/2.42.10/include/gdk-pixbuf-2.0/gdk-pixbuf/gdk-pixbuf-loader.h \
  /usr/local/Cellar/gdk-pixbuf/2.42.10/include/gdk-pixbuf-2.0/gdk-pixbuf/gdk-pixbuf-enum-types.h \
  /usr/local/Cellar/gdk-pixbuf/2.42.10/include/gdk-pixbuf-2.0/gdk-pixbuf/gdk-pixbuf-autocleanups.h \
  /usr/local/Cellar/librsvg/2.55.1/include/librsvg-2.0/librsvg/rsvg-features.h \
  /usr/local/Cellar/librsvg/2.55.1/include/librsvg-2.0/librsvg/rsvg-version.h \
  /usr/local/Cellar/librsvg/2.55.1/include/librsvg-2.0/librsvg/rsvg-cairo.h \
  ../src/bmp/BMPParser.h ../src/Canvas.h ../src/backend/Backend.h \
  ../src/backend/../dll_visibility.h ../src/dll_visibility.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pangocairo.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-attributes.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-font.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-coverage.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-version-macros.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-features.h \
  /usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb.h \
  /usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-blob.h \
  /usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-common.h \
  /usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-buffer.h \
  /usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-unicode.h \
  /usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-font.h \
  /usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-face.h \
  /usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-set.h \
  /usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-draw.h \
  /usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-deprecated.h \
  /usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-map.h \
  /usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-shape.h \
  /usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-shape-plan.h \
  /usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-style.h \
  /usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-version.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-types.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-gravity.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-matrix.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-script.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-language.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-bidi-type.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-direction.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-color.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-break.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-item.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-context.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-fontmap.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-fontset.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-engine.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-glyph.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-enum-types.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-fontset-simple.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-glyph-item.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-layout.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-tabs.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-markup.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-renderer.h \
  /usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-utils.h
../src/Image.cc:
../src/Image.h:
/usr/local/Cellar/cairo/1.16.0_5/include/cairo/cairo.h:
/usr/local/Cellar/cairo/1.16.0_5/include/cairo/cairo-version.h:
/usr/local/Cellar/cairo/1.16.0_5/include/cairo/cairo-features.h:
/usr/local/Cellar/cairo/1.16.0_5/include/cairo/cairo-deprecated.h:
../src/CanvasError.h:
../node_modules/nan/nan.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/node_version.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/uv.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/uv/errno.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/uv/version.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/uv/unix.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/uv/threadpool.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/uv/darwin.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/node.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/v8.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/cppgc/common.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/v8config.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/v8-internal.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/v8-version.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/v8-platform.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/node_buffer.h:
/Users/marketin/Library/Caches/node-gyp/14.20.0/include/node/node_object_wrap.h:
../node_modules/nan/nan_callbacks.h:
../node_modules/nan/nan_callbacks_12_inl.h:
../node_modules/nan/nan_maybe_43_inl.h:
../node_modules/nan/nan_converters.h:
../node_modules/nan/nan_converters_43_inl.h:
../node_modules/nan/nan_new.h:
../node_modules/nan/nan_implementation_12_inl.h:
../node_modules/nan/nan_persistent_12_inl.h:
../node_modules/nan/nan_weak.h:
../node_modules/nan/nan_object_wrap.h:
../node_modules/nan/nan_private.h:
../node_modules/nan/nan_typedarray_contents.h:
../node_modules/nan/nan_json.h:
../node_modules/nan/nan_scriptorigin.h:
/usr/local/Cellar/jpeg-turbo/2.1.4/include/jpeglib.h:
/usr/local/Cellar/jpeg-turbo/2.1.4/include/jconfig.h:
/usr/local/Cellar/jpeg-turbo/2.1.4/include/jmorecfg.h:
/usr/local/Cellar/jpeg-turbo/2.1.4/include/jerror.h:
/usr/local/include/gif_lib.h:
/usr/local/Cellar/librsvg/2.55.1/include/librsvg-2.0/librsvg/rsvg.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib-object.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gbinding.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/galloca.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gtypes.h:
/usr/local/Cellar/glib/2.74.4/lib/glib-2.0/include/glibconfig.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gmacros.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gversionmacros.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/garray.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gasyncqueue.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gthread.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gatomic.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/glib-typeof.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gerror.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gquark.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gutils.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gbacktrace.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gbase64.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gbitlock.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gbookmarkfile.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gdatetime.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gtimezone.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gbytes.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gcharset.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gchecksum.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gconvert.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gdataset.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gdate.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gdir.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/genviron.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gfileutils.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/ggettext.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/ghash.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/glist.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gmem.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gnode.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/ghmac.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/ghook.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/ghostutils.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/giochannel.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gmain.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gpoll.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gslist.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gstring.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gunicode.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gkeyfile.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gmappedfile.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gmarkup.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gmessages.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gvariant.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gvarianttype.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/goption.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gpattern.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gprimes.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gqsort.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gqueue.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/grand.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/grcbox.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/grefcount.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/grefstring.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gregex.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gscanner.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gsequence.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gshell.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gslice.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gspawn.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gstrfuncs.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gstringchunk.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gstrvbuilder.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gtestutils.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gthreadpool.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gtimer.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gtrashstack.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gtree.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/guri.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/guuid.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/gversion.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/deprecated/gallocator.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/deprecated/gcache.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/deprecated/gcompletion.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/deprecated/gmain.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/deprecated/grel.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/deprecated/gthread.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/glib/glib-autocleanups.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gobject.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gtype.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gvalue.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gparam.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gclosure.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gsignal.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gmarshal.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gboxed.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/glib-types.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gbindinggroup.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/genums.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/glib-enumtypes.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gparamspecs.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gsignalgroup.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gsourceclosure.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gtypemodule.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gtypeplugin.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gvaluearray.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gvaluetypes.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gobject/gobject-autocleanups.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gio.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/giotypes.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gioenums.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gaction.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gactiongroup.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gactiongroupexporter.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gactionmap.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gappinfo.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gapplication.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gapplicationcommandline.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gasyncinitable.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/ginitable.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gasyncresult.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gbufferedinputstream.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gfilterinputstream.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/ginputstream.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gbufferedoutputstream.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gfilteroutputstream.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/goutputstream.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gbytesicon.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gcancellable.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gcharsetconverter.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gconverter.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gcontenttype.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gconverterinputstream.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gconverteroutputstream.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gcredentials.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdatagrambased.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdatainputstream.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdataoutputstream.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusactiongroup.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusaddress.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusauthobserver.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusconnection.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbuserror.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusinterface.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusinterfaceskeleton.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusintrospection.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusmenumodel.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusmessage.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusmethodinvocation.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusnameowning.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusnamewatching.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusobject.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusobjectmanager.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusobjectmanagerclient.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusobjectmanagerserver.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusobjectproxy.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusobjectskeleton.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusproxy.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusserver.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdbusutils.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdebugcontroller.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdebugcontrollerdbus.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdrive.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdtlsclientconnection.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdtlsconnection.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gdtlsserverconnection.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gemblemedicon.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gicon.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gemblem.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gfile.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gfileattribute.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gfileenumerator.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gfileicon.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gfileinfo.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gfileinputstream.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gfileiostream.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/giostream.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gioerror.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gfilemonitor.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gfilenamecompleter.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gfileoutputstream.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/ginetaddress.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/ginetaddressmask.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/ginetsocketaddress.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsocketaddress.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gioenumtypes.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/giomodule.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gmodule.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gioscheduler.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/glistmodel.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gliststore.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gloadableicon.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gmemoryinputstream.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gmemorymonitor.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gmemoryoutputstream.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gmenu.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gmenumodel.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gmenuexporter.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gmount.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gmountoperation.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gnativesocketaddress.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gnativevolumemonitor.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gvolumemonitor.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gnetworkaddress.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gnetworkmonitor.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gnetworkservice.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gnotification.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gpermission.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gpollableinputstream.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gpollableoutputstream.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gpollableutils.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gpowerprofilemonitor.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gpropertyaction.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gproxy.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gproxyaddress.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gproxyaddressenumerator.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsocketaddressenumerator.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gproxyresolver.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gremoteactiongroup.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gresolver.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gresource.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gseekable.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsettings.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsettingsschema.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsimpleaction.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsimpleactiongroup.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsimpleasyncresult.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsimpleiostream.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsimplepermission.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsimpleproxyresolver.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsocket.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsocketclient.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsocketconnectable.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsocketconnection.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsocketcontrolmessage.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsocketlistener.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsocketservice.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsrvtarget.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsubprocess.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gsubprocesslauncher.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gtask.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gtcpconnection.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gtcpwrapperconnection.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gtestdbus.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gthemedicon.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gthreadedsocketservice.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gtlsbackend.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gtlscertificate.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gtlsclientconnection.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gtlsconnection.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gtlsdatabase.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gtlsfiledatabase.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gtlsinteraction.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gtlspassword.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gtlsserverconnection.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gunixconnection.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gunixcredentialsmessage.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gunixfdlist.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gunixsocketaddress.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gvfs.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gvolume.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gzlibcompressor.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gzlibdecompressor.h:
/usr/local/Cellar/glib/2.74.4/include/glib-2.0/gio/gio-autocleanups.h:
/usr/local/Cellar/gdk-pixbuf/2.42.10/include/gdk-pixbuf-2.0/gdk-pixbuf/gdk-pixbuf.h:
/usr/local/Cellar/gdk-pixbuf/2.42.10/include/gdk-pixbuf-2.0/gdk-pixbuf/gdk-pixbuf-macros.h:
/usr/local/Cellar/gdk-pixbuf/2.42.10/include/gdk-pixbuf-2.0/gdk-pixbuf/gdk-pixbuf-features.h:
/usr/local/Cellar/gdk-pixbuf/2.42.10/include/gdk-pixbuf-2.0/gdk-pixbuf/gdk-pixbuf-core.h:
/usr/local/Cellar/gdk-pixbuf/2.42.10/include/gdk-pixbuf-2.0/gdk-pixbuf/gdk-pixbuf-transform.h:
/usr/local/Cellar/gdk-pixbuf/2.42.10/include/gdk-pixbuf-2.0/gdk-pixbuf/gdk-pixbuf-animation.h:
/usr/local/Cellar/gdk-pixbuf/2.42.10/include/gdk-pixbuf-2.0/gdk-pixbuf/gdk-pixbuf-simple-anim.h:
/usr/local/Cellar/gdk-pixbuf/2.42.10/include/gdk-pixbuf-2.0/gdk-pixbuf/gdk-pixbuf-io.h:
/usr/local/Cellar/gdk-pixbuf/2.42.10/include/gdk-pixbuf-2.0/gdk-pixbuf/gdk-pixbuf-loader.h:
/usr/local/Cellar/gdk-pixbuf/2.42.10/include/gdk-pixbuf-2.0/gdk-pixbuf/gdk-pixbuf-enum-types.h:
/usr/local/Cellar/gdk-pixbuf/2.42.10/include/gdk-pixbuf-2.0/gdk-pixbuf/gdk-pixbuf-autocleanups.h:
/usr/local/Cellar/librsvg/2.55.1/include/librsvg-2.0/librsvg/rsvg-features.h:
/usr/local/Cellar/librsvg/2.55.1/include/librsvg-2.0/librsvg/rsvg-version.h:
/usr/local/Cellar/librsvg/2.55.1/include/librsvg-2.0/librsvg/rsvg-cairo.h:
../src/bmp/BMPParser.h:
../src/Canvas.h:
../src/backend/Backend.h:
../src/backend/../dll_visibility.h:
../src/dll_visibility.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pangocairo.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-attributes.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-font.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-coverage.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-version-macros.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-features.h:
/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb.h:
/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-blob.h:
/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-common.h:
/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-buffer.h:
/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-unicode.h:
/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-font.h:
/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-face.h:
/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-set.h:
/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-draw.h:
/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-deprecated.h:
/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-map.h:
/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-shape.h:
/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-shape-plan.h:
/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-style.h:
/usr/local/Cellar/harfbuzz/5.3.1/include/harfbuzz/hb-version.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-types.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-gravity.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-matrix.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-script.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-language.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-bidi-type.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-direction.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-color.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-break.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-item.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-context.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-fontmap.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-fontset.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-engine.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-glyph.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-enum-types.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-fontset-simple.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-glyph-item.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-layout.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-tabs.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-markup.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-renderer.h:
/usr/local/Cellar/pango/1.50.12/include/pango-1.0/pango/pango-utils.h:
